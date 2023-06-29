import { useEffect, useState } from "react";
import axios from "axios";
import Jinja from "./Jinja";

// Powered using Jinja template

export default function WorkSection(props) {
  const [HTML, setHTML] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/work_section");
        const { rendered_data } = response.data;
        setHTML(rendered_data);
      } catch (error) {
        console.error("Jinja template integration error:", error);
      }
    };
    fetchData();
  }, []);

  return Jinja(HTML);
}
