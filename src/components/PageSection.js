"use client";
import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 1.5rem 0.5rem;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  
  @media (max-width: 768px) {
    height: 180px;
  }
`;

const CardContent = styled.div`
  padding: 1rem;
  background-color: #fff;
`;

const CardTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 1rem;
`;

const CardLink = styled.a`
  color: #0066cc;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const PageSection = ({ title, items = [] }) => {
  return (
    <SectionContainer>
      {title && <SectionTitle>{title}</SectionTitle>}
      <CardsContainer>
        {items && items.map((item, index) => (
          <Card key={index}>
            <CardImage src={item.image || "https://cdn.codeopx.com/halal.png"} alt={item.title} />
            <CardContent>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              {item.link && (
                <CardLink href={item.link.url}>{item.link.text}</CardLink>
              )}
            </CardContent>
          </Card>
        ))}
      </CardsContainer>
    </SectionContainer>
  );
};

export default PageSection;