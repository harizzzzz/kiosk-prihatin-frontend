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
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Checkbox,
} from "@chakra-ui/react";
import axios from "axios";
import { IoMdPeople } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { CiFilter } from "react-icons/ci";
import theme from "../../theme";
import { AiOutlineSetting } from "react-icons/ai";
import { IoAnalyticsSharp } from "react-icons/io5";

export default function ViewInventory() {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [totalReserve, setTotalReserve] = useState([]);
  const [currInventory, setCurrInventory] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [reservation, setReservation] = useState([]);
  const [formData, setFormData] = useState({
    item_id: "",
    quantity: "",
  });

  const [selectedOptions, setSelectedOptions] = useState(["inventory"]);
  const toast = useToast();
  const navigate = useNavigate();

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prevOptions) => {
      if (prevOptions.includes(option)) {
        return prevOptions.filter((prevOption) => prevOption !== option);
      } else {
        return [...prevOptions, option];
      }
    });
  };

  const isOptionSelected = (option) => selectedOptions.includes(option);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/item/getItem/${id}`)
      .then(function (response) {
        setItem(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/reserve/getTotalReservedByItem/${id}`)
      .then(function (response) {
        setTotalReserve(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/inventory/getItemMostRecent/${id}`)
      .then(function (response) {
        setCurrInventory(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/inventory/getInventoryByItem/${id}`)
      .then(function (response) {
        setInventory(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/reserve/getReserveByItem/${id}`)
      .then(function (response) {
        setReservation(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  const handleUpdate = () => {
    let itemQuantity = "";
    while (itemQuantity.trim() === "") {
      itemQuantity = prompt("Please enter the new quantity for inventory ");

      if (itemQuantity === null) {
        return;
      }
    }
    const updatedData = {
      ...formData,
      item_id: id,
      quantity: itemQuantity,
    };

    console.log(updatedData);
    axios
      .post(`http://localhost:3000/inventory/add`, updatedData, {
        headers: { "Content-Type": "application/json" },
      })
      .then(function (response) {
        if (response.status === 201) {
          toast({
            title: "Successful!",
            description: "Inventory has been updated!",
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
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <ChakraProvider>
      <Stack direction="row" pb={5}>
        {" "}
        <Button
          m={3}
          colorScheme="teal"
          onClick={() => {
            navigate(-1);
          }}
        >
          <ArrowBackIcon />
          Back
        </Button>
        <Box pl="30%">
          <Heading fontFamily="monospace" fontSize="x-large">
            Item ID : {id}
          </Heading>
          <Heading fontFamily="monospace" fontSize="x-large">
            Item Name : {item.name}
          </Heading>
        </Box>
      </Stack>

      <Flex justify="space-between" flexWrap="wrap">
        <StatBox
          icon={<IoMdPeople />}
          label="Current Inventory"
          value={currInventory.quantity}
          helpText="Available Stocks"
          isIncreased
        />
        <StatBox
          icon={<AiOutlineSetting />}
          label="Total Reserved"
          value={totalReserve.total_quantity}
          helpText="Amount reserved by users"
        />
        <StatBox
          icon={<IoAnalyticsSharp />}
          label="Total Overall"
          value={
            Number(totalReserve.total_quantity) + Number(currInventory.quantity)
          }
          helpText="Sum of stocks over time"
        />
      </Flex>
      <Box pl={5} borderWidth={2}>
        <Stack direction="row" justify="space-between">
          <Stack direction="column">
            <Checkbox
              isChecked={isOptionSelected("inventory")}
              onChange={() => handleCheckboxChange("inventory")}
            >
              Show Inventory
            </Checkbox>
            <Checkbox
              isChecked={isOptionSelected("reservation")}
              onChange={() => handleCheckboxChange("reservation")}
            >
              Show Reservation
            </Checkbox>
          </Stack>
          <Box m={2}>
            <Button
              colorScheme="blue"
              onClick={() => {
                handleUpdate();
              }}
            >
              Update Inventory
            </Button>
          </Box>
        </Stack>
      </Box>
      {isOptionSelected("inventory") && (
        <Flex direction="column" mt={5}>
          <Heading fontFamily="monospace" mb={5}>
            Inventory History
          </Heading>
          <TableContainer id="inv">
            <Table variant="striped">
              <Thead>
                <Td>Inventory ID</Td>
                <Td>Updated Quantity</Td>
                <Td>Created At</Td>
              </Thead>
              <Tbody>
                {inventory.map((iv, index) => (
                  <Tr key={index}>
                    <Td>{iv.id}</Td>
                    <Td>{iv.quantity}</Td>
                    <Td>{iv.timeCreated}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      )}
      {isOptionSelected("reservation") && (
        <Flex direction="column" mt={5}>
          <Heading fontFamily="monospace" mb={5}>
            Reservation History
          </Heading>
          <TableContainer id="res">
            <Table variant="striped">
              <Thead>
                <Td>Reservation ID</Td>
                <Td>Student ID</Td>
                <Td>Item Quantity</Td>
                <Td>Created At</Td>
              </Thead>
              <Tbody>
                {reservation.map((rv, index) => (
                  <Tr key={index}>
                    <Td>{rv.id}</Td>
                    <Td>{rv.student_id}</Td>
                    <Td>{rv.quantity}</Td>
                    <Td>{rv.reserve_time}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      )}
    </ChakraProvider>
  );
}

const StatBox = ({ icon, label, value, helpText, isIncreased = true }) => {
  return (
    <Stat
      flex="1"
      minW="250px"
      p="4"
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      mb="4"
    >
      <Flex align="center">
        <Box as="span" fontSize="3xl" mr="3">
          {icon}
        </Box>
        <Box>
          <StatLabel>{label}</StatLabel>
          <StatNumber>{value}</StatNumber>
          <StatHelpText>
            <StatArrow type={isIncreased ? "increase" : "decrease"} />
            {helpText}
          </StatHelpText>
        </Box>
      </Flex>
    </Stat>
  );
};
