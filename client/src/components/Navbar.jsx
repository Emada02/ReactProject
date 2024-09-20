import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/logoBlue.png';



const Navbar = () => {
  return (
    <Stack
    direction="row"
    justifyContent="space-around"
    sx={{gap:{sm:'60px', xs:'10px'},mt:{sm:'32px',xs:'20px'},justifyContent:'none',borderBottom: '2px solid #3c68e1'}}
    px="20px">
        <Link to="/">
        <img src={Logo} alt='logo' style={{width:'100px', height:'48px', margin:'0 40px'}} />
        </Link>
        <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
        >
          <Link to="/" style={{textDecoration:'none',color:"#3A1212"}} >Home</Link>
          <a href='#exercises' style={{textDecoration:'none',color:"#3A1212"}}>Exercises</a>
        </Stack>
    </Stack>
  )
}

export default Navbar