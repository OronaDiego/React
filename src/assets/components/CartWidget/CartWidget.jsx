import { IconButton } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { Flex } from '@chakra-ui/react';

const CartWidge = () => {
    return <Flex alignItems={"center"} margin={"10px"}>

        <IconButton
            icon={<FaShoppingCart />}
            aria-label="Carrito"
            variant="ghost"
            colorScheme="teal"
            fontSize="24px"
        />23
    </Flex>
}
export default CartWidge;