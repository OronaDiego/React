import { Flex } from '@chakra-ui/react'
const ItemListContainer = (prop)=>{
    return <Flex justifyContent={"center"} margin={"50px"} fontSize={"30px"}>{prop.greeting}</Flex>
};

export default ItemListContainer;