import React from "react";
import { Box, Typography } from "@mui/material";
import banner from "../images/about-header.png";

export default function About() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      bgcolor={"neutral.main"}
      flexDirection="column"
      variant="h1"
    >
      <Box bgcolor={"neutral.main"} height={70} />
      <img src={banner} alt="About Me" style={{ width: "50%" }} />
      <Box
        bgcolor={"primary.main"}
        paddingTop={10}
        paddingBottom={10}
        paddingLeft={22}
        paddingRight={22}
      >
        <Typography variant="h5" component="div" color={"primary.contrastText"}>
          Hey, I'm Rachel Hu, a computer science student who loves building
          things with code. Alongside my tech background, I have a passion for
          policy research and political engagement.
          <br />
          <br />
          As the founder of Eat Together, a Seattle startup, I created an app
          that connected students through food and meaningful conversations at
          over 100 meetups on campus.
          <br />
          <br />
          During my software engineering internship at Amplitude, I developed a
          privacy-focused content view history feature and collaborated on
          streamlining updates with my team. At the Parikrma Humanity Foundation
          in Bangalore, I researched and implemented programs to support
          underprivileged children and contributed to designing educational
          initiatives.
          <br />
          <br />
          Currently pursuing my Computer Science degree at the University of
          Washington, I'm driven by attention to detail and a desire to make a
          positive impact through coding.
        </Typography>
      </Box>
    </Box>
  );
}
