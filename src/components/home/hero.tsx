"use client"

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      id: 1,
      leftContent: {
        title: "COOKIES { BOLINGBROOK } NOW HIRING",
        subtitle: "APPLY NOW TO WORK AT COOKIES IN BOLINGBROOK, IL",
        buttonText: "LEARN MORE",
        buttonLink: "#"
      },
      rightContent: {
        image: "/vape.jpg",
        altText: "Cookies Bolingbrook"
      }
    },
    {
      id: 2,
      leftContent: {
        title: "AVAILABLE NOW | COOKIES TERPOLOGY VAPES",
        subtitle: "THE PERFECT VAPE FOR ANY TIME OF DAY",
        buttonText: "SHOP NOW",
        buttonLink: "#"
      },
      rightContent: {
        image: "/vape.jpg",
        altText: "Cookies Terpology Vapes"
      }
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const currentItem = slides[currentSlide]

  return (
    <div className="relative w-full">
      <div className="flex flex-col md:flex-row h-[600px] md:h-[500px] relative">
        {/* Mobile layout: Image appears first - reduced bottom padding/margin */}
        <div className="order-1 md:order-2 mt-4 md:mt-0 w-full md:w-1/2 bg-background flex items-center justify-center py-2 mb-0 h-[280px] md:h-full">
          <img 
            src={currentItem.rightContent.image}
            alt={currentItem.rightContent.altText}
            className="w-[90%] h-[260px] md:h-[90%] object-contain"
          />
        </div>

        {/* Vertical Separator - only visible on desktop */}
        <div className="hidden md:block absolute h-full right-1/2 top-0 bottom-0">
          <Separator orientation="vertical" className="h-full w-[2px] dark:bg-white/20 bg-gray-400" />
        </div>

        {/* Text content - reduced top padding/margin */}
        <div className="order-2 md:order-1 bg-background text-foreground w-full md:w-1/2 p-6 pt-2 md:p-10 flex flex-col justify-center items-center text-center h-[280px] md:h-full">
          <h1 className="text-3xl md:text-6xl font-bold mb-2 uppercase">
            {currentItem.leftContent.title}
          </h1>
          <p className="text-sm md:text-lg text-primary mb-6">
            {currentItem.leftContent.subtitle}
          </p>
          <a 
            href={currentItem.leftContent.buttonLink}
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-center py-3 px-8 rounded font-bold transition-colors w-44"
          >
            {currentItem.leftContent.buttonText}
          </a>
        </div>
      </div>

      {/* Bottom separator */}
      <Separator className="h-[2px] dark:bg-white/20 bg-gray-400" />

      {/* Navigation buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 top-[35%] md:top-1/2 -translate-y-1/2 bg-background/30 hover:bg-background/50 text-foreground p-2 rounded-full z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-2 top-[35%] md:top-1/2 -translate-y-1/2 bg-background/30 hover:bg-background/50 text-foreground p-2 rounded-full z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  )
}

export default Hero