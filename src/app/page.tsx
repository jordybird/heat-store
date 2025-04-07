'use client'

import React from 'react'
import Header from '@/components/header/home'
import { Separator } from '@/components/ui/separator'
import Hero from '@/components/home/hero'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Separator className="h-[2px] bg-white/20 dark:bg-white/20 bg-gray-400 " />
      <div className="">
        <Hero />
      </div>
      {/* Rest of your page content */}
    </main>
  )
}