import React from "react";
import { Typography, Box } from "@mui/material";

const Hobbies = () => {
  const hobbies = [
    {
      name: "Skateboarding",
      image:
        "https://static.vecteezy.com/system/resources/previews/011/035/218/original/skateboard-3d-pose-model-illustration-free-png.png",
    },
    {
      name: "Running",
      image:
        "https://cdn.pixabay.com/photo/2014/04/03/10/50/run-311447_640.png",
    },
    {
      name: "Cooking",
      image:
        "https://www.pngall.com/wp-content/uploads/12/Cooking-PNG-Free-Image.png",
    },
  ];

  return (
    <Box
      display="flex"
      flexDirection={"column"}
      justifyContent="center"
      alignItems="center"
    >
      <Box height={40} />
      <Typography variant="h1" margin={7}>
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
