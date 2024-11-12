import { ChakraProvider, Flex } from '@chakra-ui/icons'
import ItemListContainer from './assets/components/ItemListContainer/ItemListCointainer'
import { React } from 'react'
import Counter from './assets/components/Counter/Counter'
import Layout from './assets/layouts/Layout'



function App() {
  



  return (
    <>
    <ChakraProvider>
    <Layout>
      <ItemListContainer greeting="Saludos Terricola"/>
      <Flex alignItems={"center"} textAlign={"center"} justifyContent={"center"}>
        <Counter/>
      </Flex>
    </Layout>
    </ChakraProvider>
    </>
  )
}

export default App
