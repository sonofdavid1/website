import { Box, Container, Heading, Text, Button, VStack, HStack, useColorModeValue, Image, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FaWhatsapp, FaPhone, FaArrowDown } from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

const Hero = () => {
  const bgGradient = useColorModeValue(
    'linear(to-r, rgba(255,247,237,0.9), rgba(251,146,60,0.9))',
    'linear(to-r, rgba(124,45,18,0.9), rgba(194,65,12,0.9))'
  );
  const textColor = useColorModeValue('gray.800', 'white');
  const buttonBg = useColorModeValue('brand.600', 'brand.400');
  const buttonHoverBg = useColorModeValue('brand.700', 'brand.300');

  return (
    <Box
      as="section"
      id="hero"
      position="relative"
      minH="100vh"
      pt="73px"
      overflow="hidden"
    >
      {/* Background Image */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgImage="url('/hero-banner.jpg')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        zIndex={-2}
      />

      {/* Gradient Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient={bgGradient}
        zIndex={-1}
      />

      <Container 
        maxW="container.xl" 
        h="100%" 
        position="relative"
        px={{ base: 4, md: 6, lg: 8 }}
      >
        <Flex
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
          align="center"
          h="100%"
          gap={8}
        >
          <Flex
            direction="column"
            justify="center"
            align="flex-start"
            flex="1"
          >
            <MotionVStack
              align="flex-start"
              spacing={6}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Heading
                as="h1"
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                color={textColor}
                lineHeight="1.2"
              >
                Secure Your Family's Health with{' '}
                <Text
                  as="span"
                  color="brand.500"
                  bgGradient="linear(to-r, brand.500, brand.600)"
                  bgClip="text"
                >
                  Star Health Insurance
                </Text>
              </Heading>

              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color={textColor}
                maxW="xl"
              >
                Get comprehensive health coverage with cashless hospitalization at 10,000+ network hospitals across India. Your trusted health insurance partner in Akola.
              </Text>

              <HStack 
                spacing={4} 
                pt={4}
                w="100%"
              >
                <Button
                  size="lg"
                  bg={buttonBg}
                  color="white"
                  _hover={{ bg: buttonHoverBg }}
                  rightIcon={<FaPhone />}
                  px={8}
                  as={ScrollLink}
                  to="contact"
                  smooth={true}
                  duration={500}
                  cursor="pointer"
                >
                  Get a Quote
                </Button>
                <Button
                  as="a"
                  href="https://wa.me/919876543210"
                  target="_blank"
                  size="lg"
                  variant="outline"
                  borderColor={buttonBg}
                  color={buttonBg}
                  _hover={{ bg: buttonBg, color: 'white' }}
                  leftIcon={<FaWhatsapp />}
                  px={8}
                >
                  Chat on WhatsApp
                </Button>
              </HStack>

              <MotionBox
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                display={{ base: 'none', md: 'block' }}
                pt={4}
              >
                <Button
                  variant="ghost"
                  color={textColor}
                  rightIcon={<FaArrowDown />}
                  as={ScrollLink}
                  to="about"
                  smooth={true}
                  duration={500}
                  cursor="pointer"
                >
                  Learn More
                </Button>
              </MotionBox>
            </MotionVStack>
          </Flex>

          <MotionBox
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            flex="1"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              borderRadius="full"
              overflow="hidden"
              boxShadow="2xl"
              maxW="300px"
              mb={6}
            >
              <Image
                src="/agent-profile.jpg"
                alt="Dhananjay Masane - Star Health Insurance Agent"
                w="100%"
                h="auto"
                objectFit="cover"
              />
            </Box>
            <VStack spacing={2} textAlign="center">
              <Heading size="lg" color={textColor}>Meet Your Agent</Heading>
              <Heading size="md" color="brand.500">Dhananjay Masane</Heading>
              <Text color={textColor} fontSize="lg">
                Your dedicated Star Health Insurance advisor in Akola
              </Text>
            </VStack>
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero; 