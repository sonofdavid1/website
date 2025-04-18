import { Box, Container, HStack, Button, useColorMode, useColorModeValue, IconButton, useDisclosure, VStack, CloseButton, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';

const MotionBox = motion(Box);

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const navItems = [
    { label: 'Home', to: 'hero' },
    { label: 'About', to: 'about' },
    { label: 'Features', to: 'features' },
    { label: 'Contact', to: 'contact' },
  ];

  return (
    <Box
      as="nav"
      position="fixed"
      w="100%"
      zIndex={1000}
      bg={bgColor}
      boxShadow="sm"
      borderBottom="1px"
      borderColor={borderColor}
    >
      <Container maxW="container.xl" py={3}>
        <HStack justify="space-between" align="center">
          <Text
            fontSize="xl"
            fontWeight="bold"
            color={textColor}
          >
            Star Health Insurance Agent
          </Text>

          {/* Desktop Navigation */}
          <HStack
            spacing={8}
            display={{ base: 'none', md: 'flex' }}
          >
            <HStack as="nav" spacing={4}>
              {navItems.map((item) => (
                <Button
                  key={item.to}
                  as={ScrollLink}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  variant="ghost"
                  color={textColor}
                  cursor="pointer"
                >
                  {item.label}
                </Button>
              ))}
            </HStack>
            <IconButton
              aria-label="Toggle color mode"
              icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
              onClick={toggleColorMode}
              variant="ghost"
              color={textColor}
            />
          </HStack>

          {/* Mobile Navigation Toggle */}
          <HStack display={{ base: 'flex', md: 'none' }}>
            <IconButton
              aria-label="Toggle color mode"
              icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
              onClick={toggleColorMode}
              variant="ghost"
              color={textColor}
            />
            <IconButton
              aria-label="Open menu"
              icon={<FaBars />}
              onClick={onToggle}
              variant="ghost"
              color={textColor}
            />
          </HStack>
        </HStack>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <VStack
            display={{ base: 'flex', md: 'none' }}
            py={4}
            spacing={4}
            align="stretch"
          >
            {navItems.map((item) => (
              <Button
                key={item.to}
                as={ScrollLink}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                variant="ghost"
                color={textColor}
                w="100%"
                onClick={onToggle}
              >
                {item.label}
              </Button>
            ))}
          </VStack>
        )}
      </Container>
    </Box>
  );
};

export default Navbar; 