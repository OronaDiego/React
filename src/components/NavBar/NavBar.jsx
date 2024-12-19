import { Link } from 'react-router-dom';
import {
    Box,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { CartWidget } from '../index'
import { useGetAllCategories } from '../../hooks/useGetAllCategories'

export function NavBar() {
    const { colorMode, toggleColorMode } = useColorMode()
    const {categories} = useGetAllCategories()
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box><Link to="/">ImporTienda</Link></Box>
                    <Box><Link to="/productos">Productos</Link></Box>
                            <Menu>
                                <MenuButton as={Button} >
                                    Categorias
                                </MenuButton>
                                <MenuList height={'200px'} overflowY={'scroll'}>
                                    {
                                        categories.map((cat)=>{
                                            return(
                                                <MenuItem key={cat.slug}>{cat.name}</MenuItem>
                                            )
                                        })
                                    }
                                </MenuList>
                            </Menu>
                    <Flex alignItems={'center'}>
                        <CartWidget />
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>
                                    <Avatar
                                        size={'sm'}
                                        src={'../../../../DiegoDev.png'}
                                    />
                                </MenuButton>
                                <MenuList alignItems={'center'}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={'2xl'}
                                            src={'../../../../DiegoDev.png'}
                                        />
                                    </Center>
                                    <br />
                                    <Center>
                                        <p>Diego Oroná</p>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem>Your Servers</MenuItem>
                                    <MenuItem>Account Settings</MenuItem>
                                    <MenuItem>Logout</MenuItem>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}