import React from "react";
import Volunteers from "./Volunteer/volunteerNew";
import { Box, background } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box width={600} color="white" bgColor="beige">
      <Volunteers />
    </Box>
  );
};

export default Home;
