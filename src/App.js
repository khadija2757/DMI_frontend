import React from 'react';
import Home from './pages/home';
import {
  ChakraProvider,
  extendTheme,
  Box,
  Container
} from '@chakra-ui/react';
import { Navbar } from './pages/home/Navbar';
import Utilisateurs from './pages/utilisateurs';
const colors = {
  vert: {
    900: '#118a7e',
    800: '#3baea0',
    700: '#93e4c1',
  },
}

const theme = extendTheme({ colors })
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box as="section" height="100vh" overflowY="auto">
        <Navbar />
        <Container
          pt={{
            base: '8',
            lg: '12',
          }}
          pb={{
            base: '12',
            lg: '24',
          }}
          minW="75%"
        >
          <Utilisateurs />
        </Container>
      </Box>

    </ChakraProvider>
  );
}

export default App;
