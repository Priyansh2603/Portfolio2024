import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React, { useEffect, useState } from 'react'
import HeroSection from './components/HeroSection';
import { BrowserRouter } from 'react-router-dom';
import ProjectSection from './components/ProjectSection';
import {ChakraProvider} from '@chakra-ui/react'
import Skills from './components/Skills';
import Education from './components/Education';
import Services from './components/Services';
import { Element } from 'react-scroll';
import Contact from './components/Contact';
import Simple from './components/Nav';
import Footer from './components/Footer';
function App() {
  return (
      <div className="App" style={{overflowX:'hidden',backgroundColor:'rgb(0 0 0)',color:'white'}}>
      <BrowserRouter>
      {/* <Simple/> */}
      <div id='top'>
      <Navbar/>
      <HeroSection/>
      <div id='project'>
      <ProjectSection id="project"/>
      </div>
      <Element id="skill">
      <Skills/>
      </Element>
      <Element id="services">
      <Services/>
      </Element>
      <Element id="education">
      <Education/>
      </Element>
      <Element id="contact">
        <Contact/>
      </Element>
      <Footer/>
      </div>
      </BrowserRouter>
    </div>

  );
}

export default App;