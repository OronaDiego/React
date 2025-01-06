import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react'

import backgroundImage from '../assets/bannerHome.jpg'
import { Link } from 'react-router-dom';


export const Home = () => {
  // const { loading, items } = useGetAllProducts("products");
  return (
    <Box
      position="relative"
      bgImage={`url(${backgroundImage})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      w="100%"
      h="100vh"
    >
      <Container maxW={'3xl'} position="relative" zIndex={1}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            Importar Productos  <br />
            <Text as={'span'} color={'green.400'}>
              Nunca fue tan facil
            </Text>
          </Heading>
          <Text color={'white.500'}>
            Importá productos desde cualquier parte con solo un click, elejis el producto y nosotros nos encargamos del resto
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            <Link to="/productos">
              <Button
                colorScheme={'green'}
                bg={'green.400'}
                rounded={'full'}
                px={6}
                _hover={{
                  bg: 'green.500',
                }}
                >
                Productos
              </Button>
            </Link>
            <Link to="/import">
              <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
                Leer mas
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
      {/* Fondo oscuro para contraste */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bg="blackAlpha.600"
        zIndex={0}
      />
    </Box>
  );
};

