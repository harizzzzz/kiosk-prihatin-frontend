import { Box, Heading, Text, Button, Link, Center } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Elements({ donorName, organizationName }) {
  return (
    <Center h="100vh">
      <Box
        p={10}
        bgGradient="linear(to-b, #4CAF50, #388E3C)"
        borderRadius="xl"
        boxShadow="0 4px 12px rgba(0, 0, 0, 0.2)"
        color="white"
        textAlign="center"
        maxW="md"
      >
        <Heading as="h2" size="2xl" mb={4}>
          Thank You, {donorName}!
        </Heading>
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Your donation  is greatly appreciated.
        </Text>
        <Text fontSize="lg" mb={6}>
          Your support helps us make a real difference. Thank you for your generosity.
        </Text>
        
        <Link as={RouterLink} to="/">
          <Button
            width="100%"
            colorScheme="green"
            size="lg"
            px={8}
            py={4}
            fontWeight="bold"
            _hover={{ bg: '#43A047' }}
            _focus={{ boxShadow: '0 0 0 3px #6ED47E' }}
          >
            Home
          </Button>
        </Link>
      </Box>
    </Center>
  );
}

export default Elements;
