import React from 'react';
import { Box,Heading,Button,UnorderedList, Link} from '@chakra-ui/react'
import { FaPhoneAlt } from "react-icons/fa";


const Header: React.FC = () => {
  return (
    <Box bg='#F6FAFB' w='100%' px='4rem' py='1rem' color='gray' display='flex' position='relative' justifyContent='space-between'>
      <Heading color='blue.500' textDecoration='none'>Quilmes</Heading>
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
