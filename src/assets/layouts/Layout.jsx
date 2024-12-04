import { Flex } from "@chakra-ui/react";
import { NavBar, Footer } from "../components";

export const Layout = ({children})=>{
    return(
        <Flex flexDirection={"column"} minHeight={"100vh"}>
            <NavBar/>
            <Flex flex="1" flexDirection="column">
            {children} 
            </Flex>
            <Footer/>
        </Flex>
    )
}
