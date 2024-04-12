import React from 'react';
import { Box,Text,Icon} from '@chakra-ui/react'

interface DataBoxProps {
    title: string;
    value: string | number;
  }


const StatusCard: React.FC<DataBoxProps> = ({ title, value }) => {
  return (
    <Box bg='#fff' boxShadow='xl' borderRadius='1rem' w='100%' p={6} color='gray' display='flex' flexDirection='column' justifyContent='space-between' alignItems='center'>
    
       <Text>{title}</Text>
       <Text fontSize='1.5rem' color='gray.800'>{value}</Text>

    </Box>
  );
};

export default StatusCard;
