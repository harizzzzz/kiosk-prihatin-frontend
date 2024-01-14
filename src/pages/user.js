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
} from "@chakra-ui/react";
import axios from "axios";
import theme from "../theme";
import { ArrowBackIcon } from "@chakra-ui/icons";
import NavBar from "./utility/Navbar";

function User() {
  const student_id = window.localStorage.getItem("username");
  const [user, setUser] = useState({
    full_name: "",
    password_hash: "",
    student_id: "",
    email: "",
  });
  const [editMode, setEditMode] = useState(false);

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
    setEditMode(!editMode);
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
            </Tbody>
          </Table>
        </TableContainer>
        <Button mt={2} onClick={handleEdit}>
          {editMode ? "Save" : "Edit"}
        </Button>
      </Flex>
    </ChakraProvider>
  );
}
export default User;
