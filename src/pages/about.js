import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Link,
  Divider,
  ChakraProvider,
} from "@chakra-ui/react";
import NavBar from "./utility/Navbar";

function About() {
  const logo =
    "https://global.bohtea.com/wp-content/uploads/2019/12/TeaPotbags120_Malay_with-potbags.jpg";
  return (
    <Box>
      <ChakraProvider>
        <NavBar />
      </ChakraProvider>

      {/* Main Content */}
      <Box>
        {/* About Section 1 */}
        <Box py="20" bg="white" color="black" textAlign="center">
          <Box maxW="4xl" mx="auto">
            <Heading as="h2" size="xl" mb="4" color="black.500">
              About Kiosk Prihatin
            </Heading>
            <Text fontSize="lg" mb="6">
              Kiosk Prihatin is a community-driven initiative aimed at providing
              essential services and information to those in need. Our mission
              is to create an inclusive environment where everyone can easily
              access important services and information. Through partnerships
              and community engagement, we strive to make a positive impact and
              uplift lives.
            </Text>
          </Box>
        </Box>

        {/* About Section 2 */}
        <Box py="12" bg="gray.100" textAlign="center">
          <Box maxW="3xl" mx="auto">
            <Heading as="h2" size="xl" mb="4" color="black.500">
              Our Team
            </Heading>
            <Text fontSize="lg" mb="6">
              Meet the dedicated team behind Kiosk Prihatin, working tirelessly
              to serve the community.
            </Text>
            <Flex justifyContent="space-around">
              <Box
                maxW="300px"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Image src={`${logo}`} alt="Dan Abramov" />
              </Box>
              <Box
                maxW="300px"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Image src="/path/to/your/image2.jpg" alt="Image 2" />
              </Box>
              <Box
                maxW="300px"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Image src="/path/to/your/image3.jpg" alt="Image 3" />
              </Box>
            </Flex>
          </Box>
        </Box>

        {/* Additional Section 1 */}
        <Box py="12" bg="white" color="black" textAlign="center">
          <Box maxW="3xl" mx="auto">
            <Heading as="h2" size="xl" mb="6" color="black">
              Our Commitment
            </Heading>
            <Box textAlign="left">
              <Text fontSize="xl" mb="6" fontWeight="semibold" color="gray.700">
                - Accessibility
              </Text>
              <Text fontSize="lg" mb="8" lineHeight="tall">
                Ensuring that essential resources and services are accessible to
                all, regardless of circumstance.
              </Text>
              <Text fontSize="xl" mb="6" fontWeight="semibold" color="gray.700">
                - Collaboration
              </Text>
              <Text fontSize="lg" mb="8" lineHeight="tall">
                Partnering with local organizations and communities to foster
                collective impact.
              </Text>
              <Text fontSize="xl" mb="6" fontWeight="semibold" color="gray.700">
                - Innovation
              </Text>
              <Text fontSize="lg" mb="8" lineHeight="tall">
                Constantly seeking innovative approaches to address evolving
                community needs.
              </Text>
            </Box>
          </Box>
        </Box>

        {/* Additional Section 2 */}
        <Box py="12" bg="gray.100" textAlign="center">
          <Box maxW="3xl" mx="auto">
            <Heading as="h2" size="xl" mb="4" color="black.500">
              Partnerships
            </Heading>
            <Text fontSize="lg" mb="6">
              Explore our collaborations and partnerships with organizations
              dedicated to social welfare.
            </Text>
            <Flex justifyContent="center" flexWrap="wrap" mb="8">
              <Image
                src="/partner_logo1.png"
                alt="Partner Logo 1"
                w="150px"
                h="auto"
                mx="4"
              />
              <Image
                src="/partner_logo2.png"
                alt="Partner Logo 2"
                w="150px"
                h="auto"
                mx="4"
              />
              {/* Add more partner logos or details */}
            </Flex>
            <Text fontSize="lg">
              Partnering with various NGOs, local businesses, and government
              agencies allows us to expand our reach and create a larger impact.
            </Text>
          </Box>
        </Box>
      </Box>

      {/* Footer */}
      <Box bg="white.500" color="black" py="4" textAlign="center">
        <Text>&copy; 2024 Kiosk Prihatin. All rights reserved.</Text>
        <Text mt="2" fontSize="sm">
          Designed with ❤️ by HarizStyle{" "}
        </Text>
      </Box>
    </Box>
  );
}

export default About;
