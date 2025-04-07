'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// Mock data for the vapes
const vapesData = [
  { id: 1, title: 'Cloud Master 3000', price: 49.99 },
  { id: 2, title: 'Vapor King Deluxe', price: 59.99 },
  { id: 3, title: 'Mist Runner Pro', price: 44.99 },
  { id: 4, title: 'Elemental Puff', price: 39.99 },
  { id: 5, title: 'Nebula X Vape', price: 64.99 },
  { id: 6, title: 'Zen Vapor', price: 54.99 },
  { id: 7, title: 'Arctic Blast', price: 47.99 },
  { id: 8, title: 'Stealth Vaper', price: 52.99 },
  { id: 9, title: 'Smooth Flow Elite', price: 69.99 },
  { id: 10, title: 'Cloud Chaser', price: 49.99 },
];

const Vapes = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      
      // Check if we can still scroll left after scrolling
      setTimeout(() => {
        if (scrollRef.current) {
          setShowLeftArrow(scrollRef.current.scrollLeft > 10);
          setShowRightArrow(
            scrollRef.current.scrollLeft + scrollRef.current.clientWidth < 
            scrollRef.current.scrollWidth - 10
          );
        }
      }, 300);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      
      // Check if we can still scroll right after scrolling
      setTimeout(() => {
        if (scrollRef.current) {
          setShowLeftArrow(scrollRef.current.scrollLeft > 10);
          setShowRightArrow(
            scrollRef.current.scrollLeft + scrollRef.current.clientWidth < 
            scrollRef.current.scrollWidth - 10
          );
        }
      }, 300);
    }
  };

  // Check scroll position on mount and on scroll
  const handleScroll = () => {
    if (scrollRef.current) {
      setShowLeftArrow(scrollRef.current.scrollLeft > 10);
      setShowRightArrow(
        scrollRef.current.scrollLeft + scrollRef.current.clientWidth < 
        scrollRef.current.scrollWidth - 10
      );
    }
  };

  return (
    <div className="relative w-full">
      <div className="w-full px-4 py-8">
        <h2 className=" text-2xl md:text-5xl font-bold mb-8 text-center">Featured Vapes</h2>
        
        <div className="relative">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button 
              onClick={scrollLeft}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full shadow-lg"
              aria-label="Scroll left"
            >
              <ChevronLeft size={28} />
            </button>
          )}
          
          {/* Products Container */}
          <div 
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4 snap-x px-4 md:px-8" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onScroll={handleScroll}
          >
            {vapesData.map((vape) => (
              <div key={vape.id} className="flex-none w-64 md:w-72 snap-start cursor-pointer group">
                <div className="relative">
                  <div className="relative h-80 w-full">
                    <Image
                      src="/vape.jpg"
                      alt={vape.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="font-medium text-left group-hover:underline transition-all">{vape.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right Arrow */}
          {showRightArrow && (
            <button 
              onClick={scrollRight}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full shadow-lg"
              aria-label="Scroll right"
            >
              <ChevronRight size={28} />
            </button>
          )}
        </div>
      </div>
      
      {/* Bottom separator */}
      <Separator className="h-[2px] dark:bg-white/20 bg-gray-400" />
    </div>
  );
};

export default Vapes;

