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
import theme from "../../theme";
import { ArrowBackIcon } from "@chakra-ui/icons";
import NavBar from "../utility/Navbar";

export default function ReserveHistory() {
  const student_id = localStorage.getItem("username");

  const [resHistory, setResHistory] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/reserve/reserveHistory/${student_id}`)
      .then(function (response) {
        setResHistory(response.data);
        console.log(student_id);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box height="25px" mb={9} position="sticky" top={0} zIndex={10}>
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
        <Center>
          <Heading mb={2}>Reservation History</Heading>
        </Center>
        <TableContainer w="1000px">
          <Table variant="simple">
            <Thead borderWidth={1}>
              <Tr>
                <Th>No.</Th>
                <Th>Session ID</Th>
                <Th>Date Created</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody borderWidth={1}>
              {resHistory.map((reservation, index) => (
                <Tr key={index}>
                  <Td>{index}</Td>
                  <Td>{reservation.session_id}</Td>
                  <Td>{reservation.reserve_time}</Td>
                  <Td>
                    <Button
                      borderWidth={0.5}
                      borderColor={"black"}
                      onClick={() => {
                        window.location.href = `/confirmReserve/${reservation.session_id}`;
                      }}
                    >
                      View
                    </Button>
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
