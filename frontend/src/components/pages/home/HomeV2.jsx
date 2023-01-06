import React, { useRef } from "react";
import {
  BGteal,
  Btn1,
  Btn2,
  Cartwtapper,
  Content,
  CustomeSlider,
  ExploreMore,
  Spacer,
  Text,
  Wrapper,
} from "./Homev2.styles";
import HeaderV2 from "../../layouts/NavBar/HeaderV2";
import EastIcon from "@mui/icons-material/East";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Logo from "../../../assets/images/logo.png";
import Carousel from "./carousel";

const demodata = [
  {
    name: "oneeeeee",
    price: "1234",
    brand: "Logitech",
    img: Logo,
  },
  {
    name: "qwerty",
    price: "1234",
    brand: "qwer",
    img: Logo,
  },
  {
    name: "asdfg",
    price: "1234",
    brand: "qazwsx",
    img: Logo,
  },
  {
    name: "poiugg",
    price: "1234",
    brand: "qwed",
    img: Logo,
  },
  {
    name: "tgbrf",
    price: "1234",
    brand: "wsxed",
    img: Logo,
  },
  {
    name: "ijnuhb",
    price: "1234",
    brand: "qazwsx",
    img: Logo,
  },
];

const HomeV2 = () => {
  const sliderRef = useRef(null);

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  return (
    <>
      <HeaderV2 />
      <Wrapper>
        <BGteal></BGteal>
        <Text>
          <p>
            <span>CHEAPEST</span> in
          </p>
          <p>
            the <span>MARKET.</span>
          </p>
        </Text>
      </Wrapper>
      <Carousel/>

      {/*       
      <CustomeSlider
        ref={sliderRef}
        vertical
        verticalSwiping
        infinite
        speed={500}
        slidesToShow={3}
        slidesToScroll={1}
        adaptiveHeight
        arrows={false}
      >
        {demodata.map((data, index) => {
          return (
            <Cartwtapper key={index}>
              <img src={data.img} alt="img" />
              <p> {data.price} </p>
              <p> {index} </p>
            </Cartwtapper>
          );
        })}
      </CustomeSlider> */}

      <ExploreMore href="#CARDS">
        EXPLORE MORE &nbsp;&nbsp;&nbsp;
        <EastIcon />
      </ExploreMore>
      <Btn1 onClick={handlePrevClick}>
        <KeyboardArrowUpIcon />
      </Btn1>
      <Btn2 onClick={handleNextClick}>
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
