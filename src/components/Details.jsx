import { useState } from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, UnorderedList, ListItem, Divider, Image, Text } from '@chakra-ui/react';
import ModalImage from 'react-modal-image';
export default function Details({ project,children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImgUrl, setModalImgUrl] = useState(null);

  const openImageModal = (imgUrl) => {
    setModalImgUrl(imgUrl);
    setShowModal(true);
  };
  return (
    
    <>
      <Text display={'flex'} mr={0} ml={0} colorScheme='black' onClick={onOpen}>{children}</Text>
      <Modal
        isCentered
        onClose={() => {
          onClose();
          setIsModalOpen(false);
        }}
        isOpen={isOpen || isModalOpen}
        motionPreset='slideInBottom'
      >
        <ModalOverlay />
        <ModalContent border={'4px solid black'}>
          <ModalHeader>{project.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <img style={{borderWidth:'4px',border:'4px solid black'}} src={project.img} alt={project.title} onClick={()=>{openImageModal(project.img)}} />
            <p style={{textAlign:'justify',marginTop:'4px'}}>{project.detailed || project.desc}</p>
            <Divider height={'0.7px'} backgroundColor={'black'} color={'black'} my={2}/>
            <h4 style={{display:'flex',justifyContent:'center',fontWeight:'bold',fontSize:'20px'}}>Technologies Used</h4>
            <UnorderedList listStyleType={'initial'} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
              {console.log(project.techs)}
              {project.techs.map((TechIcon, index) => (
                <ListItem key={index} style={{ display: 'flex', flexDirection: 'column', fontSize: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <TechIcon.icon style={{ marginRight: '0.5rem',color:'black', fontSize: '2rem' }} />
                    {TechIcon.name} {/* Display the name of the icon */}
                  </div>
                </ListItem>
              ))}
            </UnorderedList>

          </ModalBody>
          <Divider height={'1px'} backgroundColor={'black'} />
          <ModalFooter>
            <Button as='a' href={project.live} colorScheme='blue' mr={3} target='_blank' rel='noopener noreferrer'>
              View Live
            </Button>
            <Button as='a' href={project.git} colorScheme='teal' target='_blank' rel='noopener noreferrer'>
              View Code
            </Button>
            <Button colorScheme='red' ml={3} onClick={() => setIsModalOpen(false)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* <Modal isOpen={showModal} onClose={() => setShowModal(false)}> */}
        {/* {showModal && (
          <div style={{ display:'flex',alignItems:'center',justifyContent:'center',zIndex: 9999 }}> {/* Ensure the z-index is higher */}
            {/* <Image
              src={modalImgUrl}
              alt="Project Image"
              hideDownload
              style={{ maxHeight: '90vh', maxWidth: '90vw', cursor: 'pointer' }}
            />
          </div>
        // )} 
      {/* </Modal> */}
    </>
  );
}
