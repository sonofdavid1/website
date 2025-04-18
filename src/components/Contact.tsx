import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  useToast,
  useColorModeValue,
  Select,
  HStack,
  Divider,
  Icon,
  Link,
  AspectRatio,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

// Google Apps Script deployment URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby4ElXaMdMvwo_4LDL_bd5Ojms28fHFNx2ZQvzIPIZleC542E9LNGQmrC5JjhOH6ng/exec';

const ContactInfo = () => {
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const headingColor = useColorModeValue('gray.800', 'white');

  return (
    <VStack align="start" spacing={6} height="100%">
      <VStack align="start" spacing={4} width="100%">
        <Heading size="md" color={headingColor}>Office Address</Heading>
        <VStack align="start" spacing={3}>
          <HStack spacing={3} alignItems="flex-start">
            <Icon as={FaMapMarkerAlt} color="brand.500" boxSize={5} mt={1} />
            <VStack align="start" spacing={1}>
              <Text color={headingColor} fontWeight="medium">Star Health & Allied Insurance Co.Ltd</Text>
              <Text color={textColor}>Shri Nagar, Old RTO Road,</Text>
              <Text color={textColor}>Opp Gajanan Maharaj Temple,</Text>
              <Text color={textColor}>Akola, Pin - 444001</Text>
            </VStack>
          </HStack>
          
          <Link href="tel:+919527607597" _hover={{ textDecoration: 'none' }}>
            <HStack spacing={3}>
              <Icon as={FaPhone} color="brand.500" boxSize={5} />
              <Text color={textColor}>+91 9527607597</Text>
            </HStack>
          </Link>

          <Link href="mailto:dhananjay.masane@starinsurance.in" _hover={{ textDecoration: 'none' }}>
            <HStack spacing={3}>
              <Icon as={FaEnvelope} color="brand.500" boxSize={5} />
              <Text color={textColor}>dhananjay.masane@starinsurance.in</Text>
            </HStack>
          </Link>
        </VStack>
      </VStack>

      <Box width="100%" flex="1">
        <Heading size="md" color={headingColor} mb={4}>Location Map</Heading>
        <VStack spacing={4} width="100%">
          <AspectRatio ratio={16 / 9} width="100%" borderRadius="xl" overflow="hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.8839227946644!2d77.02152380000001!3d20.690919488275984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDQxJzI3LjMiTiA3N8KwMDEnMjUuNCJF!5e0!3m2!1sen!2sin!4v1647887642343!5m2!1sen!2sin&markers=color:red%7C20.690919488275984,77.02371380248265"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Star Health Insurance Office Location"
            />
          </AspectRatio>
          <Link
            href="https://www.google.com/maps/dir/?api=1&destination=20.690919488275984,77.02371380248265"
            target="_blank"
            rel="noopener noreferrer"
            width="100%"
          >
            <Button
              leftIcon={<FaMapMarkerAlt />}
              colorScheme="brand"
              size="md"
              width="100%"
              _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
            >
              Get Directions to Our Office
            </Button>
          </Link>
          <Text fontSize="sm" color={textColor} textAlign="center">
            Click the button above to open Google Maps navigation
          </Text>
        </VStack>
      </Box>
    </VStack>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    preferredTime: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const headingColor = useColorModeValue('gray.800', 'white');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate required fields
      if (!formData.name || !formData.phone) {
        toast({
          title: 'Required fields missing',
          description: 'Please fill in your name and phone number',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
        return;
      }

      // Send data as URL parameters
      const url = `${GOOGLE_SCRIPT_URL}?` + new URLSearchParams({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        preferredTime: formData.preferredTime || 'Not specified',
        message: formData.message.trim() || 'No message'
      }).toString();

      // Send GET request
      await fetch(url, {
        method: 'GET',
        mode: 'no-cors',
      });

      // Show success message
      toast({
        title: 'Form submitted successfully',
        description: 'We will contact you shortly',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      // Reset form
      setFormData({
        name: '',
        phone: '',
        preferredTime: '',
        message: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: 'Submission failed',
        description: 'Please try again or contact us via WhatsApp',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Box
      as="section"
      id="contact"
      py={20}
      bg={useColorModeValue('gray.50', 'gray.900')}
      width="100%"
    >
      <Container
        maxW="container.xl"
        px={{ base: 4, md: 6, lg: 8 }}
      >
        <VStack spacing={12} width="100%" align="stretch">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            textAlign="center"
          >
            <Heading
              mb={4}
              color={headingColor}
              size="xl"
            >
              Get in Touch
            </Heading>
            <Text color={textColor} maxW="2xl" mx="auto">
              Have questions about health insurance? Fill out the form below and we'll get back to you as soon as possible.
            </Text>
          </MotionBox>

          <Box
            display="grid"
            gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr' }}
            gap={8}
            width="100%"
          >
            <MotionVStack
              spacing={8}
              as="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              bg={bgColor}
              p={{ base: 6, md: 8 }}
              borderRadius="xl"
              boxShadow="lg"
              borderWidth="1px"
              borderColor={borderColor}
              width="100%"
              height="fit-content"
            >
              <FormControl isRequired>
                <FormLabel>Full Name</FormLabel>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  focusBorderColor="brand.500"
                  size="lg"
                  disabled={isSubmitting}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  focusBorderColor="brand.500"
                  size="lg"
                  disabled={isSubmitting}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Preferred Call Time</FormLabel>
                <Select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  placeholder="Select preferred time"
                  focusBorderColor="brand.500"
                  size="lg"
                  disabled={isSubmitting}
                >
                  <option value="morning">Morning (9 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                  <option value="evening">Evening (4 PM - 7 PM)</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>Message</FormLabel>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any specific requirements or questions?"
                  rows={4}
                  focusBorderColor="brand.500"
                  size="lg"
                  disabled={isSubmitting}
                />
              </FormControl>

              <HStack spacing={4} width="100%">
                <Button
                  type="submit"
                  colorScheme="brand"
                  size="lg"
                  px={8}
                  w={{ base: 'full', sm: 'auto' }}
                  _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                  isLoading={isSubmitting}
                  loadingText="Submitting"
                >
                  Submit
                </Button>
                <Button
                  as="a"
                  href="https://wa.me/919527607597"
                  target="_blank"
                  leftIcon={<FaWhatsapp />}
                  colorScheme="whatsapp"
                  size="lg"
                  px={8}
                  w={{ base: 'full', sm: 'auto' }}
                  _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                  disabled={isSubmitting}
                >
                  WhatsApp
                </Button>
              </HStack>
            </MotionVStack>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Box
                bg={bgColor}
                p={{ base: 6, md: 8 }}
                borderRadius="xl"
                boxShadow="lg"
                borderWidth="1px"
                borderColor={borderColor}
                height="100%"
              >
                <ContactInfo />
              </Box>
            </MotionBox>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Contact; 