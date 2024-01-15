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

export default function CreateVolunteer() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    VSession_name: "",
    VSession_desc: "",
    VSession_limit: "",
    VSession_date: null,
    VSession_hour: "",
  });
  const toast = useToast();

  const [selectedDate, setSelectedDate] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hihi");

    console.log(formData);
    try {
      const response = await fetch("http://localhost:3000/v-session/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(response);

      if (response.ok) {
        try {
          const details = await response.json();
          console.log(details);
          toast({
            title: "Volunteer Session Created!",
            description: "The session has been created successfully!",
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
        } catch (error) {
          console.log("Failed to pass response message!");
        }
        // window.location.href = "/login";
      } else {
        toast({
          title: "Error",
          description: "Some of your details is incorrect! Please check!",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        console.log("Response not ok");
      }
    } catch (err) {
      console.log("Failed to connect to API");
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Flex align="center" justify="center" height="100vh" bgColor="wheat">
        <form onSubmit={handleSubmit}>
          <Heading fontFamily={"heading"} mb={10} color="Black">
            Create Volunteer Session
          </Heading>

          <FormControl id="name" mb={0.5}>
            <Text>Title</Text>
            <Input
              type="text"
              placeholder="Session Title"
              size="md"
              bgColor="white"
              rounded={"lg"}
              mb={5}
              required
              value={formData.VSession_name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  VSession_name: e.target.value,
                })
              }
            />
          </FormControl>

          <FormControl id="desc" mb={0.5}>
            <Text>Description</Text>
            <Input
              type="text"
              placeholder="Session Description"
              size="md"
              bgColor="white"
              rounded={"lg"}
              mb={5}
              required
              value={formData.VSession_desc}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  VSession_desc: e.target.value,
                })
              }
            />
          </FormControl>

          <FormControl id="limit">
            <Text>Participant Limit</Text>
            <Input
              type="number"
              placeholder="Limit"
              bgColor="white"
              rounded={"lg"}
              required
              mb={5}
              value={formData.VSession_limit}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  VSession_limit: e.target.value,
                })
              }
            />
          </FormControl>
          <Stack direction="row">
            <FormControl>
              <Text>Date</Text>
              <Input
                type="date"
                bgColor="white"
                rounded={"lg"}
                required
                mb={5}
                value={formData.VSession_date}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    VSession_date: e.target.value,
                  })
                }
              ></Input>
            </FormControl>

            <FormControl id="hour">
              <Text>Duration</Text>
              <Input
                type="number"
                placeholder="Duration"
                bgColor="white"
                rounded={"lg"}
                required
                mb={5}
                value={formData.VSession_hour}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    VSession_hour: e.target.value,
                  })
                }
              />
            </FormControl>
          </Stack>

          <Button
            w="full"
            fontSize="xl"
            height={30}
            mb="5px"
            rounded={"lg"}
            type="submit"
            onClick={() => false}
            colorScheme="teal"
            isLoading={isLoading}
          >
            Create
          </Button>
        </form>
      </Flex>
    </ChakraProvider>
  );
}
