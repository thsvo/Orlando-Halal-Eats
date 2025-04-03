"use client";

import React, { useState } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CardTitle = styled.h2`
  color: black;
  font-size: 1.8rem;
  font-weight: bold;
  margin: 15px 0 10px 0;
`;

const CardWrapper = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CardItem = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  perspective: 1000px;
  
  &:hover {
    transform: translateY(-5px) rotateX(2deg) rotateY(2deg);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${CardItem}:hover & {
    transform: scale(1.05);
  }
`;

const CardDescription = styled.div`
  margin-top: 10px;
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
`;

const CardLink = styled.a`
  color: #0066cc;
  font-weight: bold;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const HeaderText = styled.h1`
  text-align: center;
  margin: 30px 0;
  color: #333;
  font-size: 2.2rem;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

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
      description: 'Explore food trucks, cultural vendors, and inspiring Islamic art. If you\'d like to be a vendor, click',
      linkText: 'here',
      linkUrl: '#',
      linkSuffix: 'for more information.'
    },
    {
      id: 3,
      title: 'Sponsors',
      image: '3.jpg',
      description: 'Learn more about our incredible sponsors who make this event possible. Interested in joining them? Register',
      linkText: 'here',
      linkUrl: '#',
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
      <CardContainer>
        {cardData.map((card) => (
          <CardWrapper key={card.id}>
            <CardItem 
              onMouseEnter={() => setIsHovering(card.id)}
              onMouseMove={(e) => handleMouseMove(e, card.id)}
              onMouseLeave={handleMouseLeave}
            >
              <CardImage src={card.image} alt={card.title} />
            </CardItem>
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>
              {card.description}
              {card.linkText && (
                <>
                  {' '}
                  <CardLink href={card.linkUrl}>{card.linkText}</CardLink>
                  {card.linkSuffix}
                </>
              )}
            </CardDescription>
          </CardWrapper>
        ))}
      </CardContainer>
    </>
  );
};

export default Cards;