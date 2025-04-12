import { Box, Flex } from "@chakra-ui/react";

export default function AiOffice() {
  return (
    <Flex direction="column" height="100%">
      {/* Top Section: Flex vertically split */}
      <Flex direction="row" flex="1">
        {/* Left Flex Section (top left) */}
        <Box flex="1" bg="gray.100" p={4}>
          <h1>Left Side - Flex</h1>
          {/* Add content for the left side */}
        </Box>

        {/* Right Fixed Section (top right) */}
        <Box width="300px" bg="gray.300" p={4}>
          <h1>Right Side - Fixed</h1>
          {/* Add content for the right side */}
        </Box>
      </Flex>

      {/* Bottom Section: Fixed */}
      <Box
        height="100px"
        bg="blue.500"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <h1>Fixed Bottom</h1>
      </Box>
    </Flex>
  );
}