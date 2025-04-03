"use client";
import React, { useEffect, useState, useRef } from 'react';
import { Box, Typography, Container } from '@mui/material';
import gsap from 'gsap';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const numbersRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const targetDate = new Date('April 5, 2025 14:00:00 EST').getTime(); // Adjusted target date and time

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out"
      });
    }
  }, []);

  useEffect(() => {
    numbersRef.current = [];
  }, []);

  const timeUnit = (value, label, color, balloonColor) => (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        margin: '0 10px',
      }}
    >
      {/* Balloon */}
      <Box
        sx={{
          width: '40px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: balloonColor,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '10px',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-10px',
            width: '2px',
            height: '30px',
            backgroundColor: balloonColor,
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: 'white',
            top: '15px',
            left: '10px',
          }
        }}
      >
        <Typography
          sx={{
            color: 'white',
            fontSize: '16px',
            fontWeight: 'bold',
          }}
        >
          :)
        </Typography>
      </Box>

      {/* Time Box */}
      <Box
        ref={(el) => numbersRef.current.push(el)}
        sx={{
          backgroundColor: color,
          borderRadius: '8px',
          padding: '15px',
          width: '80px',
          height: '80px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: 'white',
            fontWeight: 'bold',
            lineHeight: 1,
          }}
        >
          {String(value).padStart(2, '0')}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: 'white',
            textTransform: 'uppercase',
            fontSize: '10px',
            letterSpacing: '1px',
          }}
        >
          {label}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Container maxWidth="xl" sx={{ width: '100%', padding: 0 }}>
      <Box
        ref={containerRef}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          padding: '40px 0',
          // Removing the backgroundColor: '#0066c2' line
          borderRadius: '16px',
          width: '100%',
          backgroundImage: 'url("/Banner.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 102, 194, 0.85)', // You may want to adjust this opacity
            borderRadius: '16px',
            zIndex: 0,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '30px',
            width: '100%',
            position: 'relative',
            zIndex: 1, // Ensure content appears above the overlay
          }}
        >
          {timeUnit(timeLeft.days, 'days', '#e63946', '#e63946')}
          {timeUnit(timeLeft.hours, 'hours', '#4CAF50', '#4CAF50')}
          {timeUnit(timeLeft.minutes, 'minutes', '#457b9d', '#457b9d')}
          {timeUnit(timeLeft.seconds, 'seconds', '#f9a826', '#f9a826')}
        </Box>
        <Typography
          variant="h6"
          sx={{
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginTop: '20px',
            position: 'relative',
            zIndex: 1, // Ensure text appears above the overlay
          }}
        >
          Countdown to April 5, 2025 14:00:00 EST
        </Typography>
      </Box>
    </Container>
  );
};

export default Countdown;