"use client";
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Function to update the state based on window width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
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
      
      {/* Hero Content - Only shown on desktop */}
      {!isMobile && (
        <div className="lg:h-screen flex flex-col justify-center items-center text-center text-white relative z-10">
          <div className="container max-w-3xl px-4">
            <h1 className="font-bold mb-4 text-shadow-lg animate-fadeIn text-5xl">
              Eat. Play. Laugh.
            </h1>
            <p className="mb-8 animate-slideUp text-shadow-sm text-xl">
              We can&apos;t wait to celebrate with you—join us for a day of great food, exciting entertainment, and unforgettable memories!
            </p>
            <Button 
              size="lg" 
              className="font-semibold px-6 py-3 animate-slideUp animation-delay-200"
            >
              Explore Menu
            </Button>
          </div>
        </div>
      )}
      
      {/* Mobile Text Section - Shown below hero on mobile */}
      {isMobile && (
        <div className="py-8 bg-black text-center text-white relative z-10">
          <div className="container max-w-3xl px-4">
            <h1 className="font-bold mb-4 text-shadow-lg animate-fadeIn text-2xl">
              Eat. Play. Laugh.
            </h1>
            <p className="mb-8 animate-slideUp text-shadow-sm text-base">
              We can&apos;t wait to celebrate with you—join us for a day of great food, exciting entertainment, and unforgettable memories!
            </p>
            <Button 
              size="lg" 
              className="font-semibold px-6 py-3 animate-slideUp animation-delay-200"
            >
              Explore Menu
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
  