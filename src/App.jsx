import { ChakraProvider, Flex } from '@chakra-ui/icons'
import ItemListContainer from './assets/components/ItemListContainer/ItemListCointainer'
import NavBar from './assets/components/NavBar/NavBar'
import { React } from 'react'
import Counter from './assets/components/Counter/Counter'



function App() {
  



  return (
    <>
    <ChakraProvider>
    <NavBar/>
    <ItemListContainer greeting="Saludos Terricola"/>
    <Flex alignItems={"center"} textAlign={"center"} justifyContent={"center"}>
      <Counter/>
    </Flex>
    </ChakraProvider>
    </>
  )
}

export default App
