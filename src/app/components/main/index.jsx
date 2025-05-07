import React from 'react'
import Navbar from './navbar'
import Home from './home'
import About from './about'
import Services from './services'
import Gallery from './gallery'
import Contact from './contact'
import Footer from  "./footer"
import NewNavbar from "./topnavbar"
import States from "./states"
import Testimonals from './testimonals'
import ChooseUs from "./choose"

const Main = () => {
  return (
    <>
     <NewNavbar/>
     <Navbar/>
     <Home/>
     <About/>
     <Services/>
     <Gallery/>
     <States/>
     <ChooseUs/>
     <Testimonals/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default Main