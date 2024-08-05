import React from 'react';
import { Container, Grid, Typography, Link, Box, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: '#333', color: '#fff', py: 3 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              HallBooking
            </Typography>
            <Typography variant="body2">
              Welcome to HallBooking, your go-to platform for booking event halls for any occasion.
              We are dedicated to making your events memorable and hassle-free.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              <Link href="/" color="inherit" underline="none">Home</Link>
            </Box>
            <Box>
              <Link href="/about" color="inherit" underline="none">About</Link>
            </Box>
            <Box>
              <Link href="/contact" color="inherit" underline="none">Contact</Link>
            </Box>
            <Box>
              <Link href="/login" color="inherit" underline="none">Login</Link>
            </Box>
            <Box>
              <Link href="/signup" color="inherit" underline="none">Sign Up</Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              <strong>Address:</strong> 123 Event Street, HallCity, HC 12345
            </Typography>
            <Typography variant="body2">
              <strong>Email:</strong> info@hallbooking.com
            </Typography>
            <Typography variant="body2">
              <strong>Phone:</strong> +123 456 7890
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton href="#" sx={{ color: '#fff' }}>
                <Facebook />
              </IconButton>
              <IconButton href="#" sx={{ color: '#fff' }}>
                <Twitter />
              </IconButton>
              <IconButton href="#" sx={{ color: '#fff' }}>
                <Instagram />
              </IconButton>
              <IconButton href="#" sx={{ color: '#fff' }}>
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" mt={4}>
          &copy; 2023 HallBooking. All Rights Reserved.
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;