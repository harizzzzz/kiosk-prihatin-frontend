import { Box, Heading, Text, Button, Divider } from '@chakra-ui/react';

function AfterDonation({ donationAmount, donationDate }) {
  return (
    <StyledAfterDonation
      donationAmount={donationAmount}
      donationDate={donationDate}
    />
  );
}

function StyledAfterDonation({ donationAmount, donationDate }) {
  return (
    <Box
      p={8}
      bgGradient="linear(to-b, teal.400, teal.600)"
      borderRadius="xl"
      boxShadow="0 4px 12px rgba(0, 0, 0, 0.2)"
      color="white"
      textAlign="center"
      maxW="md"
      mx="auto"
    >
      <Heading as="h2" size="xl" mb={4}>
        Donation Successful!
      </Heading>
      <Text fontSize="lg" fontWeight="bold" mb={4}>
        Thank you for your generous donation of ${donationAmount.toFixed(2)}.
      </Text>
      <Text fontSize="md" mb={6}>
        Your support means a lot to us and will make a real difference.
      </Text>
      <Button
        colorScheme="teal"
        size="lg"
        px={8}
        py={4}
        _hover={{ bg: 'teal.500' }}
      >
        Share on Social Media
      </Button>
      <Divider my={6} borderColor="teal.300" />
      <Text fontSize="sm">
        Transaction ID: #123456<br />
        Date: {donationDate}
      </Text>
    </Box>
  );
}

export default AfterDonation;
