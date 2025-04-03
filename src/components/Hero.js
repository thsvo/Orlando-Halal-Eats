"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
  const isMobile = typeof window !== 'undefined' ? window.innerWidth <= 600 : false;
  
  return (
    <div className="relative overflow-hidden lg:h-screen">
      {/* YouTube Background */}
      <iframe 
        className={cn(
          "absolute left-0 w-full border-none pointer-events-none -z-10 opacity-70",
          isMobile ? "top-0 h-full" : "-top-[60px] h-[calc(100%+120px)]"
        )}
        src="https://www.youtube.com/embed/5l8un9FhYVM?autoplay=1&mute=1&controls=0&loop=1&playlist=5l8un9FhYVM&showinfo=0&rel=0&enablejsapi=1"
        title="Food Festival Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      
      {/* Hero Content */}
      <div className={cn(
        "lg:h-screen flex flex-col justify-center items-center text-center text-white relative z-10",
        isMobile ? "pt-[50rem]" : ""
      )}>
        <div className="container max-w-3xl px-4">
          <h1 
            className={cn(
              "font-bold mb-4 text-shadow-lg animate-fadeIn",
              isMobile ? "text-2xl" : "text-5xl"
            )}
          >
            Eat. Play. Laugh.
          </h1>
          <p 
            className={cn(
              "mb-8 animate-slideUp text-shadow-sm",
              isMobile ? "text-base" : "text-xl"
            )}
          >
            We can't wait to celebrate with you—join us for a day of great food, exciting entertainment, and unforgettable memories!
          </p>
          <Button 
            size="lg" 
            className="font-semibold px-6 py-3 animate-slideUp animation-delay-200"
          >
            Explore Menu
          </Button>
        </div>
      </div>
    </div>
  );
}
  