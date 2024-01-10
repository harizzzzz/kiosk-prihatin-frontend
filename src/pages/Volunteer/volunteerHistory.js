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

export default function VolunteerHistory() {
  const [volunteers, setVolunteers] = useState([]);
  const student_id = localStorage.getItem("username");
  useEffect(() => {
    axios
      .get(`http://localhost:3000/volunteer/getAllHistory/${student_id}`)
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

      <Flex direction="column" align="center" justify="start" minHeight="100vh">
        <Heading pb={2}>Past Sessions</Heading>
        <TableContainer bgColor={"#2e3440"} rounded="2xl">
          <Table
            variant="simple"
            borderWidth="1px"
            borderColor="gray.200"
            color="white"
          >
            <Thead>
              <Tr>
                <Th borderWidth="1px" borderColor="gray.200" color="white">
                  Description
                </Th>
                <Th borderWidth="1px" borderColor="gray.200" color="white">
                  Date
                </Th>
                <Th borderWidth="1px" borderColor="gray.200" color="white">
                  Participants
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
                    {response.vSession.VSession_date}
                  </Td>
                  <Td>
                    {/* Integrate the namesArray and namesList here */}
                    {response.participants.names && (
                      <ul>
                        {response.participants.names
                          .split(",")
                          .map((name, index) => (
                            <li key={index}>{name}</li>
                          ))}
                      </ul>
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
