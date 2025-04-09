// components/blog/Hero.tsx

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { NewsArticle } from "@/types"; // Ensure this type exists in your project

interface HeroProps {
  article: NewsArticle;
}

export default function Hero({ article }: HeroProps) {
  // Local state to manage hover effects
  const [isReadMoreHovered, setIsReadMoreHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);

  // If no article is provided, render null
  if (!article) {
    return null;
  }

  // Destructure article properties
  const { title, slug, date, description, featuredImage } = article;

  // Compute image URL using a fallback if needed
  const rawUrl = featuredImage?.url;
  const imageUrl = rawUrl
    ? rawUrl.startsWith("http")
      ? rawUrl
      : `https:${rawUrl}`
    : "/placeholder.jpg";

  // Format the publication date
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // Determine if the title should be underlined based on hover state
  const underlineTitle = isReadMoreHovered || isImageHovered;

  return (
    // No explicit background color here; the component uses the parent's background.
    <section className="relative w-full">
      <div className="container mx-auto px-4 xl:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-start">
          <Link
            href={`/blog/${slug}`}
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
            className="group relative h-[250px] lg:h-[420px] w-full cursor-pointer order-first lg:order-last mt-8 lg:-mt-12"
          >
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover rounded-lg hover:opacity-95 transition-opacity lg:mt-32"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </Link>
          <div className="py-4 lg:py-16 order-last lg:order-first">
            <div className="max-w-xl">
              <time className="block text-gray-600 dark:text-gray-400 mb-4 text-lg">
                {formattedDate}
              </time>
              <Link href={`/blog/${slug}`}>
                <h1
                  className={`text-gray-900 dark:text-gray-100 text-4xl lg:text-5xl font-bold mb-6 leading-tight ${
                    underlineTitle ? "underline" : "hover:underline"
                  }`}
                >
                  {title}
                </h1>
              </Link>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {description}
              </p>
              <Link
                href={`/blog/${slug}`}
                className="inline-flex items-center justify-center px-8 py-3 bg-[#128226] text-white font-semibold rounded-lg hover:opacity-90 transition-colors duration-200"
                onMouseEnter={() => setIsReadMoreHovered(true)}
                onMouseLeave={() => setIsReadMoreHovered(false)}
              >
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
