import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../assets/icons/card.png'

const BodyPart = ({item,setBodyPart,bodyPart}) => {
  return (
    <Stack 
      type="button"
      alignItems='center'
      justifyContent='center'
      className='bodyPart-card'
      sx={{
        borderTop: bodyPart === item ? '4px solid #3c68e1' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        cursor: 'pointer',
        width: '270px',
        height: '280px',
        gap:'47px'
      }} 
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <img src={Icon} alt='icon' style={{ width:'40px', height:'40px' }} />
      <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
     
    </Stack>
  )
}

export default BodyPart;
