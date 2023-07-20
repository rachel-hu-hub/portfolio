import { useEffect, useState } from "react";
import axios from "axios";
import Jinja from "./Jinja";
import { Box, Typography } from "@mui/material";

// Powered using Jinja template

export default function Form(props) {
  const [HTML, setHTML] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/timeline_form");
        const { rendered_data } = response.data;
        setHTML(rendered_data);
      } catch (error) {
        console.error("Jinja template integration error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Box
      padding={5}
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Typography variant="h2" padding={5} color={"neutral.contrastText"}>
        Add a Post
      </Typography>
      {Jinja(HTML)}
    </Box>
  );
}
