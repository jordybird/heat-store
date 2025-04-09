import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { NewsArticle } from "@/types";

interface LatestProps {
  articles: NewsArticle[];
}

export default function Latest({ articles }: LatestProps) {
  console.log("[Latest] articles array:", articles);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl text-[#28282B] font-bold mb-8">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {articles.map((article) => {
            console.log("[Latest] article:", article);

            // Destructure directly from article
            const { title, slug, date, featuredImage } = article;
            console.log("[Latest] Article properties:", { title, slug, date, featuredImage });

            const rawUrl = featuredImage?.url;
            console.log("[Latest] rawUrl:", rawUrl);

            const imageUrl = rawUrl
              ? rawUrl.startsWith("http")
                ? rawUrl
                : `https:${rawUrl}`
              : "/placeholder.jpg";
            console.log("[Latest] imageUrl:", imageUrl);

            const formattedDate = new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            });
            console.log("[Latest] formattedDate:", formattedDate);

            return (
              <Link
                key={article.sys.id}
                href={`/newsroom/${slug}`}
                className="group block bg-white rounded-lg overflow-hidden cursor-pointer"
              >
                <article className="w-full h-full">
                  <div className="relative w-full pt-[74%] rounded-lg overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt={title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="absolute inset-0 w-full h-full object-cover rounded-lg transition-transform duration-300"
                      style={{ objectPosition: "center" }}
                    />
                  </div>
                  <div className="p-1 mt-2">
                    <h3 className="text-xl font-bold mb-2 text-[#28282B] group-hover:underline">
                      {title}
                    </h3>
                    <p className="text-gray-600 text-sm">{formattedDate}</p>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
