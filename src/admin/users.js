import React from 'react';
import {
  Box,
  Heading,
  Stack,
  Text,
  Avatar,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';

const UsersList = ({ users }) => {
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box p="6">
      <Heading as="h1" size="lg" mb="6">
        Users List
      </Heading>
      <Stack spacing="4">
        {users && users.length > 0 ? (
          users.map((user) => (
            <Box key={user.id} bg="white" p="4" boxShadow="md" borderRadius="md">
              <Stack direction="row" align="center" spacing="4">
                <Avatar name={user.name} src={user.avatar} />
                <Stack>
                  <Text fontWeight="bold">{user.name}</Text>
                  <Text>{user.email}</Text>
                  {/* Add more user details as needed */}
                </Stack>
              </Stack>
              <Divider my="3" borderColor={borderColor} />
              {/* Additional user information or actions can be added here */}
            </Box>
          ))
        ) : (
          <Text>No users available</Text>
        )}
      </Stack>
    </Box>
  );
};

export default UsersList;
