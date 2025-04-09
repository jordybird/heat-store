export interface NewsArticle {
    sys: {
      id: string;
    };
    title: string;
    slug: string;
    date: string;
    description: string;
    content: Document;
    featuredImage?: any;
    category?: string;
    author: string;
  }
  