import { Flex, Spinner } from "@chakra-ui/react";
import ItemListContainer from '../components/ItemListContainer/ItemListCointainer'
import { useState } from "react";


const Home = ()=>{
    const [loading, setLoading]= useState(true)

    setTimeout(()=>{
        setLoading(false)
    },2000);

    return loading ? (
        <Flex alignItems={"center"} justifyContent={"center"} height={"90vh"}>
            <Spinner/>
        </Flex>
    ) : (
        <ItemListContainer greeting="Saludos Terricola"/>
    );
}
export default Home;