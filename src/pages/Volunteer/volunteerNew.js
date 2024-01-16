import React, { useEffect, useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
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
import theme from "../../theme";
import { format } from "date-fns";
import NavBar from "../utility/Navbar";
import imAvailable from "../../assets/images/available.png";
import imUnavailable from "../../assets/images/unavailable.png";

export default function Volunteers() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [volunteers, setVolunteers] = useState([]);
  const [Vol_id, setVol_id] = useState([]);
  const student_id = localStorage.getItem("username");
  useEffect(() => {
    fetchVolunteers();
  }, []);

  const toast = useToast();

  const cancelReg = async (e) => {
    // e.preventDefault();

    console.log(postData);

    try {
      const response = await fetch(
        "http://localhost:3000/volunteer/cancelRegistration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );

      if (response.ok) {
        try {
          toast({
            title: "Successful!",
            description: "You has unregistered from this volunteer session !",
            status: "success",
            duration: 5000,
            isClosable: true,
            onClose: () => {
              window.location.href = "/editVol";
            },
          });
          setTimeout(() => {
            // Redirect to another page after the delay
            window.location.href = "/editVol";
          }, 3000);
        } catch (error) {
          console.log("Failed to pass response message!");
        }
      } else {
        toast({
          title: "Error",
          description: "Unknown error",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        console.log("Response not ok");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchVolunteers = () => {
    axios
      .get(`http://localhost:3000/volunteer/getAllRegistered/${student_id}`)
      .then(function (response) {
        console.log(response.data);
        setVolunteers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const setVolId = (volId) => {
    console.log(volId);
    setVol_id(volId);
  };
  const postData = {
    session_id: Vol_id,
    student_id: student_id,
  };
  const testIndex = (id) => {
    console.log(id);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box height="25px" mb={10}>
        <NavBar />
      </Box>

      <Flex
        direction="column"
        align="center"
        justify="start"
        minHeight="100vh"
        bgGradient="linear(to-r, orange.400, yellow.300)"
        color="white"
        textAlign="center"
        borderRadius="xl"
        boxShadow="lg"
      >
        <Heading pb={2}>Manage Upcoming Sessions</Heading>
        {volunteers.message == "No data" ? (
          <Text fontFamily="monospace" fontSize="4xl" pt={20}>
            There are no registered sessions !
          </Text>
        ) : (
          <TableContainer bgColor="gray.500" rounded="xl">
            <Table
              variant="simple"
              borderWidth="1px"
              borderColor="gray.200"
              color="white"
            >
              <Thead bgColor="gray">
                <Tr>
                  <Th borderWidth="1px" borderColor="gray.200" color="white">
                    Description
                  </Th>
                  <Th borderWidth="1px" borderColor="gray.200" color="white">
                    Date
                  </Th>
                  <Th borderWidth="1px" borderColor="gray.200" color="white">
                    Remaining slots
                  </Th>

                  <Th
                    borderWidth="1px"
                    borderColor="gray.200"
                    color="white"
                    textAlign="center"
                  >
                    Action
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {volunteers.map((response, index) => (
                  <Tr key={index}>
                    <Td borderWidth="1px" borderColor="gray.200">
                      <ul>
                        <li>Title: {response.VSession_VSession_name}</li>
                        <li>Description: {response.VSession_VSession_desc}</li>

                        <li>
                          Duration: {response.VSession_VSession_hour} hours
                        </li>
                      </ul>
                    </Td>
                    <Td borderWidth="1px" borderColor="gray.200">
                      {format(response.VSession_date, "dd MMM yyyy")}
                    </Td>
                    <Td textAlign="center">
                      <Text fontSize="2xl">
                        {Number(response.VSession_VSession_limit) -
                          response.volunteer_count}
                        /{response.VSession_VSession_limit}
                      </Text>
                    </Td>
                    <Td borderWidth="1px" borderColor="gray.200">
                      <Button
                        colorScheme="red"
                        onClick={() => {
                          setVolId(response.VSession_id);
                          onOpen();
                        }}
                      >
                        Cancel Registration
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        )}
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Cancel Your Registration
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
                  ml={3}
                  onClick={() => {
                    onClose();
                    cancelReg();
                  }}
                >
                  Proceed
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Flex>
    </ChakraProvider>
  );
}
