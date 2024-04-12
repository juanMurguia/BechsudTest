import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import BoxInfo from "./components/BoxInfo";
import CardSmall from "./components/CardSmall";
import Table from "./components/Table";
import Status from "./components/Status";
import {Box, Grid, GridItem,Button} from '@chakra-ui/react';

export default function Home() {
  return (
    
    <main className={styles.main}>
      <Button bg='gray.300' size='md' color='gray.600' marginLeft='4rem'>Volver</Button>
    
 
      <Box display='flex' flexDirection='column'  w='100%' px='4rem' my='4rem' gap='4rem'>
     
        <BoxInfo></BoxInfo>
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }} gap={4}>
          <CardSmall title={'N° de solicitud'} value={2002} ></CardSmall>
          <CardSmall title={'Fecha de muestra'} value={'12/05/2000'} ></CardSmall>
          <CardSmall title={'Botella'} value={258} ></CardSmall>
          <CardSmall title={'Botella'} value={4} ></CardSmall>
          <CardSmall title={'Horas lubricante'} value={64} ></CardSmall>
          <CardSmall title={'Horas máquina'} value={32} ></CardSmall>
          <CardSmall title={'Producto'} value={'Kluber Summit'} ></CardSmall>
          <CardSmall title={'Observaciones'} value={'Sin observaciones'} ></CardSmall>
        </Grid>

        <Status> </Status>

        <Table title={'Propiedas fisicas - Resultados'}></Table>

        <Table title={'Propiedas fisicas - Resultados'}></Table>
      </Box>
      


     
    </main>
  );
}
