import { ChakraProvider, Heading,Icon } from '@chakra-ui/react'
import React from 'react';
import { TbCalendarDue } from "react-icons/tb";
import { Stepper, Step, StepIndicator, StepNumber, StepIcon, StepStatus, StepTitle, StepDescription, Box, useSteps, StepSeparator } from '@chakra-ui/react';
import { FaChair } from 'react-icons/fa6';
const steps = [
  { title: 'B.Tech', description: 'ABESIT', d2: 'Ghaziabad',date:'2020-2024' },
  { title: 'Intermediate', description: 'DAV Inter College', d2: 'Muzaffarnagar',date:'2020' },
  { title: 'High School', description: 'DAV Inter College', d2: 'Muzaffarnagar',date:'2018' },
]

function Example() {
  const { activeStep } = useSteps({
    index: 3,
    count: 1,
  })

  return (
    <Stepper index={activeStep} display={'flex'} alignItems={'center'}  ml={{base:'35vw',md:'75vw'}} w='100%' pl={{base:'0',md:6}} my={'4vw'} orientation='vertical' height='500px' gap='2'>
      {steps.map((step, index) => (
        <Step key={index} style={{ flexDirection: 'row' }}>
          {
            index % 2 === 0 ? (<><StepIndicator ml={{base:'28vw',md:'10vw'}}>
              <StepStatus
                incomplete={<TbCalendarDue />}
                complete={index==0?<TbCalendarDue color='black' />:<StepIcon/>}
                active={<TbCalendarDue />}
              />
            </StepIndicator >

              <Box >
                <StepTitle><h2>{step.title}</h2></StepTitle>
                <StepDescription style={{ color: 'white' }}>{step.description}</StepDescription>
                <StepDescription style={{ color: 'white' }}>{step.d2}</StepDescription>
                <StepDescription style={{ color: 'white' }}><Icon as={TbCalendarDue} mr={2} size={4}/>{step.date}</StepDescription>
              </Box>

              <StepSeparator ml={{base:'28vw',md:'10vw'}} /></>) : (<><Box ml={{base:2,md:9}}>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription style={{ color: 'white' }}>{step.description}</StepDescription>
                <StepDescription style={{ color: 'white' }}>{step.d2}</StepDescription>
                <StepDescription style={{ color: 'white' }}><Icon mr={2} as={TbCalendarDue} size={4}/>{step.date}</StepDescription>
              </Box><StepIndicator mr={{base:'38vw',md:'0vw'}} >
                  <StepStatus style={{backgroundColor:'blue'}}
                   incomplete={<StepIcon />}
                   active={<StepIcon />}
                   complete={<StepIcon />}
                  />
                </StepIndicator><StepSeparator ml={{base:'28vw',md:'10vw'}} /></>)
          }
        </Step>
      ))}
    </Stepper>
  )

}
export default function Education() {
  return (
    <ChakraProvider>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" mb={24}>
        <Heading mb="4" mt={28}>Education</Heading>
        <Example />
      </Box>

    </ChakraProvider>
  )
}
