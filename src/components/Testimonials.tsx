import { Box, Container, Heading, Text, SimpleGrid, VStack, Image, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Business Owner',
    image: '/images/client1.jpg',
    testimonial: 'As a Star Health Insurance agent, they helped my family choose the perfect health insurance plan. Their knowledge of Star Health products and prompt service made the entire process smooth.',
  },
  {
    name: 'Priya Patel',
    role: 'Teacher',
    image: '/images/client2.jpg',
    testimonial: 'I was confused about health insurance until I met this Star Health agent. They explained everything clearly and helped me select a plan that fits my budget and needs perfectly.',
  },
  {
    name: 'Amit Deshmukh',
    role: 'Senior Citizen',
    image: '/images/client3.jpg',
    testimonial: 'The Star Health senior citizen plan recommended by this agent has been a blessing. They made sure I understood all the benefits and have been very helpful with any queries.',
  },
];

const Testimonials = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const headingColor = useColorModeValue('gray.800', 'white');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      py={20}
      bg={useColorModeValue('gray.50', 'gray.900')}
    >
      <Container maxW="container.xl">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          textAlign="center"
          mb={12}
        >
          <Heading
            mb={4}
            color={headingColor}
            size="xl"
          >
            Client Experiences
          </Heading>
          <Text color={textColor} maxW="2xl" mx="auto">
            Hear from families who have trusted me as their Star Health Insurance agent for their health protection needs.
          </Text>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {testimonials.map((testimonial, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <VStack
                spacing={6}
                p={8}
                bg={bgColor}
                borderRadius="lg"
                boxShadow="lg"
                borderWidth="1px"
                borderColor={borderColor}
                align="stretch"
                h="100%"
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  borderRadius="full"
                  boxSize="120px"
                  objectFit="cover"
                  mx="auto"
                  fallbackSrc="https://via.placeholder.com/120x120"
                />
                <Text fontSize="lg" fontWeight="bold" textAlign="center" color={headingColor}>
                  {testimonial.name}
                </Text>
                <Text color="brand.600" textAlign="center">
                  {testimonial.role}
                </Text>
                <Text color={textColor} textAlign="center" fontStyle="italic">
                  "{testimonial.testimonial}"
                </Text>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Testimonials; 