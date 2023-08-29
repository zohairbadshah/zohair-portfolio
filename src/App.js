import React from 'react'
import Navbar from './components/myNavbar'
import CenterHeading from './components/centerHeading'
import SideBar from './components/sideBar'
import About from './components/About'
import Project from './components/Project'
import Conclusion from './components/Conclusion'
import './App.css'
const App=()=> {
  
    return (
      <>
      <section  className='home-hero' >
      <Navbar/>
      <CenterHeading/>
      <SideBar/>
      </section>
      
      <section className='home-about'>
            <About/>
      </section>
      <section className='home-projects'>
        <Project/>
      </section>
      <section>
        <Conclusion/>
      </section>
      </>
      
    )
  
}

export default  App;
