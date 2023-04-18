import React from "react";
import AppBar from "@mui/material/AppBar";
import { Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        {/* sx={{ bgcolor: "green" }} */}
        <AppBar position="sticky" style={{ background: "#c4b5fd" }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              zenLife
            </Typography>
            <Link to="/">
              <Button color="inherit">Home</Button>
            </Link>
            <Link to="/signup">
              <Button color="inherit">signup</Button>{" "}
            </Link>
            <Link to="/login">
              <Button color="inherit">signin</Button>{" "}
            </Link>
            {/* <Link to="/profile">
              <Button color="inherit">Profile</Button>{" "}
            </Link> */}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
