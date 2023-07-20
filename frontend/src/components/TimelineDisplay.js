import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import LeftImageSection from "./LeftImageSection";
import MLH from "../images/mlh-logo.png";

function TimelineDisplay() {
  const [timelinePosts, setTimelinePosts] = useState([]);

  useEffect(() => {
    fetchTimelinePosts();
  }, []);

  const fetchTimelinePosts = async () => {
    try {
      const response = await axios.get("/api/timeline_post");
      setTimelinePosts(response.data.timeline_posts);
    } catch (error) {
      console.error("Error fetching timeline posts:", error);
    }
  };

  return (
    <Box
      padding={5}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Typography
        variant="h2"
        paddingBottom={10}
        color={"neutral.contrastText"}
      >
        All Posts
      </Typography>
      {timelinePosts.map((post) => (
        <Box display={"flex"} paddingX={10} paddingY={2}>
          <Box flexDirection={"column"}>
            <Typography variant="h2" color={"neutral.contrastText"}>
              {post.name}
            </Typography>
            <Typography
              variant="body1"
              fontSize={30}
              color={"neutral.contrastText"}
            >
              {post.email}
            </Typography>
            <Box height={30}></Box>
          </Box>
          <Typography variant="body1" paddingLeft={15}>
            {post.content}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default TimelineDisplay;
