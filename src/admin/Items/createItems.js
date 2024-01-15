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
import NavBarAdmin from "../../pages/utility/NavbarAdmin";

export default function CreateItems() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    item_name: "",
    item_desc: "",
    item_imgLink: "",
    quantity: "",
  });
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:3000/inventory/create", formData, {
          headers: { "Content-Type": "application/json" },
        })
        .then(function (response) {
          if (response.status === 201) {
            toast({
              title: "Item Created!",
              description: "Item has been created successfully!",
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
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <NavBarAdmin />
      <Flex justify="center" align="center" height="100vh" bgColor="wheat">
        <Box w="30%" borderWidth={2} p={10} rounded="xl">
          <form onSubmit={handleSubmit}>
            <Heading fontFamily={"heading"} mb={10} color="Black">
              Create Item
            </Heading>

            <FormControl id="name" mb={0.5}>
              <Text>Item Name</Text>
              <Input
                type="text"
                placeholder="Item Name"
                size="md"
                bgColor="white"
                rounded={"lg"}
                mb={5}
                required
                value={formData.item_name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    item_name: e.target.value,
                  })
                }
              />
            </FormControl>

            <FormControl id="desc" mb={0.5}>
              <Text>Item Description</Text>
              <Input
                type="text"
                placeholder="Item Description"
                size="md"
                bgColor="white"
                rounded={"lg"}
                mb={5}
                required
                value={formData.item_desc}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    item_desc: e.target.value,
                  })
                }
              />
            </FormControl>

            <FormControl id="image">
              <Text>Image Link</Text>
              <Input
                type="text"
                placeholder="Image Link"
                bgColor="white"
                rounded={"lg"}
                required
                mb={5}
                value={formData.item_imgLink}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    item_imgLink: e.target.value,
                  })
                }
              />
            </FormControl>

            <FormControl id="quantity">
              <Text>Quantity</Text>
              <Input
                type="number"
                placeholder="Quantity"
                bgColor="white"
                rounded={"lg"}
                required
                mb={5}
                value={formData.quantity}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    quantity: e.target.value,
                  })
                }
              />
            </FormControl>

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
        </Box>
      </Flex>
    </ChakraProvider>
  );
}
