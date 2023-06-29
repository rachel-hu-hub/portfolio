import { Box, Typography } from "@mui/material";
import React from "react";
import banner from "../images/home-banner.png";

export default function Home() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      bgcolor={"primary.main"}
      width={"100vw"}
      height={"100vh"}
    >
      <img src={banner} alt="My Portfolio" style={{ width: "80%" }} />
    </Box>
  );
}
