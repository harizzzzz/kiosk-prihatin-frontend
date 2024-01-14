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

export default function ConfirmReserve() {
  const { session_id } = useParams();
  const [reserve, setReserve] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/reserve/getOneSession/${session_id}`)
      .then(function (response) {
        setReserve(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const createdAt = reserve.length > 0 ? reserve[0].time_created : null;
  const formattedCreatedAt =
    createdAt &&
    new Date(createdAt).toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

  const handleGoBack = () => {
    history(-1); // Go back to the previous page
  };

  return (
    <ChakraProvider theme={theme}>
      <Stack direction="row" p={2}>
        <Button ml={5} mt={1} onClick={handleGoBack}>
          <ArrowBackIcon mr={3} />
          Back
        </Button>
        <Heading mt={1} pl="30%">
          Reservation Details
        </Heading>
      </Stack>
      <Stack direction="row" pt={10} justifyContent="center">
        <Box
          width="40%"
          borderWidth="5px"
          height="80vh"
          rounded="3xl"
          style={{
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(200, 255, 255, 0.3)",
          }}
        >
          <Box
            width="80%"
            margin="auto"
            alignItems="center"
            height="inherit"
            pt={50}
          >
            <Box ml={5}>
              {" "}
              <Text> Reservation ID : {session_id}</Text>
              <Text>Student ID : {localStorage.getItem("username")}</Text>
              <Text>Reserved On : {formattedCreatedAt}</Text>
            </Box>

            <TableContainer pt={5}>
              <Table>
                <Thead>
                  <Tr>
                    <Th>Item Name</Th>
                    <Th isNumeric>Quantity</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {reserve.map((reservation) => (
                    <Tr key={reservation.reserve_id}>
                      <Td>{reservation.item_name}</Td>
                      <Td isNumeric>{reservation.item_quantity}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Stack>{" "}
    </ChakraProvider>
  );
}
