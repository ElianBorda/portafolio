import { useState } from 'react'
import './assets/font/inter.css'
import './assets/general.css'
import CustomCursor from './cursor/CustomCursor'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'

function App() {
  
  return (
    <BrowserRouter>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
