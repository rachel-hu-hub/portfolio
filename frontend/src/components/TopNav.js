import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import WidgetsIcon from "@mui/icons-material/Widgets";

export default function TopNav() {
  return (
    <AppBar color="secondary" position="fixed">
      <Toolbar>
        <IconButton
          href="http://localhost:3000/"
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <WidgetsIcon />
        </IconButton>
        <Button color="inherit" href="http://localhost:3000/">
          Home
        </Button>
        <Button color="inherit" href="http://localhost:3000/about">
          About
        </Button>
        <Button color="inherit" href="http://localhost:3000/experiences">
          Experiences
        </Button>
        <Button color="inherit" href="http://localhost:3000/education">
          Education
        </Button>
        <Button color="inherit" href="http://localhost:3000/hobbies">
          Hobbies
        </Button>
      </Toolbar>
    </AppBar>
  );
}
