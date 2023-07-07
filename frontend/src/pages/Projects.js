import React from "react";
import { Box, Typography } from "@mui/material";
import LargeHorizontalProject from "../components/LargeHorizontalProject";
import EatTogetherDemo from "../images/eat-together-demo.png";

export default function Projects() {
  return (
    <Box>
      <Box height={80} />
      <Box
        padding={10}
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Typography variant="h1">My Projects</Typography>
      </Box>
      <LargeHorizontalProject
        image={EatTogetherDemo}
        title="Eat Together"
        description="Mobile app connecting students through food"
      />
    </Box>
  );
}
