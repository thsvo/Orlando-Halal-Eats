import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const Cover = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '200px', md: '100vh' },
        width: '100%',
        backgroundImage: 'url(/cover.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          zIndex: 1
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ color: 'white', textAlign: 'left', ml: 2 }}>
          <Typography 
            variant="h1" 
            component="h1" 
            sx={{ 
              fontWeight: 700, 
              fontSize: { xs: '1.8rem', sm: '2.5rem', md: '4.5rem' },
              mb: { xs: 1, md: 2 },
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            Eat. Play. Laugh.
          </Typography>
          
          <Typography 
            variant="h5" 
            sx={{ 
              mb: { xs: 2, md: 4 },
              fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.5rem' },
              textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
            }}
          >
           We can't wait to celebrate with you—join us for a day of great food, exciting entertainment, and unforgettable memories!
          </Typography>
          
          <Button 
            variant="contained" 
            size="large"
            sx={{ 
              backgroundColor: '#f8d448',
              color: 'black',
              fontWeight: 'bold',
              px: { xs: 2, md: 4 },
              py: { xs: 1, md: 1.5 },
              fontSize: { xs: '0.8rem', md: '1rem' },
              '&:hover': {
                backgroundColor: '#e6c33c',
              }
            }}
          >
            Buy Tickets
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Cover;