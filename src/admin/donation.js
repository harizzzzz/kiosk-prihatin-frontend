import React, { useState } from "react";
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
  ChakraProvider,
} from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import NavBarAdmin from "../pages/utility/NavbarAdmin";

const DonationManagement = () => {
  const [donations, setDonations] = useState([
    { id: 1, amount: 100, donor: "John Doe", email: "john@example.com" },
    { id: 2, amount: 50, donor: "Jane Smith", email: "jane@example.com" },
    // Add more donation data as needed
  ]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialDonationState = { amount: "", donor: "", email: "" };
  const [newDonation, setNewDonation] = useState(initialDonationState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDonation({ ...newDonation, [name]: value });
  };

  const handleAddDonation = () => {
    const newDonationItem = { ...newDonation, id: donations.length + 1 };
    setDonations([...donations, newDonationItem]);
    setNewDonation(initialDonationState);
    onClose();
  };

  return (
    <ChakraProvider>
      <Box pb={10}>
        {" "}
        <NavBarAdmin />
      </Box>
      <Box
        p="6"
        bgGradient="linear(to-r, orange.400, yellow.300)"
        color="white"
        textAlign="center"
        borderRadius="xl"
        boxShadow="lg"
        minH="100vh"
      >
        <Heading as="h1" size="lg" mb="6">
          Donation Management
        </Heading>
        <Button colorScheme="blue" leftIcon={<MdAdd />} onClick={onOpen} mb="4">
          Add Donation
        </Button>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Amount</Th>
              <Th>Donor</Th>
              <Th>Email</Th>
              {/* Add more table headers as needed */}
            </Tr>
          </Thead>
          <Tbody>
            {donations.map((donation) => (
              <Tr key={donation.id}>
                <Td>{donation.amount}</Td>
                <Td>{donation.donor}</Td>
                <Td>{donation.email}</Td>
                {/* Add more table cells as needed */}
              </Tr>
            ))}
          </Tbody>
        </Table>

        {/* Modal for adding donations */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Donation</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl mb="4">
                <FormLabel>Amount</FormLabel>
                <Input
                  type="number"
                  name="amount"
                  value={newDonation.amount}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl mb="4">
                <FormLabel>Donor</FormLabel>
                <Input
                  type="text"
                  name="donor"
                  value={newDonation.donor}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl mb="4">
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={newDonation.email}
                  onChange={handleInputChange}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" onClick={handleAddDonation}>
                Add
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </ChakraProvider>
  );
};

export default DonationManagement;
