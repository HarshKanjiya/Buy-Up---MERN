import Header from "../../layouts/Header";

import LoadingScreen from "../../components/LoadingScreen";
import UploadIcon from "@mui/icons-material/Upload";
import { Alert } from "../../components/Alert";
import {
  clearErrors,
  loadUser,
  updateProfile,
  updateProfileReset,
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
      dispatch(updateProfileReset())
      dispatch(loadUser({}));
    }
    if (!underUpdate) {
      navigate("/profile");
    }
  }, [error, underUpdate, isUpdated, userInfo]);

  const HelperUpdateBtn = () => {
    const myForm = new FormData();
    let Temp = userInfo && userInfo.avatar.url
    if(Temp === avatarPrev){
      Temp = ''
    }
    else{
      Temp = avatarPrev
    }
    myForm.set("name", newUserInfo.name);
    myForm.set("email", newUserInfo.email);
    myForm.set("avatar", Temp);
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
      <motion.div
      key={"updateProfilePage"}
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
                    value={newUserInfo.name}
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
                    value={newUserInfo.email}
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
                <Btn variant="contained" onClick={HelperUpdateBtn}>
                  <UploadIcon />
                  upload
                </Btn>
              </BtnUpload>
            </Container>
          )}
        </Wrapper>
      </motion.div>
    );
  }
};
