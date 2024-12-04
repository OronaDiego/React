import { ChakraProvider } from '@chakra-ui/icons'
import { React } from 'react'
import Layout from './assets/layouts/Layout'
import Home from './assets/pages/Home'


function App() {
  return (
    <>
    <ChakraProvider>
    <Layout>
      <Home/>
    </Layout>
    </ChakraProvider>
    </>
  )
}

export default App
