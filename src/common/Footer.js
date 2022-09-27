import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import desigh from "./Footer.module.css";
import { textAlign } from "@mui/system";
// import MenuIcon from "@mui/icons-material/Menu";

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }} className={desigh.footer}>
      <AppBar position="static">
        <Toolbar variant="dense">
          {/* <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}

          <Typography>Footer</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
