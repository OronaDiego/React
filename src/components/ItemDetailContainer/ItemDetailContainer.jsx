import { Link } from 'react-router-dom'
import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
} from '@chakra-ui/react'
import { MdLocalShipping } from 'react-icons/md'
import { FaHandPointLeft } from "react-icons/fa";

export const ItemDetailContainer = ({ product }) => {
    console.log(product);

    return (
        <Container maxW={'7xl'}>
            <Flex alignItems={"center"}>
                <Link to="/productos">Volver a productos
                    <FaHandPointLeft />
                </Link>
            </Flex>
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }}>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'product image'}
                        src={
                            product.thumbnail
                        }
                        fit={'cover'}
                        align={'center'}
                        w={'100%'}
                        h={{ base: '100%', sm: '400px', lg: '500px' }}
                    />
                </Flex>
                <Stack spacing={{ base: 6, md: 10 }}>
                    <Box as={'header'}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                            {product.title}
                        </Heading>
                        <Text
                            color={useColorModeValue('gray.900', 'gray.400')}
                            fontWeight={300}
                            fontSize={'2xl'}>
                            {product.price}USD
                        </Text>
                    </Box>

                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={'column'}
                        divider={
                            <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
                        }>
                        <VStack spacing={{ base: 4, sm: 6 }}>
                            <Text
                                color={useColorModeValue('gray.500', 'gray.400')}
                                fontSize={'2xl'}
                                fontWeight={'300'}>
                                {product.category}
                            </Text>
                            <Text fontSize={'lg'}>
                                {product.description}
                            </Text>
                        </VStack>
                        <Box>
                            <Text
                                fontSize={{ base: '16px', lg: '18px' }}
                                color={useColorModeValue('yellow.500', 'yellow.300')}
                                fontWeight={'500'}
                                textTransform={'uppercase'}
                                mb={'4'}>
                                Features
                            </Text>

                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                                <List spacing={2}>
                                    <ListItem>{product.brand}</ListItem>
                                    <ListItem>{product.sku}</ListItem>{' '}
                                    <ListItem>{product.stock}</ListItem>
                                </List>
                                <List spacing={2}>
                                    <ListItem>Brand</ListItem>
                                    <ListItem>Sku</ListItem>
                                    <ListItem>Stock</ListItem>
                                </List>
                            </SimpleGrid>
                        </Box>
                        <Box>
                            <Text
                                fontSize={{ base: '16px', lg: '18px' }}
                                color={useColorModeValue('yellow.500', 'yellow.300')}
                                fontWeight={'500'}
                                textTransform={'uppercase'}
                                mb={'4'}>
                                Product Details
                            </Text>

                            <List spacing={2}>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Width:
                                    </Text>{' '}

                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Height:
                                    </Text>{' '}

                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Depth:
                                    </Text>{' '}

                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Warranty:
                                    </Text>{' '}
                                    {product.warrantyInformation}
                                </ListItem>
                            </List>
                        </Box>
                    </Stack>

                    <Button
                        rounded={'none'}
                        w={'full'}
                        mt={8}
                        size={'lg'}
                        py={'7'}
                        bg={useColorModeValue('gray.900', 'gray.50')}
                        color={useColorModeValue('white', 'gray.900')}
                        textTransform={'uppercase'}
                        _hover={{
                            transform: 'translateY(2px)',
                            boxShadow: 'lg',
                        }}>
                        Add to cart
                    </Button>

                    <Stack direction="row" alignItems="center" justifyContent={'center'}>
                        <MdLocalShipping />
                        <Text>{product.shippingInformation}</Text>
                    </Stack>
                </Stack>
            </SimpleGrid>
        </Container>
    )
}

