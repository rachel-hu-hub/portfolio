import React from "react";
import { Box, Typography } from "@mui/material";
import Form from "../components/Form";
import TimelineDisplay from "../components/TimelineDisplay";

export default function Timeline() {
  return (
    <Box>
      <Box height={80} />
      <Typography variant="h1">TEST</Typography>
      <Form />
      <TimelineDisplay />
    </Box>
  );
}
