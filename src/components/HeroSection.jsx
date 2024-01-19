import React, { useState, useEffect } from 'react';
import './HeroSection.css'; // Import your CSS file for styling
import BioSection from './BioSection';
import Personal from './Personal';
import { ChakraProvider, Divider } from '@chakra-ui/react';
export default function HeroSection() {
  return (
    <>
            {/* <div style={{ display: 'block',alignItems:'center', width: '100vw',marginBottom:'5vw'}} className="welcsection">
                <h1 className="welctext">Welcome to My Portfolio</h1>
                <p className="inttext">
                    Explore my work and learn more about my skills and experiences.
                </p>
            </div> */}
            <div className="hersection">
                <div className="bisection">
                    <img src="https://media.licdn.com/dms/image/D4D03AQHxIrZ5av6sPg/profile-displayphoto-shrink_800_800/0/1666004777735?e=2147483647&v=beta&t=o03r7SxNPUv0263iwk_KiNUrRoRrPMDYbksDuD6u-k4" alt="Your Name" className={`hero-image 'image-animation' }`} />

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
