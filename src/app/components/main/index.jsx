import React from 'react'
import Navbar from './navbar'
import Home from './home'
import About from './about'
import Services from './services'
import Gallery from './gallery'
import Contact from './contact'
import Footer from  "./footer"

const Main = () => {
  return (
    <>
     <Navbar/>
     <Home/>
     <About/>
     <Services/>
     <Gallery/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default Main