import {
  Box,
  ChakraProvider,
  FormControl,
  Button,
  Input,
  Text,
  Heading,
  FormErrorMessage,
  FormHelperText,
  Link as ChakraLink,
  useToast,
  InputGroup,
  CSSReset,
  Flex,
} from "@chakra-ui/react";
import React, { Fragment, useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import theme from "../theme";
import imageBg from "../assets/images/background.png";

function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    student_id: "",
    password: "",
    email: "",
  });
  const toast = useToast();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hihi");

    console.log(formData);
    try {
      const response = await fetch("http://localhost:3000/users/signup", {
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
            title: "Account Created!",
            description: "Your account has been created successfully!",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        } catch (error) {
          console.log("Failed to pass response message!");
        }
        window.location.href = "/login";
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
      <Flex align="center" justify="center" height="100vh" bgImage={imageBg}>
        <Box
          pt={10}
          pr={10}
          pl={10}
          height="xl"
          width="sm"
          borderWidth="3px"
          rounded="2xl"
          style={{
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          }}
        >
          <form onSubmit={handleSubmit}>
            <Heading fontFamily={"heading"} mb={10} color="white">
              Signup
            </Heading>

            <FormControl id="username" mb={0.5}>
              <Text>Username</Text>
              <Input
                type="text"
                placeholder="Student Number"
                size="md"
                bgColor="white"
                rounded={"lg"}
                mb={5}
                required
                value={formData.student_id}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    student_id: e.target.value,
                  })
                }
              />
            </FormControl>

            <FormControl id="password">
              <Text>Password</Text>
              <Input
                type="text"
                placeholder="Password"
                bgColor="white"
                size="md"
                rounded={"lg"}
                required
                value={formData.password}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  })
                }
              />
              <FormHelperText color="darkblue" mb={3.5}>
                Minimum 8 character
              </FormHelperText>
            </FormControl>

            <FormControl id="fullname">
              <Text>Full Name</Text>
              <Input
                type="text"
                placeholder="Full name"
                bgColor="white"
                rounded={"lg"}
                required
                mb={5}
                value={formData.full_name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    full_name: e.target.value,
                  })
                }
              />
            </FormControl>
            <FormControl id="email">
              <Text>Email</Text>
              <Input
                type="text"
                placeholder="Email"
                bgColor="white"
                rounded={"lg"}
                required
                mb={5}
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
              />
            </FormControl>

            <Button
              w="full"
              fontSize="medium"
              height={30}
              mb="5px"
              rounded={"lg"}
              type="submit"
              onClick={() => false}
              colorScheme="teal"
              isLoading={isLoading}
            >
              Sign Up
            </Button>
          </form>
          <center>
            <Box
              mb={5}
              mt="0.9"
              color="navy"
              textDecoration="underline"
              alignSelf="end"
            >
              <ChakraLink
                as={ReactRouterLink}
                to="/login"
                color="navy"
                fontSize="medium"
              >
                Already have account? Login now
              </ChakraLink>
            </Box>
          </center>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default Signup;
