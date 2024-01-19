import React from 'react';
import { ChakraProvider, useDisclosure,Flex, Text, Spacer, Box, Heading,Link, Button, Container, Icon,Input, Avatar } from '@chakra-ui/react';
import { Link as ScrollLink} from 'react-scroll';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { VscThreeBars } from "react-icons/vsc";
import coimb from '../images/coimb.JPG'
const Navbar = () => {
  return (
    <Flex position={'fixed'} top={0} zIndex={1000} width={"100vw"} opacity={0.9} mb={30} bg="black" as="nav" align="center" justify="space-between" padding="1rem" color="white">
      <Container ml={20} mt={0}>
        <Flex align="center">
          <Heading as="h1" size="lg" letterSpacing="tight">
            Priyansh Daksha
          </Heading>
        </Flex>
      </Container>
      {/* <Spacer /> */}
      <Box ml={'18vw'} mt={2} display={{ base: 'none',md:'flex' }}>
      <ScrollLink to={'top'}  >
        <Link  mr={4} fontSize="md">
          Home
        </Link>
        </ScrollLink>
        <ScrollLink to="project" smooth={true} >
        <Link to={'about'} mr={4} fontSize="md">
          Projects
        </Link>
        </ScrollLink>
        <ScrollLink to="skill" smooth={true} >
        <Link mr={4} fontSize="md">
          Skills
        </Link>
        </ScrollLink>
        <ScrollLink to="services" smooth={true} >
        <Link mr={4} fontSize="md">
          Services
        </Link>
        </ScrollLink>
        <ScrollLink to="education" smooth={true} >
        <Link mr={4} fontSize="md">
          Education
        </Link>
        </ScrollLink>
        <ScrollLink to="contact" smooth={true} >
        <Link to={'contact'} fontSize="md">
          Contact
        </Link>
        </ScrollLink>
      <Avatar ml={28} size={'md'} src={coimb}/>
      </Box>
      <Box display={{ base: 'flex', md: 'none' }}>
        <DrawerExample/>
      </Box>
      <Spacer />
    </Flex>
  );
};
function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
      <Icon as={VscThreeBars} size={12} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
const App = () => {
  return (
    <ChakraProvider>
      <Navbar />
      {/* Your other components go here */}
    </ChakraProvider>
  );
};

export default App;
