import "./button.css";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const PrimaryBtn = styled(Button)(() => ({
  color: "#fff",
  backgroundColor: `red`,
  "&:hover": {
    backgroundColor: `red`,
  },
  textTransform: "none",
}));

import React from "react";

export const PrimaryButton = ({ title }) => {
  return <PrimaryBtn>{title}</PrimaryBtn>;
};
