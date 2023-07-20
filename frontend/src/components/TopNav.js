import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import profile from "../images/profile.png";
import { Typography } from "@mui/material";

export default function TopNav() {
  return (
    <AppBar color="secondary" position="fixed">
      <Toolbar sx={{ justifyContent: "center" }}>
        <IconButton
          href="/"
          size="large"
          edge="start"
          color="inherit"
          sx={{ mr: 2, marginX: 5 }}
        >
          <img
            src={profile}
            alt="Profile"
            style={{ width: "70px", borderRadius: "50%" }}
          />
        </IconButton>
        <Button color="inherit" href="/about" sx={{ marginX: 2 }}>
          <Typography variant="h3">about</Typography>
        </Button>
        <Button color="inherit" href="/projects" sx={{ marginX: 2 }}>
          <Typography variant="h3">projects</Typography>
        </Button>
        <Button
          color="inherit"
          href="https://drive.google.com/file/d/1rpMEVVHHqUQqU8-mYv1RFVlFRhPMoUYM/view?usp=sharing"
          target="blank"
          sx={{ marginX: 2 }}
        >
          <Typography variant="h3">resume</Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
