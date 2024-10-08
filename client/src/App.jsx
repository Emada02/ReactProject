import { useState } from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/home';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';


function App() {


  return (
    <>
      <BrowserRouter>
        <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
          </Routes>
          <Footer />
        </Box>
      </BrowserRouter>

    </>
  )
}

export default App
