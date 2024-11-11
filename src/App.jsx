import { ChakraProvider } from '@chakra-ui/icons'
import ItemListContainer from './assets/components/ItemListContainer/ItemListCointainer'
import NavBar from './assets/components/NavBar/NavBar'
function App() {
  

  return (
    <>
    <ChakraProvider>
    <NavBar/>
    <ItemListContainer/>
    </ChakraProvider>
    </>
  )
}

export default App
