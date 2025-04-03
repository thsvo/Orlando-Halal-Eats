import React from "react";
import { Card } from "@/components/ui/card";

const Sponsors = () => {
  const sponsors = [
    { name: "LaserLab", logo: "/10.png" },
    { name: "Hemani", logo: "/11.png" },
    { name: "Alpha Equity", logo: "/12.png" },
    { name: "Pardesi", logo: "13.png" },
    { name: "Chick Spot", logo: "/14.png" },
    { name: "Scent Sense", logo: "/15.png" },
    { name: "Dr. Herbalist", logo: "/16.png" },
    { name: "Wise Academy", logo: "/17.png" },
    { name: "Tacos", logo: "/18.png" },
    { name: "It Worth More", logo: "/19.png" },
    { name: "Jungle Safaris", logo: "/20.png" },
    { name: "BMG", logo: "/21.png" },
  ];

  return (
    <div className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full">
        <div className="flex justify-between">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-6 h-6 text-amber-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="h-20 w-px bg-amber-300"></div>
              <div className="w-8 h-8 rounded-full bg-amber-100 border border-amber-300"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#D35400] mb-2">Our Sponsors</h2>
          <p className="text-[#2E7D32] text-xl">Food Festival 2025</p>
        </div>

        {/* Main sponsor grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {sponsors.map((sponsor, index) => (
            <Card 
              key={index} 
              className="p-4 flex items-center justify-center hover:shadow-md transition-shadow duration-300 bg-white border-0"
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="max-h-16 md:max-h-20 w-auto object-contain" 
              />
            </Card>
          ))}
        </div>

        {/* Secondary sponsor grid (for visual effect similar to the image) */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 opacity-60">
          {sponsors.slice(0, 10).map((sponsor, index) => (
            <div key={index} className="flex items-center justify-center">
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="max-h-12 w-auto object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;