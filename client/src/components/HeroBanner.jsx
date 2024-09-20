import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import Image1 from '../assets/images/banner1.png'

const HeroBanner = () => {
    return (
        <Box sx={{
            mt: { lg: '212px', xs: '70px' },
            ml: { sm: '50px' }
        }} position="relative" p="20px">
            <Typography color='#3c68e1'
                fontWeight="600" fontSize="50px">
                BodyBlueprint
            </Typography >
            <Typography fontWeight={700} sx={{ fontSize: { lg: '40px', xs: '36px' } }} mb="23px" mt="30px">
            Crush Goals, <br/>Not Limits </Typography>
            <Typography fontSize="22px" lineHeight="35px" mb={4}>
            Explore top exercises to achieve your dream body </Typography>
            <Button  sx={{backgroundColor:'#3c68e1', padding:'10px'}}   variant="contained" href='#exercises'>
                Explore exercises</Button>
            <Typography fontWeight={600}
                color="#46b7e7"
                sx={{
                    opacity:0.1,
                    display:{lg:'block',xs:'none'}
                }} fontSize="200px">
                Exercise#BeFit
            </Typography>
            <img src={Image1} alt="banner" className='hero-banner-img' />
        </Box>
    )
}

export default HeroBanner