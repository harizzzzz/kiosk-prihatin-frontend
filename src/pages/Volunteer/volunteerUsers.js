import React, { useEffect, useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { isAuthenticated, logout } from "../../auth/token";
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
} from "@chakra-ui/react";
import axios from "axios";
import theme from "../../theme";
import { format } from "date-fns";
import NavBar from "../utility/Navbar";
import imAvailable from "../../assets/images/available.png";
import imUnavailable from "../../assets/images/unavailable.png";

export default function VolunteerUsers() {
  const [volunteers, setVolunteers] = useState([]);
  const student_id = localStorage.getItem("username");
  useEffect(() => {
    axios
      .get(`http://localhost:3000/volunteer/getAll/${student_id}`)
      .then(function (response) {
        console.log(response.data);
        setVolunteers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

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
        <Heading pb={2}>Available Sessions</Heading>
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
                  Available slots
                </Th>
                <Th
                  borderWidth="1px"
                  borderColor="gray.200"
                  color="white"
                  textAlign="center"
                >
                  Status
                </Th>
                <Th borderWidth="1px" borderColor="gray.200" color="white">
                  Registration
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {volunteers.map((response, index) => (
                <Tr key={index}>
                  <Td borderWidth="1px" borderColor="gray.200">
                    <ul>
                      <li>Title: {response.vSession.VSession_VSession_name}</li>
                      <li>
                        Description: {response.vSession.VSession_VSession_desc}
                      </li>

                      <li>
                        Duration: {response.vSession.VSession_VSession_hour}{" "}
                        hours
                      </li>
                    </ul>
                  </Td>
                  <Td borderWidth="1px" borderColor="gray.200">
                    {format(response.vSession.VSession_date, "dd MMM yyyy")}
                  </Td>
                  <Td textAlign="center">
                    <Text fontSize="2xl">
                      {Number(response.vSession.VSession_VSession_limit) -
                        response.vSession.volunteer_count}
                      /{response.vSession.VSession_VSession_limit}
                    </Text>
                  </Td>
                  <Td borderWidth="1px" borderColor="gray.200">
                    {response.vSession.VSession_VSession_limit ==
                      response.vSession.volunteer_count ||
                    response.regStatus === true ? (
                      <Box height={20} justifyContent="center">
                        <img
                          src={`${imUnavailable}`}
                          alt="unavailable"
                          style={{ height: "100%" }}
                        />
                      </Box>
                    ) : (
                      <Box pl={3.5} height={20} justifyContent="center">
                        <img
                          src={`${imAvailable}`}
                          alt="available"
                          style={{ height: "100%" }}
                        />
                      </Box>
                    )}
                  </Td>
                  <Td borderWidth="1px" borderColor="gray.200">
                    {response.vSession.VSession_VSession_limit ==
                      response.vSession.volunteer_count ||
                    response.regStatus === true ? (
                      <Button bgColor="grey" color="white" isDisabled>
                        Register
                      </Button>
                    ) : isAuthenticated() ? (
                      <ReactRouterLink
                        to={`/volReg/${response.vSession.VSession_id}`}
                      >
                        <Button
                          bgColor="green"
                          color="white"
                          onClick={() =>
                            testIndex(response.vSession.VSession_id)
                          }
                        >
                          Register
                        </Button>
                      </ReactRouterLink>
                    ) : (
                      <ReactRouterLink to={`/login`}>
                        <Button
                          bgColor="green"
                          color="white"
                          onClick={() =>
                            testIndex(response.vSession.VSession_id)
                          }
                        >
                          Register
                        </Button>
                      </ReactRouterLink>
                    )}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </ChakraProvider>
  );
}
