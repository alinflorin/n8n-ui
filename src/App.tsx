import { Outlet } from "react-router";
import { Box, Flex } from "@chakra-ui/react";
import Footer from "./components/Footer";

function App() {
  return (
    <Flex direction="column" h="100%" minH="100vh">
      <Box flex="auto" overflow="auto" minH={0}>
        <Outlet />
      </Box>
      <Footer />
    </Flex>
  );
}

export default App;
