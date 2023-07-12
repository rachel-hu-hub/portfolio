import React from "react";
import { Box, Typography } from "@mui/material";

export default function SmallVerticalProject({
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
      width={356}
      height={450}
      bgcolor={color}
      display={"flex"}
      alignItems={"center"}
      margin={margin}
    >
      <img src={image} alt="Project" style={{ width: 356, height: 290 }} />
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
        <Typography variant="body1" fontSize={20} color={textColor}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
