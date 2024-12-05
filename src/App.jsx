import { ChakraProvider } from '@chakra-ui/icons'
import { React } from 'react'
import { Layout } from './assets/layouts/Layout'
import { PublicRouter } from './assets/router'
function App() {
  return (
    <>
    <ChakraProvider>
    <Layout>
      <PublicRouter/>
    </Layout>
    </ChakraProvider>
    </>
  )
}

export default App
