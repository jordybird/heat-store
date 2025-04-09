// lib/api.js

// GraphQL fields to fetch for each article
const ARTICLE_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  slug
  summary
  details {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
  date
  authorName
  categoryName
  articleImage {
    url
    description
  }
`;

/**
 * Executes a GraphQL query against the Contentful API
 */
async function fetchGraphQL(query, preview = false) {
  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const token = preview
    ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
    : process.env.CONTENTFUL_ACCESS_TOKEN;

  if (!spaceId || !token) {
    throw new Error("Missing Contentful environment variables");
  }

  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${spaceId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ["articles"] },
    }
  );

  const json = await response.json();

  if (json.errors) {
    console.error("[Contentful GraphQL Error]", JSON.stringify(json.errors, null, 2));
    throw new Error("Failed to fetch from Contentful");
  }

  return json;
}

/**
 * Extracts articles from the GraphQL response
 */
function extractArticleEntries(response) {
  return response?.data?.knowledgeArticleCollection?.items || [];
}

/**
 * Returns all articles (limited and ordered)
 */
export async function getAllArticles(limit = 3, isDraftMode = false) {
  const query = `
    query {
      knowledgeArticleCollection(
        where: { slug_exists: true },
        order: date_DESC,
        limit: ${limit},
        preview: ${isDraftMode}
      ) {
        items {
          ${ARTICLE_GRAPHQL_FIELDS}
        }
      }
    }
  `;
  const response = await fetchGraphQL(query, isDraftMode);
  return extractArticleEntries(response);
}

/**
 * Returns a single article by slug
 */
export async function getArticle(slug, isDraftMode = false) {
  const query = `
    query {
      knowledgeArticleCollection(
        where: { slug: "${slug}" },
        limit: 1,
        preview: ${isDraftMode}
      ) {
        items {
          ${ARTICLE_GRAPHQL_FIELDS}
        }
      }
    }
  `;
  const response = await fetchGraphQL(query, isDraftMode);
  const articles = extractArticleEntries(response);
  return articles[0] ?? null;
}
