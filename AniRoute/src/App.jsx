import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import ScrollToTop from './component/ScrollToTop.jsx'
import Home from './pages/Home'

export default function App() {
  return (
    <div className='wrap'>
      <ScrollToTop />
      <Navbar />
      <div className='frist'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </div>
      <Footer />

    </div>
  )
}

