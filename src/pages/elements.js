import { Box, Heading, Text, Button, Link, Center, Icon } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaGift, FaHeart, FaSmile } from 'react-icons/fa';

function Elements({ donorName, organizationName }) {
  return (
    <Center h="100vh">
      <Box
        p={10}
        bgGradient="linear(to-b, #2ecc71, #27ae60)"
        borderRadius="xl"
        boxShadow="0 4px 12px rgba(0, 0, 0, 0.2)"
        color="white"
        textAlign="center"
        maxW="md"
        border="1px solid #2ecc71"
      >
        <Heading as="h2" size="2xl" mb={4} letterSpacing="tight">
          🌟 Thank You, {donorName}! 🌟
        </Heading>
        <Text fontSize="xl" fontWeight="semibold" mb={4}>
          🙏 Your donation is a powerful contribution. 🌈
        </Text>
        <Text fontSize="lg" mb={6}>
          🚀 Your support propels us forward. We deeply appreciate your generosity. 🌼
        </Text>

        <Link as={RouterLink} to="/">
          <Button
            width="100%"
            colorScheme="green"
            size="lg"
            px={8}
            py={4}
            fontWeight="bold"
            _hover={{ bg: '#218f5a' }}
            _focus={{ boxShadow: '0 0 0 3px #2ecc71' }}
          >
            Explore More 🌐
          </Button>
        </Link>
        <Text fontSize="2xl" mt={6}>
          🎉 Thank you for making the world a better place! 🌍✨
        </Text>

        <Box mt={8}>
          <Icon as={FaHeart} boxSize={8} color="red.500" mr={2} />
          <Icon as={FaSmile} boxSize={8} color="yellow.500" mx={2} />
          <Icon as={FaGift} boxSize={8} color="blue.500" ml={2} />
        </Box>
      </Box>
    </Center>
  );
}

export default Elements;
