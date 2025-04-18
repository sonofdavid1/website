import { ChakraProvider, extendTheme, Box } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Contact from './components/Contact';

// Theme configuration
const theme = extendTheme({
  colors: {
    brand: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
    },
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Inter, sans-serif',
  },
  styles: {
    global: (props: any) => ({
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },
      html: {
        scrollBehavior: 'smooth',
      },
      body: {
        bg: props.colorMode === 'light' ? 'gray.50' : 'gray.900',
        color: props.colorMode === 'light' ? 'gray.800' : 'white',
        minHeight: '100vh',
        width: '100%',
        overflowX: 'hidden',
      },
      '#root': {
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
    }),
  },
  components: {
    Container: {
      baseStyle: {
        maxW: '1280px',
        px: { base: 4, md: 6, lg: 8 },
        mx: 'auto',
        width: '100%',
      },
    },
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'lg',
      },
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
          _active: {
            bg: 'brand.700',
          },
        },
        outline: {
          borderColor: 'brand.500',
          color: 'brand.500',
          _hover: {
            bg: 'brand.500',
            color: 'white',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
        },
      },
    },
  },
  breakpoints: {
    sm: '30em', // 480px
    md: '48em', // 768px
    lg: '62em', // 992px
    xl: '80em', // 1280px
    '2xl': '96em', // 1536px
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box
          as="div"
          minH="100vh"
          w="100%"
          display="flex"
          flexDirection="column"
          overflow="hidden"
        >
          <Navbar />
          <Box
            as="main"
            flex="1"
            w="100%"
            display="flex"
            flexDirection="column"
          >
            <Hero />
            <About />
            <Features />
            <Contact />
          </Box>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
