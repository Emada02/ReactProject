import React from 'react';
import { Box, Stack, Typography } from '@mui/material';


const Footer = () => (
  <Box mt="60px" bgcolor="#3c68e1">
    <Typography variant="h5" sx={{ 
      fontSize: { lg: '15px', xs: '10px' } }} 
      mt="40px" textAlign="center" 
      pb="10px" color='#fff' pt='10px'>
        BodyBluePrint Foundation <br/>All rights reserved</Typography>
  </Box>
);

export default Footer;