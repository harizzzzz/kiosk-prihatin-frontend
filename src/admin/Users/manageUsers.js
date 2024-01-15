import React, { useEffect, useState } from "react";
import {
  Link as ReactRouterLink,
  useParams,
  useNavigate,
} from "react-router-dom";
import { GrAdd } from "react-icons/gr";
import { FiMinus } from "react-icons/fi";

import {
  ChakraProvider,
  Flex,
  Box,
  Heading,
  Button,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Image,
  Stack,
  Input,
  Center,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { CiFilter } from "react-icons/ci";

export default function ManageUsers() {
  const [student, setStudent] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    admin_id: "",
    user_id: "",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const toast = useToast();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/getAllStudent")
      .then(function (response) {
        setStudent(response.data);
        setFilteredStudents(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    // Update the filtered students whenever the searchQuery changes
    const filtered = student.filter(
      (student) =>
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.student_id.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredStudents(filtered);
  }, [searchQuery, student]);

  const handleDelete = (userId) => {
    // Set the user_id in formData when the delete button is clicked
    setFormData((prevFormData) => ({
      ...prevFormData,
      user_id: userId,
      admin_id: localStorage.getItem("username"),
    }));

    onOpen();
  };

  const confirmDelete = () => {
    axios
      .post("http://localhost:3000/users/delete", formData, {
        headers: { "Content-Type": "application/json" },
      })
      .then(function (response) {
        if (response.status === 201) {
          try {
            toast({
              title: "Successful",
              description: `User is successfully deleted !`,
              status: "success",
              duration: 5000,
              isClosable: true,
              onClose: () => {
                window.location.reload();
              },
            });
            setTimeout(() => {
              // Redirect to another page after the delay
              window.location.reload();
            }, 3000);
          } catch (e) {
            console.log(e);
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    onClose();
  };
  return (
    <ChakraProvider>
      <Center m={5}>
        <Heading fontFamily="monospace">Manage Users</Heading>
      </Center>
      <Flex direction="column" align="center">
        <Box mb={4}>
          <Stack direction="row">
            <Input
              textAlign="center"
              w="500px"
              type="text"
              placeholder="Search by name,student id"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <CiFilter size={30} />
          </Stack>
        </Box>
        <TableContainer>
          <Table variant="striped" borderWidth={1}>
            <Thead>
              <Th>User ID</Th>
              <Th>Student ID</Th>
              <Th>Name</Th>
              <Th>Action</Th>
            </Thead>
            <Tbody>
              {filteredStudents.map((user, index) => (
                <Tr key={index}>
                  <Td>{user.id}</Td>
                  <Td>{user.student_id}</Td>
                  <Td>{user.name}</Td>
                  <Td>
                    <Button
                      colorScheme="red"
                      onClick={() => handleDelete(user.student_id)}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete User
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  colorScheme="red"
                  onClick={() => {
                    confirmDelete();
                  }}
                  ml={3}
                >
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Flex>
    </ChakraProvider>
  );
}
