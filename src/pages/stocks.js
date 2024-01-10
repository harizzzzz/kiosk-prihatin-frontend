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
} from "@chakra-ui/react";
import axios from "axios";
import theme from "../theme";

import NavBar from "./utility/Navbar";

export default function Stocks() {
  const [inventory, setInventory] = useState([]);
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

  return (
    <ChakraProvider theme={theme}>
      <Box height="25px" mb={10}>
        <NavBar />
      </Box>

      <Flex direction="column" align="center" justify="start" minHeight="100vh">
        <Heading pb={2}>Item Catalog</Heading>
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
                  Image
                </Th>
                <Th borderWidth="1px" borderColor="gray.200" color="white">
                  Item
                </Th>
                <Th borderWidth="1px" borderColor="gray.200" color="white">
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
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </ChakraProvider>
  );
}
