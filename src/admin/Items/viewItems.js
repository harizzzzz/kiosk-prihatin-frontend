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
  Link as ChakraLink,
  FormControl,
  CSSReset,
} from "@chakra-ui/react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { CiFilter } from "react-icons/ci";
import theme from "../../theme";
import imageBg from "../../assets/images/background.png";

import NavBar from "../../pages/utility/Navbar";
import NavBarAdmin from "../../pages/utility/NavbarAdmin";

export default function ViewItems() {
  const [inventory, setInventory] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [itemId, setItemId] = useState({});
  const cancelRef = React.useRef();
  const toast = useToast();
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

  const clickDelete = (id) => {
    setItemId(id);
    onOpen();
  };

  const handleDelete = () => {
    axios
      .get(`http://localhost:3000/item/delete/${itemId}`)
      .then(function (response) {
        if (response.data.statusCode === 200) {
          toast({
            title: "Delete Successful !",
            description: "The item is deleted successfully !",
            status: "success",
            duration: 5000,
            isClosable: true,
            onClose: () => {
              window.location.reload();
            },
          });
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const handleEdit = (id) => {
    window.location.href = `/admin/editItem/${id}`;
  };

  const handleView = (id) => {
    window.location.href = `/admin/viewInventory/${id}`;
  };
  return (
    <ChakraProvider theme={theme}>
      <Box height="25px" mb={10}>
        <NavBarAdmin />
      </Box>

      <Flex
        direction="column"
        align="center"
        justify="start"
        minHeight="100vh"
        bgColor="wheat"
      >
        <Heading pb={2} fontFamily="monospace">
          Manage Items
        </Heading>

        <TableContainer rounded="2xl" bgColor="grey">
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
                  Current Inventory
                </Th>
                <Th
                  textAlign="center"
                  borderWidth="1px"
                  borderColor="gray.200"
                  color="white"
                >
                  Action
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
                  <Td
                    borderWidth="1px"
                    borderColor="gray.200"
                    textAlign="center"
                  >
                    {response.quantity} pcs
                  </Td>
                  <Td>
                    <Button
                      colorScheme="red"
                      mr={2}
                      onClick={() => {
                        clickDelete(response.item_id);
                      }}
                    >
                      Delete
                    </Button>
                    <Button
                      colorScheme="gray"
                      mr={2}
                      onClick={() => {
                        handleView(response.item_id);
                      }}
                    >
                      View Inventory
                    </Button>
                    <Button
                      colorScheme="blue"
                      onClick={() => {
                        handleEdit(response.item_id);
                      }}
                    >
                      Update
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
                Save Edit
              </AlertDialogHeader>

              <AlertDialogBody>Are you sure?</AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  colorScheme="red"
                  onClick={() => {
                    handleDelete();
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
