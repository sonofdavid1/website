import { Box, Container, Heading, Text, SimpleGrid, VStack, Icon, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaHospital, FaUserMd, FaAmbulance, FaFileMedical, FaHandshake, FaChartLine } from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

const features = [
  {
    icon: FaHospital,
    title: 'Cashless Hospitalization',
    description: 'Access to 10,000+ network hospitals across India for cashless treatment',
  },
  {
    icon: FaUserMd,
    title: 'Expert Medical Support',
    description: '24/7 access to medical experts and second opinion services',
  },
  {
    icon: FaAmbulance,
    title: 'Emergency Assistance',
    description: 'Quick ambulance services and emergency support when you need it most',
  },
  {
    icon: FaFileMedical,
    title: 'Comprehensive Coverage',
    description: 'Wide range of medical expenses covered including pre and post hospitalization',
  },
  {
    icon: FaHandshake,
    title: 'Personalized Service',
    description: 'Dedicated agent support for policy selection and claims assistance',
  },
  {
    icon: FaChartLine,
    title: 'Best Value Plans',
    description: 'Competitive premiums with maximum coverage benefits',
  },
];

const FeatureCard = ({ icon, title, description }: { icon: any; title: string; description: string }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const headingColor = useColorModeValue('gray.800', 'white');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <MotionBox
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <VStack
        spacing={4}
        p={6}
        bg={bgColor}
        borderRadius="lg"
        boxShadow="lg"
        borderWidth="1px"
        borderColor={borderColor}
        align="stretch"
        h="100%"
      >
        <Icon as={icon} w={8} h={8} color="brand.600" />
        <Text fontSize="xl" fontWeight="bold" color={headingColor}>
          {title}
        </Text>
        <Text color={textColor}>
          {description}
        </Text>
      </VStack>
    </MotionBox>
  );
};

const Features = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const headingColor = useColorModeValue('gray.800', 'white');

  return (
    <Box
      py={20}
      bg={bgColor}
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
            Why Choose Star Health Insurance?
          </Heading>
          <Text color={textColor} maxW="2xl" mx="auto">
            Experience the best in health insurance with comprehensive coverage and exceptional service
          </Text>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {features.map((feature, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureCard {...feature} />
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Features; 