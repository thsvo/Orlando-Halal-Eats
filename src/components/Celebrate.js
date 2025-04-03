"use client";
import React from 'react';
import styled from 'styled-components';

const CelebrateContainer = styled.section`
  display: flex;
  max-width: 1200px;
  margin: 2rem auto;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 1rem;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  min-height: 400px;
  
  @media (max-width: 768px) {
    min-height: 300px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #000;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 1.5rem;
`;

const Celebrate = () => {
  return (
    <CelebrateContainer>
      <ImageContainer>
        <Image 
          src="/babypic.jpg" 
          alt="Child jumping in a bounce house"
        />
      </ImageContainer>
      <ContentContainer>
        <Title>Celebrate Culture & Flavor</Title>
        <Description>
          The South Florida Halal Fest is a vibrant celebration of the rich tapestry of 
          culinary traditions, artistic expression, and cultural diversity that defines our 
          region. Throughout the event, guests will delight in a wide array of 
          mouthwatering dishes from local restaurants, food trucks, and specialty vendors, 
          each showcasing the unique flavors of various ethnic cuisines. Experience 
          captivating performances by artists from around the globe and explore a variety 
          of vendor stalls celebrating cultures from every corner of the world. Join us for a 
          day of exceptional food, dynamic entertainment, shopping, and cultural 
          exploration. Eat, play, and laugh as you immerse yourself in the excitement and 
          joy of our community. Follow us on our Social Media to stay tuned with updates.
        </Description>
      </ContentContainer>
    </CelebrateContainer>
  );
};

export default Celebrate;