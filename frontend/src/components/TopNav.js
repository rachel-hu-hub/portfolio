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
          href="/"
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <WidgetsIcon />
        </IconButton>
        <Button color="inherit" href="/">
          Home
        </Button>
        <Button color="inherit" href="/about">
          About
        </Button>
        <Button color="inherit" href="/experiences">
          Experiences
        </Button>
        <Button color="inherit" href="/education">
          Education
        </Button>
        <Button color="inherit" href="/hobbies">
          Hobbies
        </Button>
      </Toolbar>
    </AppBar>
  );
}
