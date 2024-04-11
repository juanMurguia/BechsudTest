import React from 'react';
import { Box,Heading, flexbox } from '@chakra-ui/react'

const Header: React.FC = () => {
  return (
    <Box bg='#F6FAFB' w='100%' p={4} color='gray' display='flex'>
      <Heading>Quilmes</Heading>
      <nav>
        <a href="#">Inicio</a>
        <a href="#">Acerca de</a>
        <a href="#">Contacto</a>
      </nav>
    </Box>
  );
};

export default Header;
