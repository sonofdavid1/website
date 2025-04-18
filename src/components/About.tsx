import { Box, Container, Heading, Text, SimpleGrid, VStack, Icon, useColorModeValue, Stat, StatLabel, StatNumber, StatHelpText, Image, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaHospital, FaUserFriends, FaHandshake, FaChartLine } from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

const stats = [
  {
    label: 'Network Hospitals',
    value: '10,000+',
    icon: FaHospital,
    description: 'Across India',
  },
  {
    label: 'Happy Customers',
    value: '50,000+',
    icon: FaUserFriends,
    description: 'Served in Akola',
  },
  {
    label: 'Years of Experience',
    value: '15+',
    icon: FaHandshake,
    description: 'In Insurance',
  },
  {
    label: 'Claim Settlement',
    value: '98%',
    icon: FaChartLine,
    description: 'Success Rate',
  },
];

const About = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const headingColor = useColorModeValue('gray.800', 'white');
  const statBgColor = useColorModeValue('white', 'gray.800');
  const statBorderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      as="section"
      id="about"
      py={20}
      bg={bgColor}
    >
      <Container maxW="container.xl">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          mb={12}
          textAlign="center"
        >
          <Heading
            mb={4}
            color={headingColor}
            size="xl"
          >
            About Star Health Insurance
          </Heading>
          <Text color={textColor} maxW="2xl" mx="auto">
            Your trusted health insurance partner in Akola, providing comprehensive coverage and exceptional service for over 15 years.
          </Text>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} mb={16}>
          {stats.map((stat, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <VStack
                p={6}
                bg={statBgColor}
                borderRadius="xl"
                boxShadow="lg"
                borderWidth="1px"
                borderColor={statBorderColor}
                spacing={4}
              >
                <Icon as={stat.icon} w={10} h={10} color="brand.500" />
                <Stat>
                  <StatLabel color={textColor}>{stat.label}</StatLabel>
                  <StatNumber color={headingColor}>{stat.value}</StatNumber>
                  <StatHelpText color={textColor}>{stat.description}</StatHelpText>
                </Stat>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          textAlign="center"
        >
          <Heading
            mb={4}
            color={headingColor}
            size="lg"
          >
            Why Choose Us?
          </Heading>
          <Text color={textColor} maxW="3xl" mx="auto">
            As your dedicated Star Health Insurance agent in Akola, we provide personalized service, expert guidance, and quick claim settlement. Our team is committed to ensuring you get the best health insurance coverage tailored to your needs.
          </Text>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default About; 