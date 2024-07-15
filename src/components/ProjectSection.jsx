import React from 'react';
import { ChakraProvider, SimpleGrid,Popover,PopoverTrigger,Portal,PopoverContent,PopoverBody,PopoverArrow,PopoverHeader,PopoverCloseButton,PopoverFooter, Icon, Card, CardBody, Image, Text, Heading, Stack, ButtonGroup, Button, CardFooter, Divider, Box } from '@chakra-ui/react';
import { FaClipboardList } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { BsInfoCircleFill } from "react-icons/bs";
import shoeping from '../images/Shoeping.png';
import chetna from '../images/chetna.png';
import news from '../images/news.png';
import tikTalk from '../images/tikTalk.png';
import code from '../images/code.png'
import { FaReact,FaNode } from "react-icons/fa";
import { SiChakraui, SiExpress, SiMui, SiPython, SiSocketdotio } from "react-icons/si";
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
import Details from './Details';
import ImageComponent from './ImageComponent';
export default function ProjectSection() {
    const projects = [
            {
              title: "Tik-Talk",
              img: tikTalk,
              desc: "Tik-Talk is a real-time chat application that enables users to communicate instantly with each other. It provides a seamless chatting experience with features like message delivery status and real-time updates.",
              live: "https://tik-talk.onrender.com/chats",
              git: "https://github.com/Priyansh2603/Tik-Talk",
              detailed: "Tik-Talk is a real-time chat application designed to facilitate instant communication between users. It offers a seamless chatting experience with features such as message delivery status indicators and real-time updates, ensuring smooth and efficient communication.",
              techs: [
                { icon: SiChakraui, name: "Chakra UI" },
                { icon: SiSocketdotio, name: "Socket.io" },
                { icon: RiJavascriptFill, name: "JavaScript" },
                { icon: FaReact, name: "React" },
                { icon: FaNode, name: "Node.js" },
                { icon: SiExpress, name: "Express.js" },
                { icon: SiMongodb, name: "MongoDB" },
                { icon: TbApi, name: "API" },
                { icon: FaGitAlt, name: "Git" }
              ]
            },
            {
              title: "Shoeping",
              img: shoeping,
              desc: "Shoeping is a feature-rich e-commerce site with user authentication, profile management, user cart storage, and a built-in Razorpay payment gateway, providing a complete and ready-to-use online store.",
              live: "https://shoeping-shop.vercel.app/",
              git: "https://github.com/Priyansh2603/Shoeping-shop",
              detailed: "Shoeping is an e-commerce platform designed to provide users with a complete online shopping experience. It includes features such as user authentication, profile management, cart storage, and a built-in payment gateway, ensuring a seamless and convenient shopping experience for customers.",
              techs: [
                { icon: FaReact, name: "React" },
                { icon: FaNode, name: "Node.js" },
                { icon: SiExpress, name: "Express.js" },
                { icon: SiMongodb, name: "MongoDB" },
                { icon: SiChakraui, name: "ChakraUi" },
                { icon: SiMui, name: "Material Ui" },
                { icon: TbApi, name: "API" },
                { icon: FaGitAlt, name: "Git" }
              ]
            },
            {
                title: "Chetna",
                img: chetna,
                desc: "Chetna, a web platform for persons with special abilities, provides a database of accessible buildings. Users can effortlessly find nearby accessible places by choosing property types, ensuring convenience and valuable facilities.",
                live: "https://sih-chetna.vercel.app/",
                git: "https://github.com/Priyansh2603/The-White-H-ckers",
                detailed:"Chetna is a web platform designed to assist individuals with special abilities. It offers a comprehensive database of accessible buildings, allowing users to effortlessly locate nearby accessible places by selecting property types. Chetna aims to provide convenience and valuable facilities to its users.",
                techs:[{ icon: FaReact, name: "React" },
                { icon: FaBootstrap, name: "Bootstrap" },
                { icon: IoLogoFirebase, name: "Firebase" },
                { icon: FaNode, name: "Node" },
                { icon: TbApi, name: "API" },
                { icon: FaGitAlt, name: "Git" }]
            },
            {
                title: "Code Editor",
                img: code,
                desc: "Code Editor is a versatile web application enabling users to create profiles, write, execute, and save code snippets. Experience seamless coding with user-friendly features and robust functionalities.",
                live: "https://github.com/Priyansh2603/coderunner",
                git: "https://github.com/Priyansh2603/coderunner",
                detailed: "Code Editor is a web application designed to provide users with a platform for coding tasks. It allows users to create profiles, write code, run code snippets, and save their work for future reference. Code Editor is built using a stack comprising React for the frontend, Chakra UI for styling, Node.js and Express.js for the backend, MongoDB for database storage, and Git for version control.",
                techs: [
                  { icon: FaReact, name: "React" },
                  { icon: SiChakraui, name: "Chakra UI" },
                  { icon: FaNode, name: "Node.js" },
                  { icon: SiExpress, name: "Express.js" },
                  { icon: SiMongodb, name: "MongoDB" },
                  { icon: TbApi, name: "API" },
                  { icon: FaGitAlt, name: "Git" }
                ]
              },
            {
              title: "News Detector",
              img: news,
              desc: "News Detector is a machine learning-based web application that classifies news as either fake or real, employing advanced algorithms for accurate categorization.",
              live: "https://github.com/Priyansh2603/News-Detector",
              git: "https://github.com/Priyansh2603/News-Detector",
              detailed: "News Detector is a web application that utilizes machine learning algorithms to classify news articles as either fake or real. It employs advanced algorithms for accurate categorization, providing users with reliable information.",
              techs: [
                { icon: FaHtml5, name: "HTML5" },
                { icon: DiCss3, name: "CSS3" },
                { icon: RiJavascriptFill, name: "JavaScript" },
                { icon: SiTailwindcss, name: "Tailwind CSS" },
                { icon: SiFlask, name: "Flask" },
                { icon: SiPython, name: "Python" },
                { icon: FaGitAlt, name: "Git" }
              ]
            },
          
        
           
    ]
    return (

        <ChakraProvider>
            <Box bg="black" py={20} display={'flex'} alignItems={'center'} flexDirection={'column'} justifyContent={'center'}>
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'} mb={12}><Heading>Projects</Heading></Box>
            <SimpleGrid columns={{sm:1, md:2, lg:3}} spacing={16} p={4} justifyContent={'center'} >
                {projects.map((e, i) => {
                    return (
                        <Card maxW='sm' bg="gray.400" color="black" key={i}>
                            <CardBody>
                                {/* <Link to={e.live} target='_blank'> */}
                                <ImageComponent
                                    src={e.img}
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                {/* </Link> */}
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
                                    <Button variant='solid' mr={2} colorScheme='yellow'>
                                        <Link to={e.live}>Live</Link>
                                    </Button>
                                    <Button variant='solid' colorScheme='teal' display={'flex'} flexDirection={'row'}>
                                       <Link to={e.git} style={{display:'flex'}} > <Icon as={ImGithub} boxSize={4} mr={1} /><Text display={{base:'none',md:'none',xl:'flex'}}>Github</Text></Link>
                                    </Button>
                                    <Button variant='solid' colorScheme='blue'>
                                    <Details project={e}><Icon as={FaClipboardList} boxSize={4}  /><Text display={{base:'none',md:'none',xl:'flex'}}>Details</Text> </Details>
                                    </Button>
                                    <Popover >
                                        <PopoverTrigger>
                                            <Button><Icon as={BsInfoCircleFill} boxSize={4}/></Button>
                                        </PopoverTrigger>
                                        <Portal bg='black'>
                                            <PopoverContent bg="#072957" color='white'>
                                                {/* <PopoverArrow /> */}
                                                <PopoverHeader fontWeight={'bold'} fontSize={'medium'}>Technologies Used</PopoverHeader>
                                                <PopoverCloseButton />
                                                <PopoverBody>
                                                    {e.techs.map((t,i)=>{
                                                        return(
                                                            <Button colorScheme='white' color={'white'} mr={0.5} mb={1}><Icon as={t.icon} boxSize={6}/></Button>
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
