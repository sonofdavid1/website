import { Box, Container, Text, Flex, IconButton, useColorMode } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      as="footer"
      bg={colorMode === 'light' ? 'gray.800' : 'gray.900'}
      color="white"
      py={10}
    >
      <Container maxW="container.xl">
        <MotionFlex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <MotionBox
            mb={{ base: 6, md: 0 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              Star Health Insurance
            </Text>
            <Text color="gray.400">
              Your trusted health insurance partner in Akola
            </Text>
          </MotionBox>

          <MotionFlex
            gap={4}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <IconButton
              as="a"
              href="#"
              aria-label="Facebook"
              icon={<FaFacebook />}
              variant="ghost"
              color="white"
              _hover={{ bg: 'facebook.500', color: 'white' }}
              size="lg"
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter />}
              variant="ghost"
              color="white"
              _hover={{ bg: 'twitter.500', color: 'white' }}
              size="lg"
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Instagram"
              icon={<FaInstagram />}
              variant="ghost"
              color="white"
              _hover={{ bg: 'pink.500', color: 'white' }}
              size="lg"
            />
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              variant="ghost"
              color="white"
              _hover={{ bg: 'linkedin.500', color: 'white' }}
              size="lg"
            />
            <IconButton
              as="a"
              href="https://wa.me/your-number"
              target="_blank"
              aria-label="WhatsApp"
              icon={<FaWhatsapp />}
              variant="ghost"
              color="white"
              _hover={{ bg: 'whatsapp.500', color: 'white' }}
              size="lg"
            />
          </MotionFlex>
        </MotionFlex>

        <MotionBox
          mt={8}
          pt={8}
          borderTop="1px"
          borderColor="gray.700"
          textAlign="center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Text color="gray.400">
            &copy; {new Date().getFullYear()} Star Health Insurance Agent. All rights reserved.
          </Text>
          <Text color="gray.500" fontSize="sm" mt={2}>
            Designed with ❤️ for your health and well-being
          </Text>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Footer; 