import React from 'react';
import { 
  Box, 
  Flex, 
  Heading, 
  Text, 
  FormControl, 
  FormLabel, 
  Input, 
  Button, 
  Grid, 
  GridItem,
  ChakraProvider,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';
import NavBar from "./utility/Navbar";
import { Link } from 'react-router-dom';

function Donate() {
  return (
    <Box>
      {/* Wrapping the entire component with ChakraProvider */}
      <ChakraProvider>
        <NavBar />
      </ChakraProvider>

      <Box maxW="m" mx="auto" mt="8" p="10" borderWidth="1px" borderRadius="lg" boxShadow="lg">
        <Flex direction="column" alignItems="center" mb="8">
          <Heading as="h2" size="xl" mb="4" textAlign="center" color="orange.400">
            🌟 Support Our Cause 🌟
          </Heading>
          <Text fontSize="lg" textAlign="center">
            Your contribution will help us continue our mission and make a positive impact in the community.
          </Text>
        </Flex>
        <Box bg="gray.20" p="6" mb="10" borderRadius="md" boxShadow="md">
          <Text fontSize="md" textAlign="center">
            Donating to Kiosk Prhatin is a direct investment in community empowerment and accessibility. Your contribution fuels easily accessible hubs that provide essential resources, education, and support, fostering self-sufficiency and resilience within communities. By supporting Kiosk Prhatin, you're not just giving aid; you're catalyzing social change, promoting inclusivity, and ensuring that every donation makes a lasting impact towards creating a more equitable and supportive society.
          </Text>
        </Box>
        <Heading as="h3" size="lg" mb="6" textAlign="center" color="orange.400">
          🌈 Donate to Support Us 🌈
        </Heading>
        <form>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            <GridItem colSpan={2}>
              <FormControl id="fullName" mb="4">
                <FormLabel>Full Name</FormLabel>
                <Input type="text" placeholder="Enter your full name" />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl id="email" mb="4">
                <FormLabel>Email Address</FormLabel>
                <Input type="email" placeholder="Enter your email address" />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl id="phone" mb="4">
                <FormLabel>Phone Number</FormLabel>
                <Input type="tel" placeholder="Enter your phone number" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl id="address" mb="4">
                <FormLabel>Address</FormLabel>
                <Input type="text" placeholder="Enter your address" />
              </FormControl>
            </GridItem>

            {/* Payment Method Selection */}
            <GridItem colSpan={2}>
              <FormControl id="paymentMethod" mb="4">
                <FormLabel>Select Payment Method</FormLabel>
                <RadioGroup defaultValue="creditCard">
                  <Stack spacing={2} direction="column">
                    <Radio value="creditCard">Credit Card</Radio>
                    <Radio value="paypal">PayPal</Radio>
                    <Radio value="venmo">E-Wallet</Radio>
                    {/* Add more payment options as needed */}
                  </Stack>
                </RadioGroup>
              </FormControl>
            </GridItem>

            {/* Payment Method Fields */}
            <GridItem colSpan={2}>
              <FormControl id="cardNumber" mb="4">
                <FormLabel>Card Number</FormLabel>
                <Input type="text" placeholder="Enter your card number" />
              </FormControl>
            </GridItem>
          </Grid>

          {/* Donate Button */}
          <Link to="/elements">
            <Button
              width="100%"
              display="block"
              colorScheme="green"
              size="lg"
              px={8}
              py={4}
              fontWeight="bold"
              _hover={{ bg: '#43A047' }}
              _focus={{ boxShadow: '0 0 0 3px #6ED47E' }}
            >
              🎉 Donate Now 🎉
            </Button>
          </Link>
        </form>
      </Box>
    </Box>
  );
}

export default Donate;
