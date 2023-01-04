import React from "react";
import {
  BGteal,
  Btn1,
  Btn2,
  Content,
  ExploreMore,
  Spacer,
  Text,
  Wrapper,
} from "./Homev2.styles";
import HeaderV2 from "../../layouts/NavBar/HeaderV2";
import EastIcon from "@mui/icons-material/East";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const HomeV2 = () => {
  return (
    <>
      <HeaderV2 />
      <Wrapper>
        <BGteal></BGteal>
        <Text>
        <p><span>CHEAPEST</span> in</p>
        <p>the <span>MARKET.</span></p>
        </Text>
      </Wrapper>
      <ExploreMore href="#CARDS">
        EXPLORE MORE &nbsp;&nbsp;&nbsp;
        <EastIcon />
      </ExploreMore>
      <Btn1>
        <KeyboardArrowUpIcon />
      </Btn1>
      <Btn2>
        <KeyboardArrowDownIcon />
      </Btn2>
      <Spacer />
      <Content>
        <p>qwe</p>
        <p>qwe</p>
        <p>qwe</p>
        <p id="CARDS">qwe</p>
      </Content>
    </>
  );
};

export default HomeV2;
