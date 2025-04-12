import { Box, Text, Flex, Link } from "@chakra-ui/react";
import env from "./env";

export default function Footer() {
  return (
    <Box as="footer" py={4} px={6} bg="gray.800" color="gray.300">
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        fontSize="sm"
      >
        <Text>&copy; {new Date().getFullYear()} Alin. All rights reserved. Version: {env.VERSION}</Text>
        <Flex gap={4} mt={{ base: 2, md: 0 }}>
          <Link href="/privacy" _hover={{ color: "white" }}>
            Privacy
          </Link>
          <Link href="/terms" _hover={{ color: "white" }}>
            Terms
          </Link>
          <Link href="/contact" _hover={{ color: "white" }}>
            Contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
