import React from "react";
import { Box, Typography } from "@mui/material";

export default function RightImageSection({
  image = "",
  title = "Company",
  subtitle = "Subtitle",
  description = "Description",
  padding = 10,
}) {
  return (
    <Box display={"flex"} justifyContent={"center"} padding={padding}>
      <Box flexDirection={"column"}>
        <Typography variant="h2" color={"primary.contrastText"}>
          {title}
        </Typography>
        <Typography
          variant="body1"
          fontSize={30}
          color={"primary.contrastText"}
        >
          {subtitle}
        </Typography>
        <Box height={30}></Box>
        <Typography variant="body1" color={"neutral.main"}>
          {description}
        </Typography>
      </Box>
      <img
        src={image}
        alt="Experience"
        style={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          marginInline: 80,
          alignSelf: "center",
        }}
      />
    </Box>
  );
}
