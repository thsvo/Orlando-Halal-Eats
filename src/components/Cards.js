"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const Cards = () => {
  const [isHovering, setIsHovering] = useState(null);

  const cardData = [
    {
      id: 1,
      title: 'Entertainment',
      image: '1.jpg',
      description: 'Collaborating with Muslim City Fest, enjoy live performances from your favorite celebrities and immerse yourself in the vibrant atmosphere.',
      link: null
    },
    {
      id: 2,
      title: 'Vendors',
      image: '2.jpg',
      description: 'Explore food trucks, cultural vendors, and inspiring Islamic art. If you\'d like to be a vendor, click ',
      linkText: 'here',
      linkUrl: 'vendors',
      linkSuffix: ' for more information.'
    },
    {
      id: 3,
      title: 'Sponsors',
      image: '3.jpg',
      description: 'Learn more about our incredible sponsors who make this event possible. Interested in joining them? Register',
      linkText: 'here',
      linkUrl: '/sponsors',
      linkSuffix: '!'
    },
  ];

  const handleMouseMove = (e, id) => {
    if (!isHovering) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e) => {
    setIsHovering(null);
    e.currentTarget.style.transform = '';
  };

  return (
    <>
      <div className="flex flex-wrap justify-between gap-8 p-5 max-w-7xl mx-auto md:flex-row md:items-stretch flex-col items-center">
        {cardData.map((card) => (
          <div key={card.id} className="flex-1 min-w-[300px] flex flex-col md:w-auto w-full">
            <div
              className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-md cursor-pointer transition-all duration-300 ease-in-out transform-gpu hover:translate-y-[-5px] hover:shadow-xl"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
              onMouseEnter={() => setIsHovering(card.id)}
              onMouseMove={(e) => handleMouseMove(e, card.id)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Using Next.js Image component for better performance */}
              <Image 
                src={`/${card.image}`}
                alt={`${card.title} image`}
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-black text-3xl font-bold my-3">{card.title}</h2>
            <div className="mt-2 text-base leading-relaxed text-gray-700">
              {card.description}
              {card.linkText && (
                <>
                  {' '}
                  <a href={card.linkUrl} className="text-blue-600 font-bold no-underline hover:underline">
                    {card.linkText}
                  </a>
                  {card.linkSuffix}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;