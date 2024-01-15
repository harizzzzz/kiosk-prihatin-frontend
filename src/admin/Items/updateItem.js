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

export default function UpdateItem() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    item_name: "",
    item_desc: "",
    item_imgLink: "",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const toast = useToast();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/item/getItem/${id}`)
      .then(function (response) {
        setFormData({
          item_name: response.data.name,
          item_desc: response.data.description,
          item_imgLink: response.data.link,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleEdit = () => {
    axios
      .post(`http://localhost:3000/item/edit/${id}`, formData, {
        headers: { "Content-Type": "application/json" },
      })
      .then(function (response) {
        console.log(response);
        if (response.status === 201) {
          try {
            toast({
              title: "Successful",
              description: `Item details is successfully updated !`,
              status: "success",
              duration: 5000,
              isClosable: true,
              onClose: () => {
                window.location.href = "/admin/viewItems";
              },
            });
            setTimeout(() => {
              // Redirect to another page after the delay
              window.location.href = "/admin/viewItems";
            }, 3000);
          } catch (e) {
            console.log(e);
          }
        }
      })
      .catch(function (err) {
        console.log(err);
      });
    onClose();
  };
  return (
    <ChakraProvider>
      <Flex direction="column" bgColor="orange.200" height="100vh">
        <Stack direction="row">
          <Box pr="30%">
            {" "}
            <Button
              m={2}
              onClick={() => {
                window.location.href = "/admin/viewItems";
              }}
            >
              <ArrowBackIcon mr={2} />
              Cancel
            </Button>
          </Box>
          <Heading mb={5}>Edit Item Details</Heading>
        </Stack>
        <Flex
          direction="column"
          align="center"
          bgColor="orange.200"
          height="100vh"
        >
          <Box
            borderWidth="3px"
            padding={20}
            rounded="2xl"
            style={{
              backdropFilter: "blur(5px)",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
          >
            <Heading fontSize="x-large" fontFamily="monospace" mb={5} ml={5}>
              Item ID : {id}
            </Heading>
            <TableContainer rounded="xl">
              <Table alignItems="center" justifyItems="center">
                <Tbody>
                  <Tr>
                    <Td>Item Name</Td>
                    <Td>
                      <Input
                        type="text"
                        placeholder="Name"
                        required
                        value={formData.item_name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            item_name: e.target.value,
                          })
                        }
                      ></Input>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Description</Td>
                    <Td>
                      <Input
                        type="text"
                        placeholder="Description"
                        required
                        value={formData.item_desc}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            item_desc: e.target.value,
                          })
                        }
                      ></Input>
                    </Td>
                  </Tr>

                  <Tr>
                    <Td>Image Link</Td>
                    <Td>
                      <Input
                        type="text"
                        placeholder="Image Link"
                        required
                        value={formData.item_imgLink}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            item_imgLink: e.target.value,
                          })
                        }
                      ></Input>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
              <Center>
                <Button onClick={onOpen} mt={5} colorScheme="teal" w={100}>
                  Update
                </Button>
              </Center>
            </TableContainer>
          </Box>
        </Flex>

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
                  colorScheme="green"
                  onClick={() => {
                    handleEdit();
                  }}
                  ml={3}
                >
                  Confirm
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Flex>
    </ChakraProvider>
  );
}
