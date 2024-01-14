import React, { useEffect, useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
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
  useToast,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import theme from "../../theme";
import { isEmpty } from "lodash";

import NavBar from "../utility/Navbar";

export default function MakeReserve() {
  const [inventory, setInventory] = useState([]);
  const [cuba, setCuba] = useState([]);
  const [quantities, setQuantities] = useState({});
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const student_id = localStorage.getItem("username");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/inventory/getAll`)
      .then(function (response) {
        console.log(response.data);
        setInventory(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const testIndex = (id) => {
    console.log(id);
  };

  const [inventoryData, setInventoryData] = useState([]);

  useEffect(() => {
    // This block of code will run after each render when quantities state is updated
    // You can perform additional actions here, such as logging the updated state
    console.log("Updated quantities:", quantities);
  }, [quantities]);

  const updateArr = (response) => {
    setInventoryData((prevData) => {
      const updatedData = [...prevData];
      const existingIndex = updatedData.findIndex(
        (item) => item.inv_id === response.id
      );

      if (existingIndex !== -1) {
        // If inv_id already exists, update the quantity
        updatedData[existingIndex].quantity = quantities[response.id];
      } else {
        // If inv_id doesn't exist, add a new entry
        updatedData.push({
          inv_id: response.id,
          item_id: response.item_id,
          student_id: student_id,
          quantity: quantities[response.id],
        });
      }

      return updatedData;
    });
  };

  const submitData = async () => {
    if (
      isEmpty(quantities) ||
      Object.values(quantities).every((value) => value === 0)
    ) {
      // Show a toast or an alert to prompt the user
      toast({
        title: "Add Items",
        description:
          "Please add some items to your reservation before confirming.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    const currentTimestamp = Date.now(); // Get current timestamp in milliseconds
    const randomNumber = Math.floor(Math.random() * 1000); // Generate a random number (adjust the range as needed)
    const session_id = `${currentTimestamp}${randomNumber}`;

    for (const item of inventoryData) {
      try {
        // Assuming `trytest` is an asynchronous function that makes the API request
        await trytest(item, session_id, quantities[item.inv_id]);
      } catch (error) {
        console.error(`Error updating item ${item.inv_id}:`, error);
        // Handle errors if needed
      }
    }
    const res = await axios.get(
      `http://localhost:3000/reserve/sessionExist/${session_id}`
    );
    if (res) {
      try {
        toast({
          title: "Reservation Successful",
          description: `Your reservation has been made on id : ${session_id}`,
          status: "success",
          duration: 5000,
          isClosable: true,
          onClose: () => {
            window.location.href = `/confirmReserve/${session_id}`;
          },
        });
        setTimeout(() => {
          // Redirect to another page after the delay
          window.location.href = `/confirmReserve/${session_id}`;
        }, 3000);
      } catch (e) {
        console.log(e);
      }
    } else if (!res) {
      try {
        toast({
          title: "Reservation Unsuccessful",
          description: `Your reservation failed ! Please check your item quantity`,
          status: "error",
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
  };

  const handleDecrease = (response) => {
    setQuantities((prevQuantities) => {
      const updatedQuantity = Math.max(0, prevQuantities[response.id] - 1);
      return {
        ...prevQuantities,
        [response.id]: updatedQuantity,
      };
    });
  };

  const handleIncrease = (response) => {
    setQuantities((prevQuantities) => {
      const updatedQuantity = (prevQuantities[response.id] || 0) + 1;
      return {
        ...prevQuantities,
        [response.id]: updatedQuantity,
      };
    });
  };

  const trytest = async (item, session_id, quantity) => {
    // Make your API request using axios
    try {
      const response = await axios.post("http://localhost:3000/reserve/add", {
        inv_id: item.inv_id,
        item_id: item.item_id,
        student_id: item.student_id,
        session_id: session_id,
        quantity: quantity,
        // Add other fields as needed
      });
      // Handle the API response as needed
      console.log(`Item ${item.inv_id} updated successfully:`, response.data);
    } catch (error) {
      // Handle API request errors
      console.error(`Error updating item ${item.inv_id}:`, error);
      throw error; // Rethrow the error to indicate failure
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Box height="25px" mb={10}>
        <NavBar />
      </Box>

      <Flex direction="column" align="center" justify="start" minHeight="100vh">
        <Heading pb={2}>Make Reservation</Heading>

        <TableContainer
          bgColor={"#2e3440"}
          rounded="2xl"
          maxH="500px"
          overflowY="auto"
        >
          <Table
            variant="simple"
            borderWidth="1px"
            borderColor="gray.200"
            color="white"
          >
            <Thead>
              <Tr>
                <Th borderWidth="1px" borderColor="gray.200" color="white">
                  Image
                </Th>
                <Th borderWidth="1px" borderColor="gray.200" color="white">
                  Item
                </Th>
                <Th borderWidth="1px" borderColor="gray.200" color="white">
                  Stocks Left
                </Th>
                <Th
                  borderWidth="1px"
                  borderColor="gray.200"
                  color="white"
                  textAlign="center"
                >
                  Quantity
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {inventory.map((response, index) => (
                <Tr key={index}>
                  <Td borderWidth="1px" borderColor="gray.200">
                    <Box maxH="90px" maxW="90px">
                      {response.Link && (
                        <Image
                          objectFit="scale-down"
                          src={`${response.Link}`}
                          alt={response.name}
                        />
                      )}
                    </Box>
                  </Td>
                  <Td borderWidth="1px" borderColor="gray.200">
                    <ul>
                      <li>Item Name: {response.name}</li>
                      <li>Description: {response.description}</li>
                    </ul>
                  </Td>
                  <Td textAlign="center">{response.quantity} pcs</Td>
                  <Td borderWidth="1px" borderColor="gray.200">
                    <Stack direction="row">
                      <Button
                        onClick={() => {
                          handleDecrease(response);
                          updateArr(response);
                        }}
                      >
                        <FiMinus />
                      </Button>
                      <Input
                        id="quantity"
                        type="number"
                        value={quantities[response.id] || 0}
                        textAlign="center"
                        readOnly
                        width="70px"
                      ></Input>
                      <Button
                        onClick={() => {
                          handleIncrease(response);
                          updateArr(response);
                        }}
                      >
                        <GrAdd />
                      </Button>
                    </Stack>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <Center pt={10}>
          <Button
            colorScheme="facebook"
            w="200px"
            onClick={onOpen}
            as={ReactRouterLink}
          >
            {" "}
            Reserve Now{" "}
          </Button>
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Reservation
                </AlertDialogHeader>

                <AlertDialogBody>Reserve the items now ?</AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button
                    colorScheme="green"
                    onClick={() => {
                      submitData();
                      onClose();
                    }}
                    ml={3}
                  >
                    Confirm
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </Center>
      </Flex>
    </ChakraProvider>
  );
}
