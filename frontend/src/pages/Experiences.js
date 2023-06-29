import React from "react";
import { Box, Typography } from "@mui/material";
import TravelMap from "../components/TravelMap";
import WorkSection from "../components/WorkSection";

export default function Experiences() {
  return (
    <Box padding={5}>
      <Box height={70} />
      <Typography variant="h2" display="flex" justifyContent="center">
        Experiences
      </Typography>
      <WorkSection />
      <Typography variant="h2" display="flex" justifyContent="center">
        My Travels
      </Typography>
      <TravelMap />
    </Box>
  );
}
