"use client";

import { Box, Container } from "@mui/material";
import { styled } from "@mui/system";

const NavbarWrapper = styled(Box)({
  height: "10vh",
  backgroundColor: "rgb( 9, 46, 32)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderBottom: "1px solid black",
  borderColor: "rgba(250, 250, 250, 0.8)",
  boxShadow: "0px 0px 8px rgba(250, 250, 250, 0.8)",
  color: "white",
});

const Navbar = styled(Container)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const AppName = styled("h1")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
});

export { NavbarWrapper, Navbar };
