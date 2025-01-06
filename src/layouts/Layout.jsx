import { Flex } from "@chakra-ui/react";
import { Footer } from "../components";

export const Layout = ({ children }) => {
  return (
    <Flex flexDirection={"column"} minHeight={"100vh"}>
      <Flex as="main" flex="1" flexDirection="column">
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};
