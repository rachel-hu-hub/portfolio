import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
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
      <TopNav />

      {/* Handle Navigation */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
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
      main: "#EF9B0F",
      contrastText: "#fff",
    },
  },
});
