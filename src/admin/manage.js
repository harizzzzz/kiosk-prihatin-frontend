
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  IconButton,
  useToast,
} from '@chakra-ui/react';
import { MdEdit, MdDelete } from 'react-icons/md';

const UserManagement = () => {
  const toast = useToast();

  // Sample user data (replace this with actual user data from your backend)
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    // Add more user objects as needed
  ];

  const handleEdit = (userId) => {
    // Replace this with your edit user functionality
    toast({
      title: `Edit user with ID ${userId}`,
      status: 'info',
      duration: 3000,
      isClosable: true,
    });
  };

  const handleDelete = (userId) => {
    // Replace this with your delete user functionality
    toast({
      title: `Delete user with ID ${userId}`,
      status: 'error',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box p="6">
      <Heading as="h1" size="lg" mb="6">
        User Management
      </Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Role</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr key={user.id}>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td>{user.role}</Td>
              <Td>
                <IconButton
                  icon={<MdEdit />}
                  colorScheme="blue"
                  aria-label="Edit"
                  onClick={() => handleEdit(user.id)}
                  mr="2"
                />
                <IconButton
                  icon={<MdDelete />}
                  colorScheme="red"
                  aria-label="Delete"
                  onClick={() => handleDelete(user.id)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default UserManagement;
