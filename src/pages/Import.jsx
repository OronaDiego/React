import React from 'react';
import { Box, Heading, Text,VStack } from '@chakra-ui/react';

export const Import = () => {
    return (
        <Box
            maxW="600px"
            mx="auto"
            my={10}
            p={6}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="lg"
            bg="white"
        >
            <VStack spacing={4} align="start">
                <Heading as="h1" size="lg" color="teal.500">
                    Importación de Productos a Argentina
                </Heading>
                <Text fontSize="md" color="gray.700">
                    La importación de productos a Argentina implica una serie de pasos clave que incluyen la gestión de documentación, el cumplimiento de regulaciones aduaneras y el pago de aranceles e impuestos específicos. Este proceso es esencial para garantizar el acceso a productos internacionales en el mercado local.
                </Text>
                <Text fontSize="sm" color="gray.600">
                    Para emprendedores y empresas, conocer los requisitos legales y los beneficios fiscales puede marcar la diferencia al momento de importar productos de manera eficiente y rentable.
                </Text>
            </VStack>
        </Box>
    );
};