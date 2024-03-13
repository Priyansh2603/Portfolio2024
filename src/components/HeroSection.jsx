import React, { useState, useEffect } from 'react';
import './HeroSection.css'; // Import your CSS file for styling
import BioSection from './BioSection';
import Personal from './Personal';
import { ChakraProvider, Divider, useMediaQuery } from '@chakra-ui/react';
export default function HeroSection() {
    const smallscreen = useMediaQuery('(max-width:768px)')
  return (
    <>
            {/* <div style={{ display: 'block',alignItems:'center', width: '100vw',marginBottom:'5vw'}} className="welcsection">
                <h1 className="welctext">Welcome to My Portfolio</h1>
                <p className="inttext">
                    Explore my work and learn more about my skills and experiences.
                </p>
            </div> */}
            <div className="hersection"  style={{marginTop:smallscreen&&'80px'}}>
                <div className="bisection">
                    <img src="https://res.cloudinary.com/dazhcprb8/image/upload/v1707134284/hehl2giro8iepsnsenn5.jpg" alt="Your Name" className={`hero-image 'image-animation' }`} />

                </div>
                <div className="hercontent">
                    <div className="texontent">
                        <div className="name-animation">Priyansh Daksha</div>
                        <div className="profanimation">Software Developer</div>
                    </div>
                    <BioSection />
                </div>
            </div>
            <Personal/>
            <ChakraProvider>
            <Divider mt={28} mb={10} color={'white'}/>
            </ChakraProvider>
    </>
  )
}
