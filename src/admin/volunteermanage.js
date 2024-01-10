import React, { useState } from 'react';
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
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { MdAdd } from 'react-icons/md';

const VolunteerManagement = () => {
  const [volunteers, setVolunteers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
    // Add more volunteer data as needed
  ]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialVolunteerState = { name: '', email: '', phone: '' };
  const [newVolunteer, setNewVolunteer] = useState(initialVolunteerState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewVolunteer({ ...newVolunteer, [name]: value });
  };

  const handleAddVolunteer = () => {
    const newVolunteerItem = { ...newVolunteer, id: volunteers.length + 1 };
    setVolunteers([...volunteers, newVolunteerItem]);
    setNewVolunteer(initialVolunteerState);
    onClose();
  };

  return (
    <Box p="6">
      <Heading as="h1" size="lg" mb="6">
        Volunteer Management
      </Heading>
      <Button colorScheme="blue" leftIcon={<MdAdd />} onClick={onOpen} mb="4">
        Add Volunteer
      </Button>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Phone</Th>
            {/* Add more table headers as needed */}
          </Tr>
        </Thead>
        <Tbody>
          {volunteers.map((volunteer) => (
            <Tr key={volunteer.id}>
              <Td>{volunteer.name}</Td>
              <Td>{volunteer.email}</Td>
              <Td>{volunteer.phone}</Td>
              {/* Add more table cells as needed */}
            </Tr>
          ))}
        </Tbody>
      </Table>

      {/* Modal for adding volunteers */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Volunteer</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb="4">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={newVolunteer.name}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mb="4">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={newVolunteer.email}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mb="4">
              <FormLabel>Phone</FormLabel>
              <Input
                type="text"
                name="phone"
                value={newVolunteer.phone}
                onChange={handleInputChange}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={handleAddVolunteer}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default VolunteerManagement;
