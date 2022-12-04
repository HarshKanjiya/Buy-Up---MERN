import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);
  const Helper = () => {
    dispatch(logout({}));
    navigate('/')
  };
  return (
    <>
      {isAuthenticated ? (
        <Btn onClick={Helper}>
          <LoginIcon />
          <p>log out</p>
        </Btn>
      ) : (
        <Btn
          onClick={() => {
            navigate("/login");
          }}
        >
          <LoginIcon />
          <p>log in</p>
        </Btn>
      )}
    </>
  );
};

export default LogOut;

const Btn = styled(Button)`
  display: flex;
  gap: 1rem;
  color: white;
  background-image: linear-gradient(90deg, #2bb594, #01b277);
  p {
    flex: 1;
    text-align: left;
  }
`;
