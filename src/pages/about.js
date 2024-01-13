import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  ChakraProvider,
} from "@chakra-ui/react";
import NavBar from "./utility/Navbar";

function About() {
 const logos = [
    "https://cdn.uitm.edu.my/gambar_warga/801ed7868419ff1c56d36b7bbd41be8c.png",
    "https://cdn.uitm.edu.my/gambar_warga/ee178a64c71f6b1814f68efc28deb62e.png", // Replace this line with your specific image URL
    "https://cdn.uitm.edu.my/gambar_warga/efb65c9cfd12b2883857ff759872e2bd.png",
    // Add more logo URLs as needed
  ];

 

  return (
    <Box>
      <ChakraProvider>
        <NavBar />
      </ChakraProvider>

      {/* Main Content */}
      <Box>
        {/* About Section 1 */}
        <Box py="20" bg="#FFFAF0" color="#333" textAlign="center">
          <Box maxW="4xl" mx="auto">
            <Heading as="h2" size="xl" mb="4" color="#333">
              Welcome to Kiosk Prihatin 🌟
            </Heading>
            <Text fontSize="lg" mb="6" color="#555">
              Join us in spreading love and care through our community-driven initiative. Discover essential services and information tailored for everyone!
            </Text>
          </Box>
        </Box>

        {/* About Section 2 */}
        <Box py="12" bg="#F0F8FF" textAlign="center">
          <Box maxW="3xl" mx="auto">
            <Heading as="h2" size="xl" mb="4" color="#333">
              Meet Our Awesome Team 😎
            </Heading>
            <Text fontSize="lg" mb="6" color="#555">
              Get to know the superheroes behind Kiosk Prihatin, passionately working to make a positive impact!
            </Text>
            <Flex justifyContent="space-around">
              {/* Team Member 1 */}
              <Box
                maxW="300px"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Image src={`${logos}`} alt="Team Member 1" />
              </Box>
              {/* Team Member 2 */}
              <Box
                maxW="300px"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Image src="assets/images/3.png" alt="Team Member 2" />
              </Box>
              {/* Team Member 3 */}
              <Box
                maxW="300px"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Image src="/path/to/your/image3.jpg" alt="Team Member 3" />
              </Box>
            </Flex>
          </Box>
        </Box>

        {/* Commitment Section */}
        <Box py="12" bg="#FFFAF0" color="#333" textAlign="center" border="1px solid #e2e8f0" borderRadius="lg">
          <Box maxW="3xl" mx="auto">
            <Heading as="h2" size="xl" mb="6" color="#333">
              Our Commitment 🌈
            </Heading>
            <Box textAlign="left">
              {/* Commitment Point 1 */}
              <Text fontSize="xl" mb="6" fontWeight="semibold" color="#555">
                - Accessibility 🌍
              </Text>
              <Text fontSize="lg" mb="8" lineHeight="tall" color="#666">
                Ensuring that essential resources and services are accessible to all, regardless of circumstance.
              </Text>
              {/* Commitment Point 2 */}
              <Text fontSize="xl" mb="6" fontWeight="semibold" color="#555">
                - Collaboration 🤝
              </Text>
              <Text fontSize="lg" mb="8" lineHeight="tall" color="#666">
                Partnering with local organizations and communities to foster collective impact.
              </Text>
              {/* Commitment Point 3 */}
              <Text fontSize="xl" mb="6" fontWeight="semibold" color="#555">
                - Innovation 🚀
              </Text>
              <Text fontSize="lg" mb="8" lineHeight="tall" color="#666">
                Constantly seeking innovative approaches to address evolving community needs.
              </Text>
            </Box>
          </Box>
        </Box>

        {/* Partnerships Section */}
        <Box py="12" bg="#F0F8FF" textAlign="center">
          <Box maxW="3xl" mx="auto">
            <Heading as="h2" size="xl" mb="4" color="#333">
              Our Amazing Partnerships 🤝
            </Heading>
            <Text fontSize="lg" mb="6" color="#555">
              Explore our collaborations and partnerships with organizations dedicated to social welfare.
            </Text>
            <Flex justifyContent="center" flexWrap="wrap" mb="8">
              {/* Partner Logo 1 */}
              <Image
                src="/partner_logo1.png"
                alt="Partner Logo 1"
                w="150px"
                h="auto"
                mx="4"
              />
              {/* Partner Logo 2 */}
              <Image
                src="/partner_logo2.png"
                alt="Partner Logo 2"
                w="150px"
                h="auto"
                mx="4"
              />
              {/* Add more partner logos or details */}
            </Flex>
            <Text fontSize="lg" color="#555">
              Partnering with various NGOs, local businesses, and government agencies allows us to expand our reach and create a larger impact.
            </Text>
          </Box>
        </Box>

        {/* Footer */}
        <Box bg="#FFFAF0" color="#333" py="4" textAlign="center">
          <Text>&copy; 2024 Kiosk Prihatin. All rights reserved. Spread Love! ❤️</Text>
          <Text mt="2" fontSize="sm">
            Crafted with ❤️ by HarizStyle 😊
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
