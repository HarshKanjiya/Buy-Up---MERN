import Header from "../../layouts/Header";

import LoadingScreen from "../../components/LoadingScreen";
import UploadIcon from "@mui/icons-material/Upload";
import IconButton from "@mui/material/IconButton";
import { Input } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { Alert } from "../../components/Alert";
import {
  clearErrors,
  loadUser,
  updateProfile,
} from "../../../redux/slices/userSlice";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Btn,
  BtnUpload,
  Container,
  Left,
  Right,
  RightItem,
  TextFields,
  TitleUpdate,
  Wrapper,
} from "./updateProfile.styles";

export const UpdateProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, userInfo, error, isUpdated, underUpdate, isAuthenticated } =
    useSelector((state) => state.user);
  const [newUserInfo, setNewUserInfo] = useState({
    name: userInfo && userInfo.name,
    email: userInfo && userInfo.email,
    avatar: userInfo && userInfo.avatar.url,
  });
  const [avatarPrev, setAvatarPrev] = useState(userInfo && userInfo.avatar.url);
  const [fileName, setFileName] = useState("choose Avatar");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
    if (!underUpdate) {
      navigate("/profile");
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
  }, [error, underUpdate, isUpdated, userInfo]);

  const HelperUpdateBtn = () => {
    const myForm = new FormData();
    myForm.set("name", newUserInfo.name);
    myForm.set("email", newUserInfo.email);
    myForm.set("avatar", avatarPrev);
    dispatch(updateProfile(myForm));
  };

  const HelperImageUpload = (event) => {
    setFileName(event.target.files[0].name);
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = function () {
      if (reader.readyState === 2) {
        setAvatarPrev(reader.result);
        setNewUserInfo({ ...newUserInfo, avatar: reader.result });
      }
    };
  };

  if (userInfo) {
    return (
      <>
        <Header />
        <Wrapper>
          <Container>
            <Left>
              <div className="Left-imgWrapper">
                <img src={avatarPrev} alt={userInfo.name} />
              </div>

              <Btn variant="contained" component="label">
                <UploadIcon />
                {fileName}
                <input
                  type="file"
                  name="avatar"
                  accept="image/*"
                  onChange={(event) => {
                    HelperImageUpload(event);
                  }}
                  required
                  hidden
                />
              </Btn>
            </Left>
            <Right>
              <RightItem>
                <TextFields
                  variant="standard"
                  label="Name"
                  value={userInfo.name}
                  onChange={(event) => {
                    setNewUserInfo({
                      ...newUserInfo,
                      name: event.target.value,
                    });
                  }}
                />
                <TextFields
                  variant="standard"
                  label="Email"
                  value={userInfo.email}
                  onChange={(event) => {
                    setNewUserInfo({
                      ...newUserInfo,
                      email: event.target.value,
                    });
                  }}
                />
              </RightItem>
            </Right>
            <TitleUpdate>
                <p>Update PROFILE</p>
            </TitleUpdate>
          <BtnUpload>
            <Btn variant="contained">
                <UploadIcon/>
                upload
            </Btn>
          </BtnUpload>
          </Container>
        </Wrapper>
      </>
    );
  }
};
