import React from 'react';
import { Box,Text,Table,
    Tbody,
    Tr,
    Td,
    TableContainer,} from '@chakra-ui/react'

interface tableProps {
    title: string;

  }


const StatusCard: React.FC<tableProps> = ({ title }) => {
  return (
    <Box bg='#fff' boxShadow='xl' borderRadius='1rem' w='100%' color='gray' display='flex' flexDirection='column' justifyContent='space-between' alignItems='center'>
    
       <Text bg='gray.200' px='16px' py='8px' borderRadius='1rem' color='gray.800' width='100%' marginBottom='1rem'>{title}</Text>

       <TableContainer w='100%'>
            <Table size='lg'>

                <Tbody color='gray.800'>
                <Tr borderTop='gray.200'>
                    <Td width="20%" >Fecha de muestra</Td>
                    <Td>21/05/2000</Td>
                    <Td isNumeric>21/05/2008</Td>
                    <Td isNumeric>21/05/2022</Td>
                    <Td isNumeric>21/05/2022</Td>
                    <Td isNumeric>21/05/2024</Td>
                </Tr>
                <Tr>
                    <Td width="20%">Fecha de muestra</Td>
                    <Td>21/05/2000</Td>
                    <Td isNumeric>21/05/2008</Td>
                    <Td isNumeric>21/05/2022</Td>
                    <Td isNumeric>21/05/2022</Td>
                    <Td isNumeric>21/05/2024</Td>
                </Tr>
                <Tr>
                    <Td width="20%">Fecha de muestra</Td>
                    <Td>21/05/2000</Td>
                    <Td isNumeric>21/05/2008</Td>
                    <Td isNumeric>21/05/2022</Td>
                    <Td isNumeric>21/05/2022</Td>
                    <Td isNumeric>21/05/2024</Td>
                </Tr>
                <Tr>
                    <Td width="20%">Fecha de muestra</Td>
                    <Td>21/05/2000</Td>
                    <Td isNumeric>21/05/2008</Td>
                    <Td isNumeric>21/05/2022</Td>
                    <Td isNumeric>21/05/2022</Td>
                    <Td isNumeric>21/05/2024</Td>
                </Tr>
                <Tr>
                    <Td width="20%">Fecha de muestra</Td>
                    <Td>21/05/2000</Td>
                    <Td isNumeric>21/05/2008</Td>
                    <Td isNumeric>21/05/2022</Td>
                    <Td isNumeric>21/05/2022</Td>
                    <Td isNumeric>21/05/2024</Td>
                </Tr>
               
                </Tbody>
            
            </Table>
</TableContainer>
    </Box>
  );
};

export default StatusCard;
