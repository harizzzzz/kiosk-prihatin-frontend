import React from "react";
import {
  ChakraProvider,
  Flex,
  Box,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  StackDivider,
  Stack,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Link as ReactRouterLink } from "react-router-dom";
import { isAuthenticated, logout } from "../../auth/token";

import logo from "../../assets/images/k2.png";

export default function NavBarAdmin() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ChakraProvider>
      <Flex
        bgColor={"#E8E8E8"}
        height={"14"}
        width={"100%"} // Set width to 100% to span the entire viewport
        p={2}
        position={"fixed"}
        top={"0"}
        shadow={"base"}
        pl={5}
        pr={5}
        align={"center"}
        zIndex={999}
      >
        <Box height={"14"}>
          <ReactRouterLink to={"/"}>
            <img
              src={`${logo}`}
              alt=""
              style={{
                objectFit: "-moz-initial",
                height: "100%",
              }}
            />
          </ReactRouterLink>
        </Box>
        <Spacer />
        <Box>
          <Stack direction={"row"} spacing={21}>
            <Box as={ReactRouterLink} to={"/homepage"}>
              Home
            </Box>
            <Box>
              <Menu>
                <MenuButton
                  isOpen={isOpen}
                  onMouseEnter={onOpen}
                  onMouseLeave={onClose}
                >
                  Volunteer {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}{" "}
                </MenuButton>
                <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                  <MenuItem as={ReactRouterLink} to={"/admin/createVolunteer"}>
                    Create Volunteer Session
                  </MenuItem>
                  <MenuItem as={ReactRouterLink} to={"/admin/manageVolunteer"}>
                    Manage Volunteer
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box /*as={ReactRouterLink} to={"/stocks"}*/>
              <Menu>
                <MenuButton
                  isOpen={isOpen}
                  onMouseEnter={onOpen}
                  onMouseLeave={onClose}
                >
                  Items
                  {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}{" "}
                </MenuButton>
                <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                  <MenuItem as={ReactRouterLink} to={"/admin/createItem"}>
                    Create Item
                  </MenuItem>
                  <MenuItem as={ReactRouterLink} to={"/admin/viewItems"}>
                    Manage Items
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box as={ReactRouterLink} to={"/do"}>
              Donation
            </Box>
          </Stack>
        </Box>
        <Spacer />
        <Box>
          <Menu>
            <MenuButton>
              {localStorage.getItem("username")
                ? localStorage.getItem("name")
                : "guest"}
              <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              {isAuthenticated() ? null : (
                <MenuItem as={ReactRouterLink} to={"/login"}>
                  Login
                </MenuItem>
              )}
              {isAuthenticated() ? null : (
                <MenuItem as={ReactRouterLink} to={"/signup"}>
                  Signup
                </MenuItem>
              )}

              {isAuthenticated() ? (
                <MenuItem
                  onClick={() => {
                    logout();
                    window.location.href = "/";
                  }}
                >
                  Logout
                </MenuItem>
              ) : null}
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}
