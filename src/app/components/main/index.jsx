import React from 'react'
import Navbar from './navbar'
import Home from './home'
import About from './about'
import Services from './services'
import Gallery from './gallery'
import Contact from './contact'

const Main = () => {
  return (
    <>
     <Navbar/>
     <Home/>
     <About/>
     <Services/>
     <Gallery/>
     <Contact/>
    </>
  )
}

export default Main