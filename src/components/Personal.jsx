import { ChakraProvider, Box, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import DownloadResumeButton from './DownloadResume'
import { Button } from '@chakra-ui/react'
import { FaAngleUp, FaArrowPointer, FaDownLeftAndUpRightToCenter, FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaVoicemail, FaWhatsapp, FaX, FaYoutube } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function Personal() {
  return (
    <ChakraProvider>
      <VStack display={'flex'} bg={'teal'} color='black' py={5} spacing={'10'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
        <Link to={'https://www.instagram.com/priyansh_2603/'} target="_blank" ><FaInstagram size={34} /></Link>
        <Link to={'https://linkedin.com/in/priyansh-daksha-8a54a2212/'} target="_blank"><FaLinkedin size={34} /></Link>
        <Link to={'https://github.com/Priyansh2603/'} target="_blank"><FaGithub size={34} /></Link>
        <Link to={'https://twitter.com/Priyansh_2603/'} target="_blank"><FaTwitter size={34} /></Link>
        <Link to={'https://youtube.com'} target="_blank"><FaYoutube size={34} /></Link>       
        <Link to={'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJvkXVMGmRhwpmFZqmBlhGbXVDFfJSfJzKspLFQWHrbcQmBDdslhPDTlNZJnswGZNXtfbDV'}  target="_blank"><FaEnvelope size={34} /></Link>        
        <Link to={`https://wa.me/${8791152142}`} target="_blank"><FaWhatsapp size={34} /></Link>        
        <Button colorScheme='yellow' color='black' display={'flex'} flexDirection={'row'}><Text mr={2}>Say Hello</Text><FaArrowPointer transform={'scaleX(-1)'} /></Button>
        <DownloadResumeButton />
      </VStack>
    </ChakraProvider>
  )
}
