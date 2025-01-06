import React from 'react';
import { Box, Text, Image, Stack, Button } from '@chakra-ui/react';
import mercadoPagoLogo from '../assets/mercadoPago.png'
import { Link } from 'react-router-dom';

export const Payment = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      p={4}
    >
      <Stack spacing={6} align="center" textAlign="center">
        <Text fontSize="2xl"  fontWeight="bold">
          Próximamente
        </Text>
        <Text fontSize="lg" >
          Integraremos Mercado Pago para facilitar tus transacciones.
        </Text>
        <Image
          src={mercadoPagoLogo}
          alt="Logo Mercado Pago"
          boxSize="150px"
          objectFit="contain"
        />
      </Stack>
      <Link to="/">
        <Button>Volver al Home</Button>
      </Link>
    </Box>
  );
};
