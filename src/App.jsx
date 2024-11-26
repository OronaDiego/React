import { ChakraProvider, Flex } from '@chakra-ui/icons'
import { React } from 'react'
import Counter from './assets/components/Counter/Counter'
import Layout from './assets/layouts/Layout'
import Home from './assets/pages/Home'



function App() {
  return (
    <>
    <ChakraProvider>
    <Layout>
      <Home/>
      <Flex alignItems={"center"} textAlign={"center"} justifyContent={"center"}>
        <Counter/>
      </Flex>
    </Layout>
    </ChakraProvider>
    </>
  )
}

export default App
