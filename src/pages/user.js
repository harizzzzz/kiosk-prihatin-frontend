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
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import theme from "../theme";
import { ArrowBackIcon } from "@chakra-ui/icons";
import NavBar from "./utility/Navbar";
import { getAccessToken } from "../auth/token";

function User() {
  const student_id = window.localStorage.getItem("username");
  const [user, setUser] = useState({
    full_name: "",
    password_hash: "",
    student_id: "",
    email: "",
    password_old: "",
  });
  const [editMode, setEditMode] = useState(false);
  const toast = useToast();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/findOne/${student_id}`)
      .then(function (response) {
        setUser({
          full_name: response.data.users_full_name,
          student_id: response.data.users_student_id,
          email: response.data.users_email,
          password_hash: "",
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleEdit = () => {
    setEditMode(true);
  };
  const handleSave = () => {
    let newPassword = "";
    const token = getAccessToken();

    // Keep prompting until a non-empty value is provided
    while (newPassword.trim() === "") {
      newPassword = prompt("Enter your password to save changes:");

      // If the user cancels the prompt, exit the function
      if (newPassword === null) {
        return;
      }
    }

    const modifiedUser = {
      ...user,
      password_old: newPassword,
      password_hash:
        user.password_hash.trim() === "" ? newPassword : user.password_hash,
    };

    axios
      .post(`http://localhost:3000/users/modify`, modifiedUser, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // Add this line to set content type
        },
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.statusCode === 200) {
          try {
            toast({
              title: "Update Successful",
              description: `Your account is successfully updated !`,
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
      .catch((error) => {
        console.error(error);
        try {
          toast({
            title: "Error 401 : Unauthorized!",
            description: "Please check your password !",
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
      });

    setEditMode(false);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box height="25px" mb={9} position="sticky" top={0} zIndex={10}>
        <NavBar />
      </Box>

      <Center>
        <Heading mb={2}>User Details</Heading>
      </Center>
      <Flex direction="column" align="center" justify="start" minHeight="100vh">
        <TableContainer w="1000px">
          <Table variant="simple">
            <Tbody borderWidth={1}>
              <Tr>
                <Td>Student Name</Td>
                <Td>
                  <Input
                    type="text"
                    placeholder="Full Name"
                    required
                    readOnly={!editMode}
                    value={user.full_name}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        full_name: e.target.value,
                      })
                    }
                  ></Input>
                </Td>
              </Tr>
              <Tr>
                <Td>Student ID</Td>
                <Td>
                  <Input
                    type="text"
                    placeholder="Student ID"
                    required
                    readOnly
                    value={user.student_id}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        student_id: e.target.value,
                      })
                    }
                  ></Input>
                </Td>
              </Tr>
              <Tr>
                <Td>Email</Td>
                <Td>
                  <Input
                    type="text"
                    placeholder="Email"
                    required
                    readOnly={!editMode}
                    value={user.email}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        email: e.target.value,
                      })
                    }
                  ></Input>
                </Td>
              </Tr>
              <Tr>
                <Td>Password</Td>
                <Td>
                  <Input
                    type="text"
                    placeholder="Password"
                    required
                    readOnly={!editMode}
                    value={user.password_hash}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        password_hash: e.target.value,
                      })
                    }
                  ></Input>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Stack direction="row">
          <Button mt={2} onClick={handleEdit} mr={2}>
            Edit
          </Button>
          <Button mt={2} onClick={handleSave}>
            Save
          </Button>
        </Stack>
      </Flex>
    </ChakraProvider>
  );
}
export default User;
