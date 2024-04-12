import React from 'react';
import { Box,Text,Image,Heading,Grid,Icon} from '@chakra-ui/react'
import Imagen from '../../../public/img/imagen-card.webp'
import { TbCrane } from "react-icons/tb";
import { machine } from '../data';




const machineData = machine.machine;
const machineComponent = machine.component;


const Status: React.FC = () => {
  return (
    <Box bg='#fff' boxShadow='xl' borderRadius='1rem' padding='2rem' border='2px solid green' w='100%' height='auto' color='gray' display='flex' flexDirection='row' justifyContent='start' gap='50%' alignItems='center'>
      
    <Box display='flex' w='20%' alignItems='start'>
    <svg width="auto" height="100">
      <circle cx="50" cy="50" r="15" fill="green" />
    </svg>
    <svg width="auto" height="100">
      <circle cx="50" cy="50" r="15" fill="green" />
    </svg>
    <svg width="auto" height="100">
      <circle cx="50" cy="50" r="15" fill="green" />
    </svg>
    </Box>

    <Box display='flex' flexDirection='column' alignItems='start'>
      <Text fontSize='1.5rem' color='green.500'>Finalizado</Text>
      <Text color='gray.800'>No se requiere accion</Text>
      <Text color='gray.500'>El fluido aparenta estar en buenas condiciones</Text>
    </Box>
      
    </Box>
  );
};

export default Status;
