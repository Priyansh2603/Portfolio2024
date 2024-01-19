import React from 'react';
import { ChakraProvider, SimpleGrid,Popover,PopoverTrigger,Portal,PopoverContent,PopoverBody,PopoverArrow,PopoverHeader,PopoverCloseButton,PopoverFooter, Icon, Card, CardBody, Image, Text, Heading, Stack, ButtonGroup, Button, CardFooter, Divider, Box } from '@chakra-ui/react';
import { FaClipboardList } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { BsInfoCircleFill } from "react-icons/bs";
import shoeping from '../images/Shoeping.png';
import chetna from '../images/chetna.png';
import news from '../images/news.png';
import { FaReact,FaNode } from "react-icons/fa";
import { SiExpress, SiPython } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { DiCss3 } from "react-icons/di";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { Link } from 'react-router-dom';
export default function ProjectSection() {
    const projects = [
        {
            title: "Shoeping",
            img: shoeping,
            desc: "Shoeping is a feature-rich e-commerce site with user authentication, profile management, user cart storage, and a built-in Razorpay payment gateway, providing a complete and ready-to-use online store.",
            live: "https://shoeping-shop.vercel.app/",
            git: "https://github.com/Priyansh2603/Shoeping-shop",
            techs:[FaReact,FaBootstrap,FaNode,SiExpress,SiMongodb,TbApi,FaGitAlt]
        },
        {
            title: "Chetna",
            img: chetna,
            desc: "Chetna, a web platform for persons with special abilities, provides a database of accessible buildings. Users can effortlessly find nearby accessible places by choosing property types, ensuring convenience and valuable facilities.",
            live: "https://sih-chetna.vercel.app/",
            git: "https://github.com/Priyansh2603/The-White-H-ckers",
            techs:[FaReact,FaBootstrap,IoLogoFirebase,FaNode,TbApi,FaGitAlt]
        },
        {
            title: "News Detector",
            img: news,
            desc: "News Detector is a machine learning-based web application that classifies news as either fake or real, employing advanced algorithms for accurate categorization.",
            live: "https://github.com/Priyansh2603/News-Detector",
            git: "https://github.com/Priyansh2603/News-Detector",
            techs:[FaHtml5,DiCss3,RiJavascriptFill,SiTailwindcss,SiFlask,SiPython,FaGitAlt]
        }
    ]
    return (

        <ChakraProvider>
            <Box bg="black" py={20} display={'flex'} alignItems={'center'} flexDirection={'column'} justifyContent={'center'}>
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'} mb={12}><Heading>Projects</Heading></Box>
            <SimpleGrid columns={{sm:1, md:2, lg:3}} spacing={16} p={4} justifyContent={'center'} >
                {projects.map((e, i) => {
                    return (
                        <Card maxW='sm' bg="green.100" key={i}>
                            <CardBody>
                                <Image
                                    src={e.img}
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3' textAlign={'center'}>
                                    <Heading size='md'>{e.title}</Heading>
                                    <Text textAlign={'justify'}>
                                        {e.desc}
                                    </Text>
                                </Stack>
                            </CardBody>
                            <Divider color={'black'} />
                            <CardFooter display={'flex'} justifyContent={'center'}>
                                <ButtonGroup spacing='2' >
                                    <Button variant='solid' colorScheme='yellow'>
                                        <Link to={e.live}>Live</Link>
                                    </Button>
                                    <Button variant='solid' colorScheme='blue' display={'flex'} flexDirection={'row'}>
                                       <Link to={e.git} style={{display:'flex'}} > <Icon as={ImGithub} boxSize={4} mr={1} /><Text display={{base:'none',md:'none',xl:'flex'}}>Github</Text></Link>
                                    </Button>
                                    <Button variant='solid' colorScheme='blue'>
                                        <Icon as={FaClipboardList} boxSize={4} mr={1} /><Text display={{base:'none',md:'none',xl:'flex'}}>Details</Text> 
                                    </Button>
                                    <Popover >
                                        <PopoverTrigger>
                                            <Button><Icon as={BsInfoCircleFill} boxSize={4}/></Button>
                                        </PopoverTrigger>
                                        <Portal bg='blue'>
                                            <PopoverContent bg="white">
                                                {/* <PopoverArrow /> */}
                                                <PopoverHeader fontWeight={'bold'} fontSize={'medium'}>Technologies Used</PopoverHeader>
                                                <PopoverCloseButton />
                                                <PopoverBody>
                                                    {e.techs.map((t,i)=>{
                                                        return(
                                                            <Button colorScheme='green' mr={1} mb={1}><Icon as={t} boxSize={5}/></Button>
                                                        )
                                                    })}
                                                </PopoverBody>
                                                {/* <PopoverFooter>This is the footer</PopoverFooter> */}
                                            </PopoverContent>
                                        </Portal>
                                    </Popover>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                    )
                })}
            </SimpleGrid>
            </Box>
            <Divider mt={20} color={'white'}/>
        </ChakraProvider>
    )
}
