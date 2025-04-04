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
        margin: { xs: '0 5px', md: '0 10px' },
      }}
    >
      {/* Balloon */}
      <Box
        sx={{
          width: { xs: '25px', md: '40px' },
          height: { xs: '30px', md: '50px' },
          borderRadius: '50%',
          backgroundColor: balloonColor,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: { xs: '5px', md: '10px' },
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-10px',
            width: '2px',
            height: { xs: '20px', md: '30px' },
            backgroundColor: balloonColor,
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            width: { xs: '5px', md: '8px' },
            height: { xs: '5px', md: '8px' },
            borderRadius: '50%',
            backgroundColor: 'white',
            top: { xs: '10px', md: '15px' },
            left: { xs: '7px', md: '10px' },
          }
        }}
      >
        <Typography
          sx={{
            color: 'white',
            fontSize: { xs: '12px', md: '16px' },
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
          padding: { xs: '8px', md: '15px' },
          width: { xs: '50px', md: '80px' },
          height: { xs: '50px', md: '80px' },
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
            fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2.5rem' },
          }}
        >
          {String(value).padStart(2, '0')}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: 'white',
            textTransform: 'uppercase',
            fontSize: { xs: '8px', md: '10px' },
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
          minHeight: { xs: '200px', md: '60vh' },
          padding: { xs: '20px 0', md: '40px 0' },
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
            backgroundColor: 'rgba(0, 102, 194, 0.85)',
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
            gap: { xs: '5px', md: '10px' },
            marginBottom: { xs: '15px', md: '30px' },
            width: '100%',
            position: 'relative',
            zIndex: 1,
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
            letterSpacing: { xs: '1px', md: '2px' },
            marginTop: { xs: '10px', md: '20px' },
            fontSize: { xs: '0.8rem', md: '1.25rem' },
            position: 'relative',
            zIndex: 1,
          }}
        >
          Countdown to April 5, 2025 14:00:00 EST
        </Typography>
      </Box>
    </Container>
  );
};

export default Countdown;