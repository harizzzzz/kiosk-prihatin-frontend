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

export default function EditVolunteer() {
  const { session_id } = useParams();
  const [formData, setFormData] = useState({
    VSession_name: "",
    VSession_desc: "",
    VSession_limit: "",
    VSession_hour: "",
    VSession_date: null,
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const toast = useToast();
  const formattedDate = (originalDate) => {
    const [day, month, year] = originalDate.split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/v-session/getSession/${session_id}`)
      .then(function (response) {
        const formatted = formattedDate(response.data.date);
        setFormData({
          VSession_name: response.data.name,
          VSession_desc: response.data.description,
          VSession_limit: response.data.u_limit,
          VSession_hour: response.data.duration,
          VSession_date: formatted,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleEdit = () => {
    axios
      .post(
        `http://localhost:3000/v-session/editSession/${session_id}`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then(function (response) {
        console.log(response);
        if (response.status === 201) {
          try {
            toast({
              title: "Successful",
              description: `Volunteer session is updated successfully!`,
              status: "success",
              duration: 5000,
              isClosable: true,
              onClose: () => {
                window.location.href = "/admin/manageVolunteer";
              },
            });
            setTimeout(() => {
              // Redirect to another page after the delay
              window.location.href = "/admin/manageVolunteer";
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
                window.location.href = "/admin/manageVolunteer";
              }}
            >
              <ArrowBackIcon mr={2} />
              Cancel
            </Button>
          </Box>
          <Heading mb={5}>Edit Volunteer Session</Heading>
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
              Session ID : {session_id}
            </Heading>
            <TableContainer rounded="xl">
              <Table alignItems="center" justifyItems="center">
                <Tbody>
                  <Tr>
                    <Td>Title</Td>
                    <Td>
                      <Input
                        type="text"
                        placeholder="Title"
                        required
                        value={formData.VSession_name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            VSession_name: e.target.value,
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
                        value={formData.VSession_desc}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            VSession_desc: e.target.value,
                          })
                        }
                      ></Input>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Participant Limit</Td>
                    <Td>
                      <Input
                        type="number"
                        placeholder="Participant Limit"
                        required
                        value={formData.VSession_limit}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            VSession_limit: e.target.value,
                          })
                        }
                      ></Input>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Date</Td>
                    <Td>
                      <Input
                        type="date"
                        placeholder="Date"
                        required
                        value={formData.VSession_date}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            VSession_date: e.target.value,
                          })
                        }
                      ></Input>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Duration </Td>
                    <Td>
                      <Input
                        type="number"
                        placeholder="Duration"
                        required
                        value={formData.VSession_hour}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            VSession_hour: e.target.value,
                          })
                        }
                      ></Input>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
              <Center>
                <Button onClick={onOpen} mt={5} colorScheme="teal" w={100}>
                  Save
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
