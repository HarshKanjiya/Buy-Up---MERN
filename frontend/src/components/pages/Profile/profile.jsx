import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../../layouts/NavBar/Header";
import Footer from "../../layouts/Footer";
import {
  Container,
  Left,
  LeftFoot,
  LeftFootItem,
  LeftFootItemDlt,
  OrdersBtn,
  Right,
  RightItem,
  Wrapper,
} from "./profile.styles";
import KeyIcon from "@mui/icons-material/Key";
import EditIcon from "@mui/icons-material/Edit";
import { loadUser, setUnderUpdate } from "../../../redux/slices/userSlice";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, isAuthenticated, userInfo, error } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(loadUser({}));
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate]);

  const ChangeFormat = (date) => {
    let DateList = date.slice(0, 10).split("-").reverse();
    let DateString = "";
    const monthList = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    DateString =
      "" + DateList[0] + " " + monthList[DateList[1] - 1] + " , " + DateList[2];
    return DateString;
  };

  if (userInfo) {
    return (
      <motion.div
        key={"profilePage"}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          type: "tween",
        }}
      >
        <Header />
        <Wrapper>
          <Container>
            <Left>
              <div className="Left-imgWrapper">
                <img src={userInfo.avatar.url} alt={userInfo.name} />
              </div>
              <LeftFoot>
                <LeftFootItem
                  variant="contained"
                  onClick={() => {
                    dispatch(setUnderUpdate());
                    navigate("/profile/update");
                  }}
                >
                  <EditIcon fontSize="small" /> update
                </LeftFootItem>
                <LeftFootItemDlt
                  variant="contained"
                  onClick={() => {
                    dispatch(setUnderUpdate());
                    navigate("/profile/password");
                  }}
                >
                  <KeyIcon fontSize="small" /> Change Password
                </LeftFootItemDlt>
              </LeftFoot>
              <OrdersBtn
                onClick={() => {
                  navigate("/orders");
                }}
              >
                <LocalShippingIcon fontSize="small" /> Orders
              </OrdersBtn>
            </Left>
            <Right>
              <RightItem
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                }}
              >
                <p className="right-name">{userInfo.name}</p>
                <p className="right-beta">{userInfo.email}</p>
              </RightItem>
              <RightItem
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.8,
                }}
              >
                <p className="right-beta">you are Member since</p>
                <p> {ChangeFormat(userInfo.createAt)} </p>
              </RightItem>
            </Right>
          </Container>
        </Wrapper>
        <Footer />
      </motion.div>
    );
  }
};

export default Profile;
