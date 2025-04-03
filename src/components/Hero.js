"use client";
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';

// Define animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Styled components
const HeroContent = styled(Box)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  textAlign: 'center',
  position: 'relative',
  zIndex: 1,
}));

const HeroTitle = styled(Typography)({
  fontWeight: 700,
  marginBottom: '1rem',
  animation: `${fadeIn} 1.5s ease-out`,
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
});

const HeroSubtitle = styled(Typography)({
  marginBottom: '2rem',
  animation: `${slideUp} 1.5s ease-out`,
  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
});

const HeroButton = styled(Button)({
  animation: `${slideUp} 1.8s ease-out`,
  fontWeight: 600,
  padding: '10px 24px',
});

const Overlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for better text visibility
  zIndex: 0,
});

const YouTubeBackground = styled('iframe')({
  position: 'absolute',
  top: '-60px', // Adjust to center the video
  left: 0,
  width: '100%',
  height: 'calc(100% + 120px)', // Make it a bit taller to cover the area
  border: 'none',
  pointerEvents: 'none', // Prevents interaction with the video
  zIndex: -1,
  opacity: 0.7, // Opacity for the video
});

export default function Hero() {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', height: '100vh' }}>
      <YouTubeBackground
        src="https://www.youtube.com/embed/5l8un9FhYVM?autoplay=1&mute=1&controls=0&loop=1&playlist=5l8un9FhYVM&showinfo=0&rel=0&enablejsapi=1"
        title="Food Festival Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <Overlay />
      <HeroContent>
        <Container maxWidth="md">
          <HeroTitle variant="h1">
            Eat. Play. Laugh.
          </HeroTitle>
          <HeroSubtitle variant="h5">
            Experience the finest halal cuisine and cultural celebration
          </HeroSubtitle>
          <HeroButton variant="contained" color="primary" size="large">
            Explore Menu
          </HeroButton>
        </Container>
      </HeroContent>
    </Box>
  );
}
  