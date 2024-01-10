import {
  Box,
  Heading,
  Text,
  Button,
  Grid,
  GridItem,
  Image,
  VStack,
  Divider,
  Stack,
  SimpleGrid,
  Flex,
  ChakraProvider,
  Spacer,
} from "@chakra-ui/react";

import NavBar from "./utility/Navbar";

function Index() {
  return (
    <Box>
      <ChakraProvider>
        <NavBar />
      </ChakraProvider>

      <Box bg="white.500" color="black" py="20" textAlign="center">
        <Heading as="h1" size="2xl" mb="4">
          Welcome to Kiosk Prihatin
        </Heading>
        <Text fontSize="xl" mb="8">
          Empowering Communities, Enriching Lives
        </Text>
        <Button colorScheme="teal" size="lg">
          Get Started
        </Button>
      </Box>

      <VStack spacing={5} mt={8} align="center">
        <Box
          bg="white"
          borderRadius="2xl"
          boxShadow="lg"
          p={10}
          textAlign="center"
          color="black"
          maxW="6xl"
        >
          <Heading as="h2" size="xl" mb={4}>
            About Us
          </Heading>
          <Text fontSize="lg">
            Kiosk Prihatin stands as a beacon of hope, a community-driven
            initiative committed to breaking barriers and fostering empowerment
            within societies. Founded on the belief that every individual
            deserves access to essential resources, education, and support, we
            relentlessly strive to bridge the gaps that hinder progress.
          </Text>
        </Box>

        <Divider w="80%" />

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} width="80%">
          <Box
            bg="white"
            borderRadius="xl"
            boxShadow="md"
            p="6"
            textAlign="center"
          >
            <Heading as="h2" size="lg" mb="4">
              Our Mission
            </Heading>
            <Text fontSize="md">
              At Kiosk Prihatin, we're dedicated to ensuring every community has
              access to vital resources and support. Through our kiosks, we aim
              to bridge gaps, empower individuals, and foster a more connected
              and resilient society.
            </Text>
            <Button colorScheme="blue" mt="4">
              Learn More
            </Button>
          </Box>
          <Box
            bg="white"
            borderRadius="xl"
            boxShadow="md"
            p="6"
            textAlign="center"
          >
            <Heading as="h2" size="lg" mb="4">
              Get Involved
            </Heading>
            <Text fontSize="md">
              Join us in making a difference! Volunteer your time, skills, or
              contribute to our cause. Together, we can create lasting positive
              changes within communities.
            </Text>
            <Button colorScheme="green" mt="4">
              Volunteer with us
            </Button>
          </Box>
          <Box
            bg="white"
            borderRadius="xl"
            boxShadow="md"
            p="6"
            textAlign="center"
          >
            <Heading as="h2" size="lg" mb="4">
              Support Us
            </Heading>
            <Text fontSize="md">
              Your contributions matter. Help us continue our mission by
              supporting our cause. Every donation makes a difference in
              empowering communities.
            </Text>
            <Button colorScheme="teal" mt="4">
              Donate Now
            </Button>
          </Box>
        </SimpleGrid>

        <Divider w="80%" />

        <Stack spacing={6} width="80%">
          <Heading as="h2" size="xl" textAlign="center">
            Our Impact
          </Heading>
          <Text fontSize="lg" textAlign="center">
            See how Kiosk Prihatin has made a difference in communities.
          </Text>
          <Flex justify="center" wrap="wrap">
            {/* Impact Cards */}
            <Box
              bg="white"
              borderRadius="xl"
              boxShadow="md"
              p="6"
              textAlign="center"
              mb="4"
              mx="2"
              w={{ base: "90%", sm: "45%", md: "30%" }}
            >
              <Heading as="h3" size="lg" mb="4">
                500+
              </Heading>
              <Text fontSize="md">Communities Supported</Text>
            </Box>
            <Box
              bg="white"
              borderRadius="xl"
              boxShadow="md"
              p="6"
              textAlign="center"
              mb="4"
              mx="2"
              w={{ base: "90%", sm: "45%", md: "30%" }}
            >
              <Heading as="h3" size="lg" mb="4">
                1000+
              </Heading>
              <Text fontSize="md">People Impacted</Text>
            </Box>
            <Box
              bg="white"
              borderRadius="xl"
              boxShadow="md"
              p="6"
              textAlign="center"
              mb="4"
              mx="2"
              w={{ base: "90%", sm: "45%", md: "30%" }}
            >
              <Heading as="h3" size="lg" mb="4">
                95%
              </Heading>
              <Text fontSize="md">Increase in Education Access</Text>
            </Box>
            {/* Add more impact cards */}
          </Flex>
        </Stack>

        <Divider w="80%" />

        <Box width="80%" textAlign="center">
          <Heading as="h2" size="xl" mb="4" color="black">
            Featured Events
          </Heading>

          <Box bg="white" borderRadius="xl" boxShadow="lg" p="6" mb="4">
            <Heading as="h3" size="lg" mb="2" color="black">
              Community Health Day
            </Heading>
            <Text fontSize="lg" color="gray.600" mb="4">
              Join us on February 10th for a day of free health check-ups,
              workshops, and fun activities for all ages.
            </Text>
            <Button
              colorScheme="green"
              variant="outline"
              borderColor="green.500"
            >
              Get Involved
            </Button>
          </Box>

          <Box bg="white" borderRadius="xl" boxShadow="lg" p="6" mb="4">
            <Heading as="h3" size="lg" mb="2" color="black">
              Education Fair 2024
            </Heading>
            <Text fontSize="lg" color="gray.600" mb="4">
              Explore educational opportunities and resources at our upcoming
              fair on March 20th. Don't miss it!
            </Text>
            <Button colorScheme="blue" variant="outline" borderColor="blue.500">
              Learn More
            </Button>
          </Box>

          {/* Add more event sections */}
        </Box>

        <Box bg="white.500" color="black" py="4" textAlign="center">
          <Text>&copy; 2024 Kiosk Prihatin. All rights reserved.</Text>
          <Text mt="2" fontSize="sm">
            Designed with ❤️ by HarizStyle
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}

export default Index;
