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
} from "@chakra-ui/react";
import axios from "axios";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { CiFilter } from "react-icons/ci";

export default function ManageVolunteers() {
  const [pastVolunteer, setPastVolunteer] = useState([]);
  const [upVolunteer, setUpVolunteer] = useState([]);
  const [filteredupVol, setFilteredupVol] = useState([]);
  const [filteredpastVol, setFilteredpastVol] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const toast = useToast();
  const [sessId, setSessId] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3000/volunteer/getAllforAdmin")
      .then(function (response) {
        setPastVolunteer(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/volunteer/getUpcomingforAdmin")
      .then(function (response) {
        setUpVolunteer(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    // Update the filtered students whenever the searchQuery changes
    const filtered = upVolunteer.filter(
      (vol) =>
        vol.vSession.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vol.vSession.description
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase())
    );
    const pfiltered = pastVolunteer.filter(
      (vol) =>
        vol.vSession.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vol.vSession.description
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase())
    );
    setFilteredupVol(filtered);
    setFilteredpastVol(pfiltered);
  }, [searchQuery, pastVolunteer, upVolunteer]);

  const clickDelete = (sessionId) => {
    setSessId(sessionId);
    onOpen();
  };

  const confirmDelete = () => {
    axios
      .get(`http://localhost:3000/volunteer/delete/${sessId}`)
      .then(function (response) {
        if (response.status === 200) {
          try {
            toast({
              title: "Successful",
              description: `Volunteer session is successfully deleted !`,
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
          } catch (e) {
            console.log(e);
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    onClose();
  };

  const handleEdit = (sessio_id) => {
    window.location.href = `/admin/editVolunteer/${sessio_id}`;
  };

  return (
    <ChakraProvider>
      <Flex direction="column" align="center" bgColor="wheat">
        <Heading m={3}>Manage Volunteers</Heading>
        <Box mb={4}>
          <Stack direction="row">
            <Input
              bgColor="gray.200"
              textAlign="center"
              w="500px"
              type="text"
              placeholder="Search by title or description"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <CiFilter size={30} />
          </Stack>
        </Box>
        <Heading fontFamily="monospace">Upcoming Volunteer</Heading>
        <TableContainer>
          <Table variant="simple" borderWidth="1px" borderColor="black">
            <Thead>
              <Th borderWidth="1px" borderColor="black">
                Session ID
              </Th>
              <Th borderWidth="1px" borderColor="black">
                Title
              </Th>
              <Th borderWidth="1px" borderColor="black">
                Description
              </Th>
              <Th borderWidth="1px" borderColor="black">
                Date
              </Th>
              <Th borderWidth="1px" borderColor="black">
                Participant Limit
              </Th>
              <Th borderWidth="1px" borderColor="black">
                Registered Participant
              </Th>
              <Th borderWidth="1px" borderColor="black">
                Action
              </Th>
            </Thead>
            <Tbody>
              {filteredupVol.map((vol, index) => (
                <Tr
                  key={index}
                  bgColor={index % 2 === 0 ? "gray.100" : "white"}
                >
                  <Td borderWidth="1px" borderColor="black">
                    {vol.vSession.id}
                  </Td>
                  <Td borderWidth="1px" borderColor="black">
                    {vol.vSession.name}
                  </Td>
                  <Td borderWidth="1px" borderColor="black">
                    <ul>
                      <li>Description : {vol.vSession.description}</li>
                      <li>Duration : {vol.vSession.duration}</li>
                    </ul>
                  </Td>
                  <Td borderWidth="1px" borderColor="black">
                    {vol.vSession.date}
                  </Td>
                  <Td borderWidth="1px" borderColor="black" textAlign="center">
                    {vol.vSession.u_limit}
                  </Td>
                  <Td borderWidth="1px" borderColor="black">
                    {vol.participants.names ? (
                      <ul>
                        {vol.participants.names
                          .split(",")
                          .map((name, index) => (
                            <li key={index}>{name}</li>
                          ))}
                      </ul>
                    ) : (
                      "No one registered yet"
                    )}
                  </Td>
                  <Td borderWidth="1px" borderColor="black">
                    <Stack direction="row">
                      <Button
                        mr={2}
                        colorScheme="red"
                        onClick={() => {
                          clickDelete(vol.vSession.id);
                        }}
                      >
                        Delete
                      </Button>
                      <Button
                        colorScheme="blue"
                        onClick={() => {
                          handleEdit(vol.vSession.id);
                        }}
                      >
                        Edit
                      </Button>
                    </Stack>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <Heading fontFamily="monospace">Past Volunteer</Heading>
        <TableContainer>
          <Table variant="simple" borderWidth="1px" borderColor="black">
            <Thead>
              <Th borderWidth="1px" borderColor="black">
                Session ID
              </Th>
              <Th borderWidth="1px" borderColor="black">
                Title
              </Th>
              <Th borderWidth="1px" borderColor="black">
                Description
              </Th>
              <Th borderWidth="1px" borderColor="black">
                Date
              </Th>
              <Th borderWidth="1px" borderColor="black">
                Participant Limit
              </Th>
              <Th borderWidth="1px" borderColor="black">
                Registered Participant
              </Th>
            </Thead>
            <Tbody>
              {filteredpastVol.map((vol, index) => (
                <Tr
                  key={index}
                  bgColor={index % 2 === 0 ? "gray.100" : "white"}
                >
                  <Td borderWidth="1px" borderColor="black">
                    {vol.vSession.id}
                  </Td>
                  <Td borderWidth="1px" borderColor="black">
                    {vol.vSession.name}
                  </Td>
                  <Td borderWidth="1px" borderColor="black">
                    <ul>
                      <li>Description : {vol.vSession.description}</li>
                      <li>Duration : {vol.vSession.duration}</li>
                    </ul>
                  </Td>
                  <Td borderWidth="1px" borderColor="black">
                    {vol.vSession.date}
                  </Td>
                  <Td borderWidth="1px" borderColor="black" textAlign="center">
                    {vol.vSession.u_limit}
                  </Td>
                  <Td borderWidth="1px" borderColor="black">
                    {vol.participants.names ? (
                      <ul>
                        {vol.participants.names
                          .split(",")
                          .map((name, index) => (
                            <li key={index}>{name}</li>
                          ))}
                      </ul>
                    ) : (
                      "No one registered yet"
                    )}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete User
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  colorScheme="red"
                  onClick={() => {
                    confirmDelete();
                  }}
                  ml={3}
                >
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Flex>
    </ChakraProvider>
  );
}
