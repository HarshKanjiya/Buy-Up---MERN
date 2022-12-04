import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";
import LoginIcon from "@mui/icons-material/Login";

const LogOut = () => {
  return (
    <>
      <Btn>
        <LoginIcon />
        <p>logout</p>
      </Btn>
    </>
  );
};

export default LogOut;

const Btn = styled(Button)`
  display: flex;
  gap: 1rem;
  color:white;
  background-image: linear-gradient(90deg, #2bb594, #01b277);
  p{
    flex:1;
    text-align: left;
  }
`;
