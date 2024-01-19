import React from 'react';
import { Box, Heading, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Text, Button, ChakraProvider, Avatar, Divider } from '@chakra-ui/react';
import { FaArrowRight,FaArrowLeft } from 'react-icons/fa6';
const serv  = [{title:'1 UI/UX Design',
                description:'I create robust and reusable desing with an easy and attractive user experience',name:'U I',color:'yellow'},{title:'2 Web Devlopment',
                description:'Creating scalable and stable websites with attractive interfaces and fast serving backend',name:'W D',color:'pink'},{title:'3 Application Development and management',
                description:'I create robust and scalable desing with an easy and attractive user experience',name:'A D M',color:'blue'},{title:'4 Freelancing',
                description:'I create robust and scalable desing with an easy and attractive user experience', name:'F L',color:'purple'},{title:'5 Technical Assistance',
                description:'I create robust and scalable desing with an easy and attractive user experience',name:'T A',color:'green'}]
const SwipeableCard = ({ title, description,scheme,name }) => {

  return (
      <Card align='center' width={'80%'}>
        <CardHeader>
          <Heading size='md'>{title}</Heading>
        </CardHeader>
        <Avatar size={{base:'md',md:'xl'}} name={name} />
        <CardBody>
          <Text>{description}</Text>
        </CardBody>
        <CardFooter>
          <Button colorScheme={scheme}>View here</Button>
        </CardFooter>
      </Card>
  );
};

const Services = () => {
    console.log("Services:",serv.length)
  const [start, setStart] = React.useState(0);
  const [end, setend] = React.useState(1);
  const handleNext = () => {
    
        setStart((start+1)%5);
        setend((end+1)%5);
    // Assuming you have 5 cards
  };

  const handlePrev = () => {
    console.log(start,"to",end)
        if(start==0) setStart(4);
        else setStart(start-1);
        if(end==0) setend(4);
        else setend(end-1);
  };

  return (
    <ChakraProvider>
        <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} mx={{sm:10,md:20,lg:40}} mb={8}>
      <Heading mb={20}>Services</Heading>
      <Box display={'flex'} flexDirection={'row'}>
      <Button colorScheme='teal' onClick={handlePrev}  mt={{base:'350',sm:'350',md:'160'}} ml={{base:'4'}}>
      <FaArrowLeft/>
      </Button>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }} spacing={3} p={3} justifyContent={'center'} w='100vw' ml={{base:10,md:24}} >
        {serv.map((e,i)=>{
           return( ( i===start || i===end)?(<SwipeableCard title={e.title} description={e.description} scheme={e.color} name={e.name} />):(<></>))
        })}
      </SimpleGrid>
      <Button colorScheme='teal' onClick={handleNext}  mt={{base:'350',sm:'350',md:'160'}} mr={{base:'4'}}>
      <FaArrowRight/>
      </Button>
      
      </Box>
    </Box>
    <Divider mt={28} mb={10} color={'white'}/>
    </ChakraProvider>
  );
};

export default Services;
