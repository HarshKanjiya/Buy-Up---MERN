import React from "react";

import Header from "../../layouts/NavBar/Header";

import LoadingScreen from "../../components/LoadingScreen";
import {
  clearErrors,
  loadUser,
  updatePassword,
  updateProfileReset,
} from "../../../redux/slices/userSlice";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Btn,
  Container,
  TextFields,
  Wrapper,
} from "../update Profile/updateProfile.styles";
import styled from "@emotion/styled";
import { Alert } from "../../components/Alert";

const UpdatePassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, userInfo, error, isUpdated, underUpdate, isAuthenticated } =
    useSelector((state) => state.user);
  const [newUserInfo, setNewUserInfo] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [pass1, setPass1] = useState(false);
  const [pass2, setPass2] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
    if (error) {
      Alert({
        title: "Update Failed!",
        icon: "error",
        text: error,
        timer:3000,
      });
      dispatch(clearErrors());
    }
    if (isUpdated) {
      Alert({
        title: "success",
        text: "your profile haas been Updated!",
      });
      dispatch(updateProfileReset())
      dispatch(loadUser({}));
    }
    if (!underUpdate) {
      navigate("/profile");
    }
  }, [error, underUpdate, isUpdated, userInfo]);

  const HelperUpdateBtn = () => {
    dispatch(
      updatePassword({
        oldPassword: newUserInfo.oldPassword,
        newPassword: newUserInfo.newPassword,
        confirmPassword: newUserInfo.confirmPassword,
      })
    );
  };

  if (userInfo) {
    return (
      <motion.div 
      key={"changePasswordPage"}
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 10, opacity: 0 }}
      transition={{
        duration: 0.4,
        type: "tween",
      }}
      >
        <Header />
        <Wrapper>
          {loading ? (
            <LoadingScreen />
          ) : (
            <Container>
              <Text>Change Password</Text>
              <Center>
                <Wrp>
                  <TextFields
                    variant="standard"
                    label="current password"
                    type={pass1 ? "text" : "password"}
                    value={newUserInfo.oldPassword}
                    onChange={(event) => {
                      setNewUserInfo({
                        ...newUserInfo,
                        oldPassword: event.target.value,
                      });
                    }}
                  />
                  <div
                    className="Wrp-icon"
                    onClick={() => {
                      setPass1(!pass1);
                    }}
                  >
                    {pass1 ? <Visibility /> : <VisibilityOff />}
                  </div>
                </Wrp>
                <Wrp>
                  <TextFields
                    variant="standard"
                    label="new password"
                    type={pass2 ? "text" : "password"}
                    value={newUserInfo.newPassword}
                    onChange={(event) => {
                      setNewUserInfo({
                        ...newUserInfo,
                        newPassword: event.target.value,
                      });
                    }}
                  />
                  <div
                    className="Wrp-icon"
                    onClick={() => {
                      setPass2(!pass2);
                    }}
                  >
                    {pass2 ? <Visibility /> : <VisibilityOff />}
                  </div>
                </Wrp>
                <>
                  <TextFields
                    variant="standard"
                    label="confirm password"
                    value={newUserInfo.confirmPassword}
                    onChange={(event) => {
                      setNewUserInfo({
                        ...newUserInfo,
                        confirmPassword: event.target.value,
                      });
                    }}
                  />
                </>
                <Btn variant="contained" onClick={HelperUpdateBtn}>
                  <Text2>CHANGE</Text2>
                </Btn>
              </Center>
            </Container>
          )}
        </Wrapper>
      </motion.div>
    );
  }
};

export default UpdatePassword;

const Text = styled.h1`
  position: absolute;
  top: 20%;
  font-size: 1.5rem;
  font-weight: 700;
  color: #565656;
`;
const Text2 = styled.div`
  width: 100%;
  text-align: center;
`;
const Wrp = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1rem;

  .Wrp-icon {
    color: #a0a0a0;
  }
`;
const Center = styled.div`
  padding: 1rem;
  min-width: 300px;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 9px;
`;
