import React from 'react';
import resume from '../images/resume.pdf'
import { ChakraProvider,Button, Text } from '@chakra-ui/react';
import { FaDownload } from 'react-icons/fa6';
const DownloadResumeButton = () => {
  const handleDownload = () => {
    // Assuming your resume file is in the public folder and named resume.pdf
    const resumePath = process.env.PUBLIC_URL + '/resume.pdf';
    window.open(resume, '_blank');
  };

  return (
    <ChakraProvider>
        <Button colorScheme='teal' color={'black'} display={'flex'} flexDirection={'row'} onClick={handleDownload}>
            <FaDownload mr={4}/>
      <Text ml={2}>View Resume</Text>
    </Button>
    </ChakraProvider>
  );
};

export default DownloadResumeButton;
