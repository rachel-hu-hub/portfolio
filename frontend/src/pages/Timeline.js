import React from "react";
import { Box, Typography } from "@mui/material";
import Form from "../components/Form";
import TimelineDisplay from "../components/TimelineDisplay";

export default function Timeline() {
  return (
    <Box>
      <Box height={80} />
      <Box
        bgcolor={"neutral.main"}
        padding={5}
        justifyContent={"center"}
        display={"flex"}
      >
        <Typography variant="h1" color={"neutral.contrastText"}>
          Our Timeline
        </Typography>
      </Box>
      <Form />
      <TimelineDisplay />
    </Box>
  );
}
