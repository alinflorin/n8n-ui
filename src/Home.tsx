import { Box, SimpleGrid, Card, CardBody, Text } from "@chakra-ui/react";
import { Link } from "react-router"; // Correct import for RouterLink
import { Link as ChakraLink } from "@chakra-ui/react";
import { FaRobot } from "react-icons/fa"; // Example of Chakra UI icon

// Configuration object for cards
const cardData = [
  {
    title: "AI Office",
    description: "My AI Office",
    icon: <FaRobot size="48px" />, // Use the desired icon here
    link: "/ai-office",
  },
  // You can add more cards in the future
];

export default function Home() {
  return (
    <Box p={4}>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 2, lg: 4 }}
        rowGap={6} // Adjust row spacing
        columnGap={6} // Adjust column spacing
        minChildWidth="200px"
      >
        {cardData.map((card, index) => (
          <ChakraLink
            asChild
            key={index}
            minH="200px"
            minW="200px"
            maxW="300px"
            _hover={{ textDecoration: "none" }}
          >
            <Link to="/ai-office">
              <Card.Root w="100%" h="100%">
                {/* Wrap Chakra Link with RouterLink for routing */}

                {/* Card Icon */}
                <Box display="flex" justifyContent="center" mt={4}>
                  {card.icon}
                </Box>
                <CardBody>
                  <Text fontSize="xl" fontWeight="bold" textAlign="center">
                    {card.title}
                  </Text>
                  <Text mt={2} textAlign="center">
                    {card.description}
                  </Text>
                </CardBody>
              </Card.Root>
            </Link>
          </ChakraLink>
        ))}
      </SimpleGrid>
    </Box>
  );
}
