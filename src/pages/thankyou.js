import { Box, Heading, Text, Button } from '@chakra-ui/react';

function ThankYou({ donorName, organizationName }) {
  return (
    <Box
      p={8}
      bgGradient="linear(to-b, #4CAF50, #388E3C)"
      borderRadius="xl"
      boxShadow="0 4px 12px rgba(0, 0, 0, 0.2)"
      color="white"
      textAlign="center"
      maxW="md"
      mx="auto"
    >
      <Heading as="h2" size="2xl" mb={4}>
        Thank You, {donorName}!
      </Heading>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Your donation to {organizationName} is greatly appreciated.
      </Text>
      <Text fontSize="lg" mb={6}>
        Your support helps us make a real difference. Thank you for your generosity.
      </Text>
      <Button
        colorScheme="green"
        size="lg"
        px={8}
        py={4}
        fontWeight="bold"
        _hover={{ bg: '#43A047' }}
        _focus={{ boxShadow: '0 0 0 3px #6ED47E' }}
      >
        Share Your Support
      </Button>
    </Box>
  );
}

export default ThankYou;
