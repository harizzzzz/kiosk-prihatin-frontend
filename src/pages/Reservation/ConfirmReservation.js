import React, { useEffect, useState } from "react";
import { Link as ReactRouterLink, useParams } from "react-router-dom";
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

import NavBar from "../utility/Navbar";

export default function ConfirmReserve() {
  const { inventoryDataParam } = useParams();
  // const inventoryData = JSON.parse(decodeURIComponent(inventoryDataParam));
  const trycuba = () => {
    console.log(inventoryDataParam);
  };
  return (
    <ChakraProvider>
      <NavBar />
      <Box>
        <Button onClick={trycuba}>haha</Button>
      </Box>
    </ChakraProvider>
  );
}
