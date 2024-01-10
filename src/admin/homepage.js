import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Divider,
  Text,
  Button,
  Stack,
  Icon,
  Spacer,
  ChakraProvider,
} from "@chakra-ui/react";
import { IoMdPeople } from "react-icons/io";
import axios from "axios";
import { AiOutlineSetting } from "react-icons/ai";
import { IoAnalyticsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { isAuthenticated, logout } from "../auth/token";
import NavBarAdmin from "../pages/utility/NavbarAdmin";

const KioskPrihatinAdminHome = () => {
  const [userCount, setUserCount] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/getStudentCount`)
      .then(function (response) {
        console.log(response.data);
        setUserCount(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <ChakraProvider>
      <NavBarAdmin />
      <Box p="6">
        <Heading pt={16} as="h1" size="lg" mb="6">
          Kiosk Prihatin Admin Dashboard
        </Heading>
        <Flex justify="space-between" flexWrap="wrap">
          <StatBox
            icon={<IoMdPeople />}
            label="Total Users"
            value={userCount}
            helpText="3.5% increase"
            isIncreased
          />
          <StatBox
            icon={<AiOutlineSetting />}
            label="Settings"
            value={37}
            helpText="Configuration options"
          />
          <StatBox
            icon={<IoAnalyticsSharp />}
            label="Analytics"
            value={512}
            helpText="User interactions"
            isIncreased={false}
          />
        </Flex>
        <Divider my="8" />
        <Text fontSize="lg" mb="4">
          Quick Actions
        </Text>
        <Stack direction="row" spacing="4">
          <Link to="/manage">
            <Button
              colorScheme="blue"
              leftIcon={<Icon as={IoMdPeople} />}
              variant="solid"
            >
              Manage Users
            </Button>
          </Link>
          <Link to="/settings">
            <Button
              colorScheme="green"
              leftIcon={<Icon as={IoMdPeople} />}
              variant="solid"
            >
              Edit settings
            </Button>
          </Link>
          <Link to="/report">
            <Button
              colorScheme="purple"
              leftIcon={<Icon as={IoMdPeople} />}
              variant="solid"
            >
              View Analytics
            </Button>
          </Link>

          <Link to="/food">
            <Button
              colorScheme="yellow"
              leftIcon={<Icon as={IoMdPeople} />}
              variant="solid"
            >
              View Food
            </Button>
          </Link>
          <Link to="/vo">
            <Button
              colorScheme="red"
              leftIcon={<Icon as={IoMdPeople} />}
              variant="solid"
            >
              View Volunteer
            </Button>
          </Link>
          <Link to="/do">
            <Button
              colorScheme="green"
              leftIcon={<Icon as={IoMdPeople} />}
              variant="solid"
            >
              View Donation
            </Button>
          </Link>
          <Link to="/user">
            <Button
              colorScheme="green"
              leftIcon={<Icon as={IoMdPeople} />}
              variant="solid"
            >
              User Authentication
            </Button>
          </Link>
          <Link to="/userrr">
            <Button
              colorScheme="purple"
              leftIcon={<Icon as={IoMdPeople} />}
              variant="solid"
            >
              Users Lists
            </Button>
            <Spacer></Spacer>
          </Link>
          <Link to="/content">
            <Button
              colorScheme="red"
              leftIcon={<Icon as={IoMdPeople} />}
              variant="solid"
            >
              Manage content
            </Button>
          </Link>
        </Stack>
      </Box>
    </ChakraProvider>
  );
};

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

export default KioskPrihatinAdminHome;
