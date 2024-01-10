import React, { Fragment, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Center,
  Input,
  ChakraProvider,
  Flex,
  Text,
  Link as ChakraLink,
  Stack,
  Heading,
  assignRef,
  HStack,
  useToast,
  CSSReset,
  Checkbox,
  InputGroup,
  InputRightElement,
  color,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import {
  setToken,
  isAuthenticated,
  getRefreshToken,
  getAccessToken,
  refreshJWT,
  setUser,
} from "../auth/token";
import { Link as ReactRouterLink } from "react-router-dom";
import imageBg from "../assets/images/background.png";
import theme from "../theme";

function Login({ onLogin, onLogout }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [value, setValue] = React.useState("1");
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    console.log(formData);
    console.log(isAuthenticated());
    if (value == 2) {
      try {
        const response = await fetch("http://localhost:3000/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        console.log(response);

        if (response.ok) {
          const token = await response.json();

          console.log(token);

          try {
            setToken(token);
            setUser();
            onLogin();

            toast({
              title: "Success",
              description: "Login Success!",
              status: "success",
              duration: 15000,
              isClosable: true,
            });
          } catch (error) {
            // Handle parsing error
            console.log("err");
          }

          window.location.href = "/";
        } else if (response.status == 401) {
          // Unauthorized - invalid credentials
          toast({
            title: "Unauthorized",
            description: "Invalid username or password",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        } else {
          // Handle error response
          const details = await response.json();
          toast({
            title: "Unsuccessful",
            description: details.message,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
          console.log("err response");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    } else if (value == 1) {
      try {
        const response = await fetch("http://localhost:3000/auth/adminlogin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        console.log(response);

        if (response.ok) {
          const token = await response.json();

          console.log(token);

          try {
            setToken(token);
            setUser();
            onLogin();

            toast({
              title: "Success",
              description: "Login Success!",
              status: "success",
              duration: 15000,
              isClosable: true,
            });
          } catch (error) {
            // Handle parsing error
            console.log("err");
          }

          window.location.href = "/homepage";
        } else if (response.status == 401) {
          // Unauthorized - invalid credentials
          toast({
            title: "Unauthorized",
            description: "Invalid admin credential !",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        } else {
          // Handle error response
          const details = await response.json();
          toast({
            title: "Unsuccessful",
            description: details.message,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
          console.log("err response");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  };
  const temp = () => {
    localStorage.clear();
    onLogout();
  };

  const refresh = async () => {
    const auth = isAuthenticated();
    const refresh = getRefreshToken();
    try {
      const response = await fetch("http://localhost:3000/auth/refresh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getAccessToken()}`,
        },
        body: JSON.stringify({ refreshToken: getRefreshToken() }),
      });

      const token = await response.json();
      console.log(token);
      setToken(token);
    } catch (error) {
      console.log(error);
    }
  };

  const [isLoading, setIsLoading] = useState(false);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Flex align="center" justify="center" height="100vh" bgImage={imageBg}>
        <Box
          borderWidth="3px"
          padding={20}
          rounded="2xl"
          style={{
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          }}
        >
          <Heading color="white">Login</Heading>
          <RadioGroup mt={5} onChange={setValue} value={value}>
            <Stack direction="row">
              <Radio value="1" pr={2}>
                Admin
              </Radio>
              <Radio value="2">Student</Radio>
            </Stack>
          </RadioGroup>
          <form onSubmit={handleSubmit}>
            <FormControl id="username">
              <Text mb={0.5} fontWeight={"thin"} color="white">
                Username
              </Text>
              <Input
                size="md"
                bgColor={"white"}
                rounded={"lg"}
                mb={5}
                fontWeight={"thin"}
                placeholder="Username"
                required
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
            </FormControl>
            <FormControl id="password">
              <Text mb={0.5} fontWeight={"thin"} color="white">
                Password
              </Text>
              <InputGroup>
                <Input
                  size="md"
                  bgColor={"white"}
                  rounded={"lg"}
                  type={show ? "text" : "password"}
                  placeholder="Password"
                  required
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <InputRightElement width="4.5rem">
                  <Button size="sm" onClick={handleShow}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Box mb={5} mt="0.9" color="blueviolet" align="right">
              <ChakraLink
                as={ReactRouterLink}
                to="/signup"
                color="navy"
                fontSize="small"
                textDecoration="underline"
              >
                Don't have account yet?
              </ChakraLink>
            </Box>

            <Button
              mt="10"
              type="submit"
              isLoading={isLoading}
              w="full"
              colorScheme="teal"
              fontSize={"medium"}
            >
              Login{" "}
            </Button>
          </form>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default Login;
