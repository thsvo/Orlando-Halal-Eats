"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contests = () => {
  const contestImages = [
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
  ];

  return (
    <div className="w-full py-16 px-4 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Exciting Contests
        </h1>
        
        <p className="text-center text-muted-foreground mb-12">
          Did you want the chance to win up to $1000? Reserve a spot for one of our contests!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contestImages.map((image, index) => (
            <div key={index} className="perspective-1000">
              <Card className="overflow-hidden border-0 shadow-lg h-full">
                <CardContent className="p-0">
                  <div className="relative h-64 w-full">
                    <img 
                      src={image} 
                      alt={`Contest ${index + 1}`} 
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white font-medium">Contest {index + 1}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <Button 
            size="lg" 
            className="bg-[#0066c2] hover:bg-[#0055a5] text-white font-medium px-8 py-6 rounded-md shadow-md"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contests;