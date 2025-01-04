import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Flex, IconButton } from "@chakra-ui/react";
import { CartContext } from '../../context';
import { Link } from 'react-router-dom';

export const CartWidget = () => {

  const { cartState } = useContext(CartContext);
  const totalItems = cartState.reduce((aux, item) => aux + item.qtyCartItem, 0);

  return (
  <Link to="/checkout">
    <Flex
      alignItems={"center"}
      marginRight={"30px"}
      justifyContent={"space-between"}
      width={"30px"}
    >
      <IconButton
        icon={<FaShoppingCart />}
        aria-label="Carrito"
        variant="ghost"
        colorScheme="teal"
        fontSize="24px"
      />
      {totalItems}
    </Flex>
  </Link>
  );
};
