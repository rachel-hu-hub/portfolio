import React from "react";
import { Box, Typography } from "@mui/material";

export default function MediumVerticalProject({
  image = "",
  title = "Project",
  description = "Description",
  color = "neutral.main",
  textColor = "neutral.contrastText",
  margin = 2,
}) {
  return (
    <Box
      flexDirection={"column"}
      width={400}
      height={560}
      bgcolor={color}
      display={"flex"}
      alignItems={"center"}
      margin={margin}
    >
      <img src={image} alt="Project" style={{ width: 400, height: 370 }} />
      <Box
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        padding={4}
        textAlign={"center"}
      >
        <Typography variant="h2" fontSize={30} color={textColor}>
          {title}
        </Typography>
        <Typography variant="body1" color={textColor}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
