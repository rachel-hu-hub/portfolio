import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, ThemeProvider } from "@mui/material";
import TopNav from "./components/TopNav";
import { createTheme } from "@mui/material/styles";

import "@fontsource/pacifico";
import "@fontsource/lato";
import "@fontsource/lato/400.css";
import "@fontsource/lato/400-italic.css";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" flexDirection="column">
        <TopNav />

        {/* Handle Navigation */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

// Website primary colors
const theme = createTheme({
  typography: {
    fontFamily: "Lato", // Default font for all variants
    h1: {
      fontFamily: "Pacifico",
      fontSize: "5rem",
      textTransform: "none",
    },
    h2: {
      fontFamily: "Pacifico",
      fontSize: "3rem",
      textTransform: "none",
    },
    h3: {
      fontFamily: "Lato",
      fontSize: "1.5rem",
      textTransform: "none",
      fontWeight: "bold",
      textDecoration: "underline",
    },
    body1: {
      fontFamily: "Lato",
      fontSize: "1.5rem",
      textTransform: "none",
    },
  },
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
