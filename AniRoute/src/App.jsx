import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar.jsx'
import Footer from './component/Footer.jsx'
import ScrollToTop from './component/ScrollToTop.jsx'
import ToursList from './pages/ToursList.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home'

export default function App() {
  return (
    <div className='wrap'>
      <ScrollToTop />
      <Navbar />
      <div className='frist'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/TourList' element={<ToursList />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
        </Routes>
      </div>
      <Footer />

    </div>
  )
}

