import React from 'react';
import { Box,Text,Image,Heading,Grid} from '@chakra-ui/react'
import Imagen from '../../../public/img/imagen-card.webp'
import { TbCrane } from "react-icons/tb";
import { machine } from '../data';

const machineData = machine.machine;
const machineComponent = machine.component;


const BoxInfo: React.FC = () => {
  return (
    <Box bg='#fff' boxShadow='xl' borderRadius='1rem' w='100%' height='auto' p={0} color='gray' display='flex' flexDirection='row' justifyContent='start' alignItems='center'>
      <Box h='100%' w='30%' bg='none' display='flex' alignItems='center' >
        <Image src={Imagen.src} borderBottomRightRadius='50' borderTopRightRadius='50' alt='Maquinaria' height='100%' width='auto' />
      </Box>
      <Box display='flex' flexDirection='column' h='auto' alignItems='start' gap='0px' p='8' w='100%'>
        <Box display='flex' flexDirection='row' gap='16px' w='100%' alignItems='center'><TbCrane style={{ fontSize: '28px', color: 'gray.500' }}></TbCrane> <Text textAlign='left' color='gray.800' fontWeight={600} fontSize='1.5rem'> {machine.machine.technicalLocation} <Text backgroundColor='gray.100' px='16px' borderRadius={50} color='gray.700'>No crítico</Text></Text></Box>
        <Text color='gray.400'> Línea 4 / Transporte hacia Pausterizado</Text>

        <Box display='flex' flexDirection='column' h='auto' alignItems='start' gap='0' w='100%' mt='16px'>
            <Text fontSize='1rem' color='gray.800' fontWeight='bold' textAlign='left' mb='8px'>Equipo</Text>
            <Grid w='100%' templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)' }} templateRows={{lg:'repeat(2, 1fr)', sm: 'repeat(1, 1fr)', base: 'repeat(2, 1fr)'}} gap={4}>
                <Box >
                    <Heading mb={1} fontSize='14px' color='gray.400' fontWeight='normal'>Tipo de equipo</Heading>
                    <Text fontSize='xl' color='gray.800'>
                        {machine.component.componentType}
                    </Text>
                </Box>
                <Box >
                    <Heading mb={1} fontSize='14px' color='gray.400' fontWeight='normal'>Descripción</Heading>
                    <Text fontSize='xl' color='gray.800'>
                        -
                    </Text>
                </Box>
                <Box >
                    <Heading mb={1} fontSize='14px' color='gray.400' fontWeight='normal'>Número de serie</Heading>
                    <Text fontSize='xl' color='gray.800'>
                        -
                    </Text>
                </Box>
                <Box >
                    <Heading mb={1} fontSize='14px' color='gray.400' fontWeight='normal'>Fabricante</Heading>
                    <Text fontSize='xl' color='gray.800'>
                        KHS
                    </Text>
                </Box>
                <Box >
                    <Heading mb={1} fontSize='14px' color='gray.400' fontWeight='normal'>Modelo</Heading>
                    <Text fontSize='xl' color='gray.800'>
                        -
                    </Text>
                </Box>
            </Grid>
        </Box>

      </Box >

      
    </Box>
  );
};

export default BoxInfo;
