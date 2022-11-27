import { Link } from "react-router-dom";
import NotesIcon from "@mui/icons-material/Notes";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import logo from "../../assets/images/logo.png";
import { useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import styled from "@emotion/styled";

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
        <img className=" h-7 w-7  " src={logo} alt="Buy Up" />
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
        }}>
          <SideBarContentWrapper>
            <p>hihihi</p>
            <p>hihihi</p>
            <p>hihihi</p>
          </SideBarContentWrapper>
        </Drawer>
    </div>
  );
};

export default Header;


const SideBarContentWrapper = styled.div`
height: 100vh;
min-width: min(200px,70vw);
position: relative;
overflow: hidden;
padding:1rem;
&:after{
  content:'';
  height: 100%;
  width: 3px;
  position: absolute;
  z-index: 999;
  right: 0;
  top:0;
  background-image:linear-gradient(90deg, #2bb594, #01b277) ;
}

`