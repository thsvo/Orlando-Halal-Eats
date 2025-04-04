'use client'
import React from 'react'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from 'next/image';
import Slide from './Slide';
import SponsorBe from './SponsorBe';

const Sponsors = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#eef0f4]">
      <Header></Header>
      <h1 className="text-2xl sm:text-3xl md:text-4xl items-center text-center lg:text-5xl font-bold text-black italic mb-2 sm:mb-3 md:mb-4 pt-4 sm:pt-6">
        Sponsors Spotlight
      </h1>
      <div className="h-2 sm:h-3 md:h-4"></div>
      <Slide></Slide>
      {/* Flyer Content */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl items-center text-center lg:text-5xl font-bold text-black italic my-4 sm:my-6 md:my-8">
        Sponsors
      </h1>
      <main className="flex-grow relative h-[350px] sm:h-[350px] md:h-[450px] lg:h-[550px] bg-[#eef0f4]">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/sponsor1.jpeg"
            alt="Sponsor 1"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 80vw"
            style={{ width: '100%', height: '100%' }}
            className="object-contain"
          />
        </div>
      </main>
      <SponsorBe></SponsorBe>
      <Footer></Footer>
    </div>
  )
}

export default Sponsors