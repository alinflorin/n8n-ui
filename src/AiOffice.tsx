import { Box, Flex } from "@chakra-ui/react";

export default function AIOffice() {
  return (
    <Flex
      direction="column"
      height="100%"        // Allow it to fill the available space within the Outlet
      overflow="auto"      // Enable scrolling on the container level
    >
      {/* Top Section: Flex vertically split */}
      <Flex
        direction={{ base: "column", lg: "row" }}   // Stack vertically on mobile (base) and horizontally on larger screens (lg)
        flex={{ base: "none", lg: "1" }}
        overflow="hidden"   // Prevent overflowing content outside the flex
      >
        {/* Left Flex Section (top left) */}
        <Box
          bg="gray.100"
          p={4}
          flex={{ base: "none", lg: "1" }}
          overflowY="auto"    // Enable vertical scrollbar on the left section (for large screens)
        >
          <h1>Left Side - Flex</h1>
          {/* Add content for the left side */}
          <Box> {/* For demo purposes, just adding a large height to show scroll */}
            Scrollable content
          </Box>
        </Box>

        {/* Right Fixed Section (top right) */}
        <Box
          bg="gray.300"
          p={4}
          width={{ base: "100%", lg: "40%" }}
          overflowY="auto"    // Enable vertical scrollbar on the right section (for large screens)
        >
          <h1>Right Side - Fixed</h1>
          {/* Add content for the right side */}
          <Box> {/* For demo purposes, just adding a large height to show scroll */}
            Scrollable content
          </Box>
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
