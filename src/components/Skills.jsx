import React from 'react'
import { Wrap, WrapItem, Avatar, ChakraProvider, Heading, Divider } from '@chakra-ui/react';
export default function Skills() {
  return (
    <ChakraProvider>
        <Heading py={'2em'}>Skills</Heading>
        <Wrap spacing="20px" display={'flex'} ml={{base:12,md:4}} alignItems={'center'} justifyContent={'center'} pb={{base:'5vw',md:'5em'}}>
    <WrapItem>
      <Avatar size="xl" mr={4} name='Dan Abrahmov' src='https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png' />
    </WrapItem>
    <WrapItem>
      <Avatar size="xl" mr={4} name='Kola Tioluwani' src='https://etrainindia.com/wp-content/uploads/2022/08/node-js.jpg' />
    </WrapItem>
    <WrapItem>
      <Avatar size="xl" mr={4} name='Kent Dodds' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRwIVdKNKpXf59pfwtVoAS2KGkDoY7PVXbKg&usqp=CAU' />
    </WrapItem>
    <WrapItem>
    <Avatar size="xl" mr={4} name='Ryan Florence' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS72C1D3HYnpkC8U2rLbFUzlKgIrh6PdEJhjmj7lqIeahOeQq5C0TUH2x6V9bof9quOU94&usqp=CAU' />
      
    </WrapItem>
    <WrapItem>
      <Avatar size="xl" mr={4} name='Prosper Otemuyiwa' src='https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/8d565/express-js.webp' />
    </WrapItem>
    <WrapItem>
      <Avatar size="xl" mr={4} name='Christian Nwamba' src='https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png' />
    </WrapItem>
  </Wrap>
        <Wrap spacing="20px" display={'flex'} ml={{base:12,md:4}} alignItems={'center'} justifyContent={'center'} pb={'5em'}>
    <WrapItem>
      <Avatar size="xl" mr={4} name='Segun Adebayo' src='https://media.licdn.com/dms/image/D5612AQF7qsedbVwxIg/article-cover_image-shrink_720_1280/0/1667562320796?e=1710374400&v=beta&t=iwhYa3oiHjPORQ0mL0atHDVdwH54-EepuGxtkirFC2E' />
    </WrapItem>
    <WrapItem>
      <Avatar size="xl" mr={4} name='Dan Abrahmov' src='https://logowik.com/content/uploads/images/911_c_logo.jpg' />
    </WrapItem>
    <WrapItem>
      <Avatar size="xl" mr={4} name='Kola Tioluwani' bg='white' src='https://docs.soliditylang.org/en/latest/_images/solidity_logo.svg' />
    </WrapItem>
    <WrapItem>
      <Avatar size="xl" mr={4} name='Kent Dodds' bg="white" src='https://www.logo.wine/a/logo/Java_(programming_language)/Java_(programming_language)-Logo.wine.svg' />
    </WrapItem>
    <WrapItem>
      <Avatar size="xl" mr={4} name='Prosper Otemuyiwa' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLrC1wJORhjBI7hHmCBJWBwinpnjfVwxlyvlwIhIWKTpdn1X62aOD6U6VUUoCn1k7YhZM&usqp=CAU' />
    </WrapItem>
    <WrapItem>
      <Avatar size="xl" mr={4} name='Prosper Otemuyiwa' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQz8nicvBEVU-FOc3Nkwqt6f60hVlL2DBjKk50pju5CnxHwJDaJIk-SqxAX-LC0k0gIY&usqp=CAU' />
    </WrapItem>
    
    <WrapItem>
    <Avatar size="xl" mr={4} name='Ryan Florence' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvRC6YepyAC0kRwz7p6-gXI2EVUKe4fhWQsg&usqp=CAU' />
    </WrapItem>
  </Wrap>
  <Divider mt={24} mb={28}color={'white'}/>
    </ChakraProvider>
  )
}
