"use client";
import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';

const Celebrate = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {/* Event Details Section */}
        <Grid item xs={12}>
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-around', 
              flexWrap: 'wrap',
              mb: 6
            }}
          >
            {/* When */}
            <Box sx={{ textAlign: 'center', px: 2 }}>
              <Box 
                sx={{ 
                  backgroundColor: '#FFDE59', 
                  borderRadius: '50%', 
                  width: 60, 
                  height: 60, 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  margin: '0 auto',
                  mb: 1
                }}
              >
                <EventIcon sx={{ fontSize: 30, color: '#0066c2' }} />
              </Box>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                When
              </Typography>
              <Typography variant="body1">
                November 23, 2024
              </Typography>
            </Box>

            {/* Where */}
            <Box sx={{ textAlign: 'center', px: 2 }}>
              <Box 
                sx={{ 
                  backgroundColor: '#FFDE59', 
                  borderRadius: '50%', 
                  width: 60, 
                  height: 60, 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  margin: '0 auto',
                  mb: 1
                }}
              >
                <LocationOnIcon sx={{ fontSize: 30, color: '#0066c2' }} />
              </Box>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Where
              </Typography>
              <Typography variant="body1">
                Miramar Regional Park
              </Typography>
            </Box>

            {/* Time */}
            <Box sx={{ textAlign: 'center', px: 2 }}>
              <Box 
                sx={{ 
                  backgroundColor: '#FFDE59', 
                  borderRadius: '50%', 
                  width: 60, 
                  height: 60, 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  margin: '0 auto',
                  mb: 1
                }}
              >
                <AccessTimeIcon sx={{ fontSize: 30, color: '#0066c2' }} />
              </Box>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Time
              </Typography>
              <Typography variant="body1">
                12 PM
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Main Content Section */}
        <Grid item xs={12} md={6}>
          <Box 
            component="img"
            src="/images/celebrate.jpg"
            alt="Happy child at festival"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
              boxShadow: 3,
              maxHeight: 400,
              objectFit: 'cover'
            }}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Box sx={{ pl: { md: 4 }, pt: { xs: 2, md: 0 } }}>
            <Typography 
              variant="h3" 
              component="h2" 
              gutterBottom 
              sx={{ 
                fontWeight: 'bold',
                color: '#0066c2'
              }}
            >
              Celebrate Culture & Flavor
            </Typography>
            <Typography variant="body1" paragraph>
              The South Florida Halal Fest is a vibrant celebration of the rich tapestry of 
              culinary traditions, artistic expression, and cultural diversity that defines our 
              region. Throughout the event, guests will delight in a wide array of 
              mouthwatering dishes from local restaurants, food trucks, and specialty vendors, 
              each showcasing the unique flavors of various ethnic cuisines.
            </Typography>
            <Typography variant="body1" paragraph>
              Experience captivating performances by artists from around the globe and explore a variety 
              of vendor stalls celebrating cultures from every corner of the world. Join us for a 
              day of exceptional food, dynamic entertainment, shopping, and cultural 
              exploration. Eat, play, and laugh as you immerse yourself in the excitement and 
              joy of our community. Follow us on our Social Media to stay tuned with updates.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Celebrate;