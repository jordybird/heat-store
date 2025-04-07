"use client"

import React, { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const Gas = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Mock data with 10 items alternating between the two images
  const products = [
    {
      id: 1,
      name: "BERNIEHANA BUTTER",
      category: "FLOWER TUB",
      image: "/cereal2.png",
      details: {
        aroma: "COMPLEX CREAMY AND BUTTERY FUNK, WITH A SWEET FLORAL AND BERRY GAS",
        flavor: "BUTTERY JASMINE FLORAL NOTES, WITH AN EARTHY BERRY GAS",
        experience: "CALM AND RELAXING BODY HIGH"
      },
      availability: "AVAILABLE AT ALL CA STORES"
    },
    {
      id: 2,
      name: "GARY PAYTON",
      category: "PREMIUM GAS",
      image: "/gas2.png",
      details: {
        aroma: "PUNGENT DIESEL WITH HINTS OF PEPPER AND CITRUS",
        flavor: "SPICY DIESEL WITH SWEET UNDERTONES AND EARTHY FINISH",
        experience: "UPLIFTING CEREBRAL HIGH WITH BALANCED RELAXATION"
      },
      availability: "AVAILABLE IN SELECT LOCATIONS"
    },
    {
      id: 3,
      name: "CEREAL MILK",
      category: "FLOWER TUB",
      image: "/cereal2.png",
      details: {
        aroma: "SWEET CREAMY NOTES WITH HINTS OF VANILLA AND BERRIES",
        flavor: "SMOOTH CREAMY TASTE WITH SUBTLE FRUIT AND VANILLA",
        experience: "BALANCED HIGH WITH CREATIVE EUPHORIA"
      },
      availability: "AVAILABLE NATIONWIDE"
    },
    {
      id: 4,
      name: "LONDON POUND CAKE",
      category: "PREMIUM GAS",
      image: "/gas2.png",
      details: {
        aroma: "SWEET COOKIE DOUGH WITH GRAPE AND BERRY NOTES",
        flavor: "SWEET BERRY WITH COOKIE UNDERTONES AND GRAPE FINISH",
        experience: "DEEPLY RELAXING WITH EUPHORIC SENSATIONS"
      },
      availability: "LIMITED AVAILABILITY"
    },
    {
      id: 5,
      name: "PINK ROZAY",
      category: "FLOWER TUB",
      image: "/cereal2.png",
      details: {
        aroma: "FLORAL ROSÉ WINE WITH BERRY AND CITRUS NOTES",
        flavor: "SWEET FRUITY NOTES WITH FLORAL UNDERTONES",
        experience: "RELAXING FULL-BODY EFFECT WITH CEREBRAL UPLIFT"
      },
      availability: "EXCLUSIVE RELEASE"
    },
    {
      id: 6,
      name: "CHEETAH PISS",
      category: "PREMIUM GAS",
      image: "/gas2.png",
      details: {
        aroma: "SHARP AMMONIA WITH CITRUS AND PINE UNDERTONES",
        flavor: "CITRUS FORWARD WITH DIESEL AND EARTHY FINISH",
        experience: "ENERGETIC AND FOCUSED HIGH"
      },
      availability: "AVAILABLE AT PREMIUM LOCATIONS"
    },
    {
      id: 7,
      name: "SNOW MAN",
      category: "FLOWER TUB",
      image: "/cereal2.png",
      details: {
        aroma: "FRESH PINE WITH MINT AND SWEET VANILLA NOTES",
        flavor: "COOL MINT WITH PINE AND CREAMY FINISH",
        experience: "UPLIFTING EFFECT WITH CLEAR-HEADED FOCUS"
      },
      availability: "SEASONAL RELEASE"
    },
    {
      id: 8,
      name: "GEORGIA PIE",
      category: "PREMIUM GAS",
      image: "/gas2.png",
      details: {
        aroma: "SWEET PEACH PIE WITH SPICE AND EARTH NOTES",
        flavor: "RICH PEACH WITH SWEET PASTRY AND SPICE FINISH",
        experience: "EUPHORIC AND RELAXING FULL-BODY EFFECT"
      },
      availability: "REGIONAL EXCLUSIVE"
    },
    {
      id: 9,
      name: "WHITE RUNTZ",
      category: "FLOWER TUB",
      image: "/cereal2.png",
      details: {
        aroma: "SWEET CANDY WITH TROPICAL FRUIT NOTES",
        flavor: "SUGARY CANDY WITH TROPICAL AND CITRUS UNDERTONES",
        experience: "BALANCED EUPHORIA WITH RELAXING BODY EFFECTS"
      },
      availability: "HIGH DEMAND - LIMITED STOCK"
    },
    {
      id: 10,
      name: "GELATTI",
      category: "PREMIUM GAS",
      image: "/gas2.png",
      details: {
        aroma: "SWEET GELATO WITH DIESEL AND COOKIE NOTES",
        flavor: "RICH DESSERT TASTE WITH FUEL UNDERTONES",
        experience: "POTENT RELAXATION WITH CREATIVE EUPHORIA"
      },
      availability: "FLAGSHIP PRODUCT"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === products.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? products.length - 1 : prev - 1))
  }

  const currentProduct = products[currentSlide]

  return (
    <div className="relative w-full bg-background text-foreground py-10" ref={carouselRef}>
      <div className="text-center mb-8">
        <p className="text-2xl uppercase mb-2">SHOP ⛽</p>
        <h2 className="text-4xl md:text-5xl font-bold uppercase">
          {currentProduct.name} - {currentProduct.category}
        </h2>
      </div>
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto">
        <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
          <img
            src={currentProduct.image}
            alt={currentProduct.name}
            className="h-auto max-h-96 object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
          <div className="space-y-6 mt-6">
            <div>
              <p className="text-lg"><span className="font-bold">AROMA:</span> {currentProduct.details.aroma}</p>
            </div>
            <div>
              <p className="text-lg"><span className="font-bold">FLAVOR:</span> {currentProduct.details.flavor}</p>
            </div>
            <div>
              <p className="text-lg"><span className="font-bold">EXPERIENCE:</span> {currentProduct.details.experience}</p>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="#"
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground text-center py-3 px-8 rounded font-bold transition-colors"
            >
              {currentProduct.availability}
            </a>
          </div>
        </div>
      </div>

      {/* Navigation buttons - circular style */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 border border-foreground/50 rounded-full flex items-center justify-center text-foreground hover:bg-foreground/10 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 border border-foreground/50 rounded-full flex items-center justify-center text-foreground hover:bg-foreground/10 z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>
      <Separator className="h-[2px] dark:bg-white/20 bg-gray-400 mt-12" />
    </div>
    
  )
}

export default Gas