"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { NewsArticle } from "@/types";
import { Frown } from "lucide-react";

const categories = ["All", "Company", "Aircrafts", "Product", "Policy", "Community"];

interface DirectoryProps {
  articles: NewsArticle[];
}

export default function Directory({ articles }: DirectoryProps) {
  const [loadedArticles, setLoadedArticles] = useState<NewsArticle[]>(articles);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const filteredArticles =
    selectedCategory === "All"
      ? loadedArticles
      : loadedArticles.filter((article) => article.category === selectedCategory);

  const handleSeeMore = async () => {
    setIsLoading(true);
    const skip = loadedArticles.length;
    const limit = 12;
    try {
      const res = await fetch(`/api/articles?skip=${skip}&limit=${limit}`);
      if (!res.ok) {
        throw new Error("Failed to fetch more articles");
      }
      const newArticles: NewsArticle[] = await res.json();
      if (newArticles.length < limit) {
        setHasMore(false);
      }
      setLoadedArticles((prev) => [...prev, ...newArticles]);
    } catch (error) {
      console.error("Error fetching more articles:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
          News by topic
        </h2>

        {/* Category buttons */}
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm transition-colors 
                ${
                  cat === selectedCategory
                    ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 border border-gray-900 dark:border-gray-100"
                    : "bg-transparent text-gray-900 dark:text-gray-100 border border-gray-900 dark:border-gray-100 hover:bg-green-100 dark:hover:bg-green-800"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredArticles.map((article) => {
              const { title, slug, date, featuredImage } = article;
              const rawUrl = featuredImage?.url;
              const imageUrl = rawUrl
                ? rawUrl.startsWith("http")
                  ? rawUrl
                  : `https:${rawUrl}`
                : "/placeholder.jpg";
              const formattedDate = new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });
              return (
                <Link
                  key={article.sys.id}
                  href={`/newsroom/${slug}`}
                  className="group block rounded-lg overflow-hidden cursor-pointer bg-transparent"
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
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:underline">
                        {title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{formattedDate}</p>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-gray-500">
            <Frown size={32} className="mb-2" />
            <p className="text-lg">Nothing to see here yet!</p>
          </div>
        )}

        {/* See More Button */}
        {hasMore && (
          <div className="mt-12 text-left">
            <button
              onClick={handleSeeMore}
              disabled={isLoading}
              className="px-4 py-1.5 bg-transparent text-gray-900 dark:text-gray-100 border border-gray-900 dark:border-gray-100 font-semibold rounded-lg transition-colors hover:bg-green-100 dark:hover:bg-green-800 hover:text-black"
            >
              {isLoading ? "Loading..." : "View more"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
