import React, { useState, useEffect } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Experiences from "./pages/Experiences";
import Hobbies from "./pages/Hobbies";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Button, ThemeProvider } from "@mui/material";
import TopNav from "./components/TopNav";
import { createTheme } from "@mui/material/styles";

export default function App() {
  /*
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/home").then(
      res => res.json()
    ).then(
      unpacked => {
        setData(unpacked)
      }
    )
  }, [])
  */

  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" flexDirection="column">
        <TopNav />

        {/* Handle Navigation */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/hobbies" element={<Hobbies />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

// Website primary colors
const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#391B56",
      contrastText: "#fff",
    },
    secondary: {
      main: "#B78CE1",
      contrastText: "#fff",
    },
    neutral: {
      main: "#E8DEF1",
      contrastText: "#3B1854",
    },
  },
});
