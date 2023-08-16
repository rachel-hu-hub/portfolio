import React from "react";
import { Box, Typography, Button } from "@mui/material";
import TravelMap from "../components/TravelMap";
import LeftImageSection from "../components/LeftImageSection";
import RightImageSection from "../components/RightImageSection";

import IntroPhoto from "../images/intro-photo.png";
import EatTogether from "../images/eat-together.png";
import GCIL from "../images/gcil-logo.png";
import Amplitude from "../images/amplitude-logo.png";
import MLH from "../images/mlh-logo.png";

export default function About() {
  return (
    <Box display={"flex"} bgcolor={"neutral.main"} flexDirection={"column"}>
      <Box bgcolor={"neutral.main"} height={80} />
      <Box
        display={"flex"}
        bgcolor={"neutral.main"}
        flexDirection={"column"}
        paddingX={15}
        paddingY={10}
      >
        <Box display={"flex"} justifyContent={"center"}>
          <img
            src={IntroPhoto}
            alt="Me on a swing."
            style={{ width: "33%", height: "fixed", alignSelf: "center" }}
          />
          <Box marginX={5} flexDirection={"column"}>
            <Typography
              variant="body1"
              fontSize={60}
              color={"neutral.contrastText"}
            >
              Hi, I'm Rachel Hu and I love building things with code!
            </Typography>
            <Typography variant="body1" color={"neutral.contrastText"}>
              <br />
              I'm entering my 3rd year in Computer Science at the University of
              Washington and have built strong skills in <b>communication</b>,
              <b> leadership</b>, and <b>writing quality code</b>.
            </Typography>
            <Typography variant="body1" color={"neutral.contrastText"}>
              <br />I aspire to continue growing as a software engineer and
              creating cool things! While you are here, be sure to say hi:
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              style={{ width: 350, height: 80, marginTop: 50 }}
              target="blank"
              href="https://www.linkedin.com/in/rachehu/"
            >
              <Typography variant="body1">
                Get in touch on Linkedin {">"}{" "}
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        bgcolor={"primary.main"}
        flexDirection={"column"}
        padding={10}
      >
        <Typography color={"neutral.main"} variant="h1">
          My Journey
        </Typography>
        <Box height={50} />
        <LeftImageSection
          image={EatTogether}
          title="Eat Together"
          subtitle="Founder | Jan 2022 - Present | Seattle"
          description="Created an app startup that connects students from all backgrounds over the
universality of food. Our matching algorithm takes in schedules and interests so
users can spontaneously find others to share a meal. Selected for the Dempsey
Startup Competition Investment Round, and released our app to 60+ beta testers
initiating 100+ meetups around campus."
        />
        <RightImageSection
          image={Amplitude}
          title="Amplitude"
          subtitle="Software Engineer Intern | Jun - Sep 2022 | San Francisco"
          description="Developed a content view history feature that interfaced with a database of over 10 million entries. Reviewed and wrote 40+ GitHub pull requests, delivering streamlined updates and improvement reports to the collaboration team."
        />
        <LeftImageSection
          image={GCIL}
          title="Grand Challenges Impact Lab"
          subtitle="Project Intern | Jan - Mar 2023 | Bangalore"
          description="Collaborated at the grassroots level to empower children from the slums with quality education, nutrition, healthcare, and family care. Delivered research reports to the Parikrma Humanity Foundation, helping design an innovative nature site intended to shift paradigms in the Indian education system. Co-led an initiative to destigmatize mental health in India through a network of parent circles."
        />
        <RightImageSection
          image={MLH}
          title="Major League Hacking"
          subtitle="Product Engineering Fellow | Jun 2023 - Present | Remote"
          description="Began an internship alternative to 'learn by doing' and explore Product Engineering with the guidance of mentors from Meta. I'm excited to continue growing and can't wait to see what happens next!"
        />
        <TravelMap />
      </Box>
    </Box>
  );
}
