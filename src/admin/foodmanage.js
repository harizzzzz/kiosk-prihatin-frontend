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

const FoodManagement = () => {
  const [foods, setFoods] = useState([
    { id: 1, name: 'Biskut', category: 'Crackers' },
    { id: 2, name: 'Maggi', category: 'Fast Food' },
    // Add more food items as needed
  ]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialFoodState = { name: '', category: '' };
  const [newFood, setNewFood] = useState(initialFoodState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFood({ ...newFood, [name]: value });
  };

  const handleAddFood = () => {
    const newFoodItem = { ...newFood, id: foods.length + 1 };
    setFoods([...foods, newFoodItem]);
    setNewFood(initialFoodState);
    onClose();
  };

  return (
    <Box p="6">
      <Heading as="h1" size="lg" mb="6">
        Food Management
      </Heading>
      <Button colorScheme="blue" leftIcon={<MdAdd />} onClick={onOpen} mb="4">
        Add Food
      </Button>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Category</Th>
            {/* Add more table headers as needed */}
          </Tr>
        </Thead>
        <Tbody>
          {foods.map((food) => (
            <Tr key={food.id}>
              <Td>{food.name}</Td>
              <Td>{food.category}</Td>
              {/* Add more table cells as needed */}
            </Tr>
          ))}
        </Tbody>
      </Table>

      {/* Modal for adding food */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Food</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb="4">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={newFood.name}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mb="4">
              <FormLabel>Category</FormLabel>
              <Input
                type="text"
                name="category"
                value={newFood.category}
                onChange={handleInputChange}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={handleAddFood}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default FoodManagement;
