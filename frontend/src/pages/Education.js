import React from "react";
import { Box, Typography } from "@mui/material";
import uw from "../images/uw.jpeg";

export default function Education() {
  return (
    <Box padding={5}>
      <Box height={10} />
      <Typography
        variant="h3"
        fontSize={70}
        display="flex"
        justifyContent="center"
        margin={8}
      >
        My Education
      </Typography>
      <Box display={"flex"} flexDirection={"row"}>
        <img src={uw} alt="University of Washington" width={700} />
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          margin={5}
        >
          <Typography variant="h3">University of Washington</Typography>
          <Typography variant="h4" fontStyle="italic">
            2021-2025, B.S Computer Science
          </Typography>
          <Typography variant="h6" margin={5}>
            Coursework: Artificial Intelligence, Distributed Systems, Data
            Ethics, Machine Learning, Systems Programming, Data Structures &
            Parallelism, Software Design, Hardware Software Interface, Intro
            Embedded Systems
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
