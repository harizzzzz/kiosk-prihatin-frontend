import React, { useEffect, useState } from "react";
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
  Center,
  background,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import theme from "../../theme";

import NavBar from "../utility/Navbar";
import imAvailable from "../../assets/images/available.png";
import imUnavailable from "../../assets/images/unavailable.png";
import { useParams } from "react-router-dom";
import regPage from "../../assets/images/regPage.jpg";
import { format } from "date-fns";
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function VolunteerRegistration() {
  const { session_id } = useParams();
  const student_id = localStorage.getItem("username");

  const [session, setSession] = useState([]);
  const [student, setStudent] = useState([]);

  const [volunteer] = useState({
    student_id: student_id,
    session_id: session_id,
  });
  const toast = useToast();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/v-session/findSession/${session_id}`)
      .then(function (response) {
        console.log(response.data);
        setSession(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/findOne/${student_id}`)
      .then(function (response) {
        console.log(response.data);
        setStudent(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleBack = async (e) => {
    e.preventDefault();
    window.location.href = "/testvol";
  };

  const handleReg = async (e) => {
    e.preventDefault();

    console.log(volunteer);

    try {
      const response = await fetch("http://localhost:3000/volunteer/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(volunteer),
      });

      if (response.ok) {
        try {
          toast({
            title: "Successful!",
            description: "You has registered on this volunteer session !",
            status: "success",
            duration: 5000,
            isClosable: true,
            onClose: () => {
              window.location.href = "/testvol";
            },
          });
          setTimeout(() => {
            // Redirect to another page after the delay
            window.location.href = "/testvol";
          }, 3000);
        } catch (error) {
          console.log("Failed to pass response message!");
        }
      } else {
        toast({
          title: "Error",
          description: "Unknown error, please logout !",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        console.log("Response not ok");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Box
        height="100vh"
        bgImage={regPage}
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Stack direction="row">
          <Button ml={5} mt={1} onClick={handleBack}>
            <ArrowBackIcon mr={3} />
            Back
          </Button>
          <Heading mt={1} pl="30%">
            Volunteer Registration
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
              pt={70}
            >
              <Heading fontSize="3xl">Student Information</Heading>
              <Text pt={5}>Name : {student.users_full_name}</Text>
              <Text>Student ID : {student.users_student_id}</Text>
              <Text>E-mail : {student.users_email}</Text>
              <Heading fontSize="3xl" pt={10}>
                Volunteer Session Information
              </Heading>
              <Text pt={5}>Title : {session.VSession_name}</Text>
              <Text>Description : {session.VSession_desc}</Text>
              <Text>Date : {session.VSession_date}</Text>
              <Center marginTop={20}>
                <Button
                  colorScheme="teal"
                  width={150}
                  onClick={handleReg}
                  isLoading={isLoading}
                >
                  {" "}
                  Register
                </Button>
              </Center>
            </Box>
          </Box>
        </Stack>{" "}
      </Box>
    </ChakraProvider>
  );
}
