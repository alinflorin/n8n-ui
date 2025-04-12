import { Box, Text, Flex, Link as ChakraLink } from "@chakra-ui/react";
import env from "./env";
import { Link } from "react-router";

export default function Footer() {
  return (
    <Box as="footer" py={4} px={6}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        fontSize="sm"
      >
        <Text>&copy; {new Date().getFullYear()} Alin. All rights reserved. Version: {env.VERSION}</Text>
        <ChakraLink asChild>
          <Link to="/">Home</Link>
        </ChakraLink>
      </Flex>
    </Box>
  );
}
