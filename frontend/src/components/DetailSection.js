import { useEffect, useState } from "react";
import axios from "axios";
import Jinja from "./Jinja";
import { Box } from "@mui/material";

// Powered using Jinja template

export default function DetailSection({
  position = "Position",
  company = "Company",
  description = "Description",
  image_link = "",
}) {
  const [HTML, setHTML] = useState();
  const data = {
    position: position,
    company: company,
    description: description,
    image_link: image_link,
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("/detail_section", data);
        const { rendered_data } = response.data;
        setHTML(rendered_data);
      } catch (error) {
        console.error("Jinja template integration error:", error);
      }
    };
    fetchData();
  });

  return <Box padding={5}>{Jinja(HTML)}</Box>;
}
