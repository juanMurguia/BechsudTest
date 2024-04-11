import React from 'react';
import { Box,Heading,Button,UnorderedList, Link} from '@chakra-ui/react'
import { FaPhoneAlt } from "react-icons/fa";


const Header: React.FC = () => {
  return (
    <Box bg='#F6FAFB' w='100%' p={6} color='gray' display='flex' position='fixed' justifyContent='space-between'>
      <Link href='#' textDecoration='none'><Heading color='gray.800' textDecoration='none'>Quilmes</Heading></Link>
      <UnorderedList display='flex' flexDirection='row' gap={6} alignItems='center'>
        <Link href="#" color='gray.800'>Estado</Link>
        <Link href="#" color='gray.800'>Tareas</Link>
        <Button rightIcon={<FaPhoneAlt />} colorScheme='blue' variant='outline'>
            Solicitar asistencia
        </Button>
      </UnorderedList>
    </Box>
  );
};

export default Header;
