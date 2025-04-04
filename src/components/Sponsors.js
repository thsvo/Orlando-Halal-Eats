"use client"
import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import Material UI components
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const Sponsors = () => {
  const sponsors = [
    { name: "LaserLab", logo: "/10.png" },
    { name: "Hemani", logo: "/11.png" },
    { name: "Alpha Equity", logo: "/12.png" },
    { name: "Pardesi", logo: "/13.png" }, // This path was missing the leading slash
    { name: "Chick Spot", logo: "/14.png" },
    { name: "Scent Sense", logo: "/15.png" },
    { name: "Dr. Herbalist", logo: "/16.png" },
    { name: "Wise Academy", logo: "/17.png" },
    { name: "Tacos", logo: "/18.png" },
    { name: "It Worth More", logo: "/19.png" },
    { name: "Jungle Safaris", logo: "/20.png" },
    { name: "BMG", logo: "/21.png" },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  // Determine slides per view based on screen size
  const getSlidesPerView = () => {
    if (isMobile) return 2;
    if (isTablet) return 3;
    if (isDesktop) return 6;
    return 4;
  };

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

        {/* Main sponsor swiper */}
        <Box sx={{ position: 'relative', padding: '0 30px' }}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={getSlidesPerView()}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="sponsors-swiper"
          >
            {sponsors.map((sponsor, index) => (
              <SwiperSlide key={index}>
                <Card className="p-4 flex items-center justify-center hover:shadow-md transition-shadow duration-300 bg-white border-0 h-[120px]">
                  <Image 
                    src={sponsor.logo} 
                    alt={sponsor.name} 
                    width={100}
                    height={80}
                    className="max-h-16 md:max-h-20 w-auto object-contain" 
                  />
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
          <Box 
            className="swiper-button-prev" 
            sx={{ 
              position: 'absolute', 
              left: 0, 
              top: '50%', 
              transform: 'translateY(-50%)',
              zIndex: 10,
              color: '#D35400',
              cursor: 'pointer',
              '&::after': { display: 'none' }
            }}
          >
            <NavigateBeforeIcon fontSize="large" />
          </Box>
          <Box 
            className="swiper-button-next" 
            sx={{ 
              position: 'absolute', 
              right: 0, 
              top: '50%', 
              transform: 'translateY(-50%)',
              zIndex: 10,
              color: '#D35400',
              cursor: 'pointer',
              '&::after': { display: 'none' }
            }}
          >
            <NavigateNextIcon fontSize="large" />
          </Box>
        </Box>

        {/* Secondary sponsor swiper (for visual effect similar to the image) */}
        <Box sx={{ marginTop: 6, opacity: 0.6 }}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={getSlidesPerView()}
            autoplay={{ delay: 2500, disableOnInteraction: false, reverseDirection: true }}
            loop={true}
          >
            {sponsors.map((sponsor, index) => (
              <SwiperSlide key={index}>
                <Box className="flex items-center justify-center">
                  <Image 
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    width={200} 
                    height={100}
                    className="max-h-12 w-auto object-contain"
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </div>
    </div>
  );
};

export default Sponsors;