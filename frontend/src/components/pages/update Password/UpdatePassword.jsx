import React from "react";

import Header from "../../layouts/Header";

import LoadingScreen from "../../components/LoadingScreen";
import UploadIcon from "@mui/icons-material/Upload";
import {
  clearErrors,
  loadUser,
  updateProfile,
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

const UpdatePassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, userInfo, error, isUpdated, underUpdate, isAuthenticated } =
    useSelector((state) => state.user);
  const [newUserInfo, setNewUserInfo] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    seePass1:false,
    seePass2:false
  });

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
    if (error) {
      Alert({
        title: "Update Failed!",
        icon: "error",
        text: error,
      });
      dispatch(clearErrors());
    }
    if (isUpdated) {
      Alert({
        title: "success",
        text: "your profile haas been Updated!",
      });
      dispatch(loadUser({}));
    }
    if (!underUpdate) {
      navigate("/profile");
    }
  }, [error, underUpdate, isUpdated, userInfo]);

  const HelperUpdateBtn = () => {
    dispatch({
      oldPassword: newUserInfo.oldPassword,
      newPassword: newUserInfo.newPassword,
      confirmPassword: newUserInfo.confirmPassword,
      seePass1: false,
      seePass2: false,
    });
  };

  if (userInfo) {
    return (
      <>
        <Header />
        <Wrapper>
          {loading ? (
            <LoadingScreen />
          ) : (
            <Container>
              <Center>
              <>
                <TextFields
                  variant="standard"
                  label="current password"
                  type={ userInfo.seePass1 ? "text" : "password" }
                  value={newUserInfo.oldPassword}
                  onChange={(event) => {
                    setNewUserInfo({
                      ...newUserInfo,
                      oldPassword: event.target.value,
                    });
                  }}
                />
                 <div
                    onClick={() => {
                      setNewUserInfo({
                        ...userInfo,
                        seePass1: !userInfo.seePass1,
                      });
                    }}
                  >
                    {newUserInfo.seePass1 ? <Visibility /> : <VisibilityOff />}
                  </div>
              </>
                <>
                  <TextFields
                    variant="standard"
                    label="new password"
                    type={ userInfo.seePass1 ? "text" : "password" }
                    value={newUserInfo.newPassword}
                    onChange={(event) => {
                      setNewUserInfo({
                        ...newUserInfo,
                        newPassword: event.target.value,
                      });
                    }}
                  />
                  <div
                    onClick={() => {
                      setNewUserInfo({
                        ...userInfo,
                        seePass2: !userInfo.seePass2,
                      });
                    }}
                  >
                    {newUserInfo.seePass2 ? <Visibility /> : <VisibilityOff />}
                  </div>
                </>
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
                  <UploadIcon />
                  upload
                </Btn>
              </Center>
            </Container>
          )}
        </Wrapper>
      </>
    );
  }
};

export default UpdatePassword;

const Center = styled.div`
  padding: 1rem;
  min-width: 300px;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 9px;
`;
