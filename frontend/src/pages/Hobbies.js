import React from "react";
import { Typography, Box } from "@mui/material";
import skateboard from "../images/skateboard.png";
import running from "../images/running.png";
import cooking from "../images/cooking.png";

const Hobbies = () => {
  const hobbies = [
    {
      name: "Skateboarding",
      image: skateboard,
    },
    {
      name: "Running",
      image: running,
    },
    {
      name: "Cooking",
      image: cooking,
    },
  ];

  return (
    <Box
      display="flex"
      flexDirection={"column"}
      justifyContent="center"
      alignItems="center"
      bgcolor={"primary.main"}
    >
      <Box height={40} />
      <Typography variant="h1" margin={7} color={"primary.contrastText"}>
        Hobbies
      </Typography>
      {hobbies.map((hobby, index) => (
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          bgcolor={"neutral.main"}
          width={"100vw"}
        >
          <Typography variant="h3" paddingX={10}>
            {hobby.name}
          </Typography>
          <img src={hobby.image} alt={hobby.name} width={200} height={200} />
        </Box>
      ))}
    </Box>
  );
};

export default Hobbies;
