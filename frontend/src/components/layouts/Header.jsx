import { Link } from "react-router-dom";
import NotesIcon from "@mui/icons-material/Notes";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import logo from "../../assets/images/logoBtn.png";
import { useState } from "react";
import { Button, Divider, Drawer, IconButton } from "@mui/material";
import styled from "@emotion/styled";
import LogOut from "../components/LogOut";

import HomeIcon from "@mui/icons-material/Home";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import LaptopIcon from "@mui/icons-material/Laptop";
import PersonIcon from "@mui/icons-material/Person";
import InfoIcon from '@mui/icons-material/Info';

const Header = () => {
  const [sideBarVisibility, setSideBarVisibility] = useState(false);

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
        <Link to="/" style={{ padding: 2 }}>
          <ShoppingCartIcon style={{ height: "1.3rem" }} />
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
          <SideBarElements>
            <SideBarEle>
              <div className="SideBarEle-imgWrapper">
                <img src={logo} alt="avatar" />
              </div>
              <p>NAME</p>
            </SideBarEle>
          </SideBarElements>
          <Divider />
          {/* user s */}
          <SideBarElements>
          <p className="SideBarElements-header">personal</p>
            <SideBarEle>
              <PersonIcon />
              <p>profile</p>
            </SideBarEle>
            <SideBarEle>
              <ShoppingCartIcon />
              <p>cart</p>
            </SideBarEle>
          </SideBarElements>
          <Divider />
          {/*  app s */}
          <SideBarElements>
            <p className="SideBarElements-header">overview</p>
            <SideBarEle variant="outlined">
              <HomeIcon />
              <p>home</p>
            </SideBarEle>

            <SideBarEle variant="outlined">
              <PhonelinkIcon />
              <p>all</p>
            </SideBarEle>

            <SideBarEle variant="outlined">
              <SmartphoneIcon />
              <p>phone</p>
            </SideBarEle>

            <SideBarEle variant="outlined">
              <LaptopIcon />
              <p>laptop</p>
            </SideBarEle>
          </SideBarElements>
          <Divider />
          <SideBarElements>
          <p className="SideBarElements-header">personal</p>
            <SideBarEle>
              <InfoIcon/>
              <p>about me</p>
            </SideBarEle>
          </SideBarElements>
          <Divider/>
          {/* logout */}
          <SideBarElements>
            <LogOut />
          </SideBarElements>
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
  overflow: hidden;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:after {
    content: "";
    height: 100%;
    width: 3px;
    position: absolute;
    z-index: 999;
    right: 0;
    top: 0;
    background-image: linear-gradient(90deg, #2bb594, #01b277);
  }
`;

const SideBarElements = styled.div`
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
