import React from "react";
import { Box, Typography } from "@mui/material";
import TravelMap from "../components/TravelMap";
import DetailSection from "../components/DetailSection";

export default function Experiences() {
  return (
    <Box padding={5}>
      <Box height={70} />
      <Box paddingX={30}>
        <Typography variant="h2" display="flex" justifyContent="center">
          Experiences
        </Typography>
        <DetailSection
          position="Founder"
          company="Eat Together"
          description="Created an app startup that connects students from all backgrounds over the
universality of food. Our matching algorithm takes in schedules and interests so
users can spontaneously find others to share a meal. Selected for the Dempsey
Startup Competition Investment Round and released our app to 60+ beta testers,
initiating 100+ meetups around campus."
        />
        <DetailSection
          position="Project Intern"
          company="Parikrma Humanity Foundation"
          description="Collaborated at the grassroots level to empower children from the slums with quality education, nutrition, healthcare, and family care. Delivered research reports to the CEO, helping design an innovative nature site intended to shift paradigms in the Indian education system. Practiced design thinking and experimentation as part of the Grand Challenges Impact Lab. Co-led an initiative to destigmatize mental health in India through a network of parent circles."
        />
        <DetailSection
          position="Software Engineer Intern"
          company="Amplitude"
          description="Developed a content view history feature that interfaced with a database of over 10 million entries. Reviewed and wrote 40+ GitHub pull requests, delivering streamlined updates and improvement reports to the collaboration team."
        />
      </Box>
      <Typography variant="h2" display="flex" justifyContent="center">
        My Travels
      </Typography>
      <TravelMap />
    </Box>
  );
}
