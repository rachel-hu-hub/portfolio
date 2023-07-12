import React from "react";
import { Box, Link, Typography } from "@mui/material";
import LargeHorizontalProject from "../components/LargeHorizontalProject";
import MediumVerticalProject from "../components/MediumVerticalProject";
import SmallVerticalProject from "../components/SmallVerticalProject";

import EatTogetherDemo from "../images/eat-together-demo.png";
import PaxosDemo from "../images/paxos-demo.png";
import PlatformerDemo from "../images/platformer-demo.png";
import SearchDemo from "../images/search-demo.png";
import MapsDemo from "../images/maps-demo.png";

export default function Projects() {
  return (
    <Box>
      <Box height={80} />
      <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
        <Box padding={10}>
          <Typography variant="h1">My Projects</Typography>
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <Link
            href="https://www.eat-together.tech/"
            underline="none"
            target="blank"
          >
            <LargeHorizontalProject
              image={EatTogetherDemo}
              title="Eat Together"
              description="Mobile app & startup connecting students through food, created with React Native"
            />
          </Link>
          <MediumVerticalProject
            image={PaxosDemo}
            title="Paxos Distributed System"
            description="Fault tolerant cluster of servers achieving consensus"
          />
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <SmallVerticalProject
            image={PlatformerDemo}
            title="2D Platformer"
            description="Mobile adventure game built with Unity"
          />
          <SmallVerticalProject
            image={SearchDemo}
            title="Search Engine"
            description="Disk-Based File System Search Engine created with C and C++"
          />
          <SmallVerticalProject
            image={MapsDemo}
            title="Campus Pathfinder"
            description="Finds the shortest path between two buildings at UW"
          />
        </Box>
      </Box>
      <Box height={150} />
    </Box>
  );
}
