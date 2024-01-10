import React from 'react';
import {
  Box,
  Heading,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Divider,
} from '@chakra-ui/react';

const ViewAnalytics = () => {
  // Mock analytics data (replace this with your actual analytics data)
  const analyticsData = {
    totalVisits: 1250,
    uniqueVisitors: 820,
    bounceRate: 25.5,
    conversionRate: 15.8,
  };

  return (
    <Box p="6">
      <Heading as="h1" size="lg" mb="6">
        View Analytics
      </Heading>
      <Flex justify="space-between" flexWrap="wrap">
        <StatBox label="Total Visits" value={analyticsData.totalVisits} />
        <StatBox label="Unique Visitors" value={analyticsData.uniqueVisitors} />
        <StatBox label="Bounce Rate" value={`${analyticsData.bounceRate}%`} />
        <StatBox label="Conversion Rate" value={`${analyticsData.conversionRate}%`} />
      </Flex>
      <Divider my="8" />
      {/* Add more analytics components or charts as needed */}
    </Box>
  );
};

const StatBox = ({ label, value }) => {
  return (
    <Stat flex="1" minW="250px" p="4" bg="white" borderRadius="lg" boxShadow="md" mb="4">
      <StatLabel>{label}</StatLabel>
      <StatNumber>{value}</StatNumber>
      {/* You can add more details or arrows for changes if needed */}
    </Stat>
  );
};

export default ViewAnalytics;
