import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import NotesIcon from "@mui/icons-material/Notes";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import logo from "../../assets/images/logoBtn.png";
import { useState } from "react";
import { Badge, Button, Divider, Drawer, IconButton } from "@mui/material";
import styled from "@emotion/styled";
import LogOut from "../components/LogOut";

import HomeIcon from "@mui/icons-material/Home";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import LaptopIcon from "@mui/icons-material/Laptop";
import PersonIcon from "@mui/icons-material/Person";
import InfoIcon from "@mui/icons-material/Info";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { motion } from "framer-motion";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const Header = () => {
  const navigate = useNavigate();
  const [sideBarVisibility, setSideBarVisibility] = useState(false);
  const { isAuthenticated, userInfo } = useSelector((state) => state.user);
  const { orderList } = useSelector((state) => state.order);
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="border-b py-3 flex align-middle justify-between backdrop-blur sticky ">
      <div
        className=" ml-8"
        onClick={() => {
          setSideBarVisibility(true);
        }}
      >
        <IconButton sx={{ padding: 0.5 }}>
          <NotesIcon />
        </IconButton>
      </div>

      <Link to="/">
        <div style={{ position: "absolute" }}>
          <HomeBtn>
            <img className="HomeBtnImg" src={logo} alt="Buy Up" />
          </HomeBtn>
        </div>
      </Link>
      <div className=" flex align-middle justify-center mr-8  gap-4 text-gray-500 ">
        <Link to="/cart" style={{ padding: 2 }}>
          <StyledBadge badgeContent={cartItems.length}>
            <ShoppingCartIcon
              style={{
                height: "1.3rem",
                color: cartItems.length !== 0 ? "#2bb594" : null,
              }}
            />
          </StyledBadge>
        </Link>
      </div>

      {/* menu bar */}
      <Drawer
        open={sideBarVisibility}
        onClose={() => {
          setSideBarVisibility(false);
        }}
      >
        <SideBarContentWrapper>
          {isAuthenticated ? (
            <>
              {userInfo ? (
                <motion.div layout>
                  <SideBarElements
                    layout
                    key="profileImg"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                  >
                    <SideBarElePROFILE disableFocusRipple disableRipple>
                      <div className="SideBarEle-imgWrapper">
                        <img
                          src={userInfo.avatar && userInfo.avatar.url}
                          alt="avatar"
                        />
                      </div>
                      <p>{userInfo ? userInfo.name : null}</p>
                    </SideBarElePROFILE>
                  </SideBarElements>
                  <Divider sx={{ paddingTop: 1, marginBottom: 1 }} />
                  {/* user s */}
                  <SideBarElements
                    layout
                    key="personal"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                  >
                    <p className="SideBarElements-header">personal</p>
                    <SideBarEle
                      onClick={() => {
                        navigate("/profile");
                      }}
                    >
                      <PersonIcon />
                      <p>profile</p>
                    </SideBarEle>
                    {userInfo && userInfo.role === "admin" ? (
                      <SideBarEle
                        onClick={() => {
                          navigate("/dashboard");
                        }}
                      >
                        <DashboardIcon />
                        <p>dashboard</p>
                      </SideBarEle>
                    ) : null}
                    <SideBarEle
                      onClick={() => {
                        navigate("/cart");
                      }}
                    >
                      <ShoppingCartIcon
                        style={{
                          color: cartItems.length !== 0 ? "#2bb594" : null,
                        }}
                      />
                      <p
                        style={{
                          color: cartItems.length !== 0 ? "#2bb594" : null,
                        }}
                      >
                        cart
                      </p>
                    </SideBarEle>
                    <SideBarEle
                      onClick={() => {
                        navigate("/orders");
                      }}
                    >
                      <LocalShippingIcon
                        style={{
                          color: orderList.length !== 0 ? "#2bb594" : null,
                        }}
                      />
                      <p
                        style={{
                          color: orderList.length !== 0 ? "#2bb594" : null,
                        }}
                      >
                        orders
                      </p>
                    </SideBarEle>
                  </SideBarElements>
                  <Divider sx={{ paddingTop: 1 }} />
                </motion.div>
              ) : null}
            </>
          ) : null}

          {/*  app s */}
          <SideBarElements
            layout
            key="overview"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <p className="SideBarElements-header">overview</p>
            <SideBarEle
              onClick={() => {
                navigate("/");
              }}
            >
              <HomeIcon />
              <p>home</p>
            </SideBarEle>

            <SideBarEle
              onClick={() => {
                navigate("/products");
              }}
            >
              <PhonelinkIcon />
              <p>all products</p>
            </SideBarEle>

            {/* <SideBarEle onClick={() => {}}>
              <SmartphoneIcon />
              <p>phone</p>
            </SideBarEle>

            <SideBarEle onClick={() => {}}>
              <LaptopIcon />
              <p>laptop</p>
            </SideBarEle> */}
          </SideBarElements>
          <Divider />
          <SideBarElements
            layout
            key="devSection"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <p className="SideBarElements-header">Developer</p>
            <SideBarEle
              onClick={() => {
                navigate("/aboutme");
              }}
            >
              <InfoIcon />
              <p>about me</p>
            </SideBarEle>
          </SideBarElements>
          {/* logout */}

          <>
            <Divider />
            <SideBarElements
            layout
            key="logout Btn"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            >
              <LogOut />
            </SideBarElements>
          </>
        </SideBarContentWrapper>
      </Drawer>
    </div>
  );
};

export default Header;

const HomeBtn = styled.div`
  .HomeBtnImg {
    height: 2rem;
    width: auto;
    position: relative;
  }

  &:after {
    height: 1.7rem;
    width: 1.7rem;
    content: "";
    position: absolute;
    left: 2px;
    top: 2px;
    border-radius: 7px;
    background-color: #0c3324;
    z-index: -1;
    transition: 300ms;
  }

  &:hover {
    &::after {
      background-color: white;
    }
  }
`;
const SideBarContentWrapper = styled.div`
  height: 100vh;
  min-width: min(230px, 70vw);
  position: relative;
  overflow-x: hidden;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  &::-webkit-scrollbar {
    width: 0 !important;
  }

  border-right: 4px solid #2bb594;
`;
const SideBarElements = styled(motion.div)`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: 1rem;

  .SideBarElements-header {
    color: #b6b6b6;
    font-size: 0.8rem;
  }
`;
const SideBarEle = styled(Button)`
  display: flex;
  gap: 1rem;
  background-color: white;
  color: #343434;
  border: none;
  transition: 300ms;

  p {
    flex: 1;
    text-align: left;
  }
  &:hover {
    border: none;
    background-color: white;
  }
`;
const SideBarElePROFILE = styled(Button)`
  display: flex;
  gap: 1rem;
  background-color: white;
  color: #343434;
  border: none;
  transition: 300ms;
  cursor: default;
  .SideBarEle-imgWrapper {
    height: 3rem;
    width: 3rem;
    display: grid;
    place-content: center;
    overflow: hidden;
    border-radius: 50%;
    img {
      height: 3.5rem;
      width: 3.5rem;
    }
  }
  p {
    flex: 1;
    text-align: left;
  }
  &:hover {
    border: none;
    background-color: white;
  }
`;
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    border: "1px solid white",
    backgroundColor: "#01b277",
    color: "white",
    fontSize: "0.7rem",
    right: 0,
    top: 0,
  },
}));
