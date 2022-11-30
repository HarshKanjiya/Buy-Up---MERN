import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React, { useRef } from "react";

export const HeroSectionCarouselComponent = ({ item }) => {
  const [pos, setPos] = React.useState([0, 0]);
  const ref = useRef(0)

  const onMove = (e) => {
    let x = ref.current.clientWidth - e.clientX
    let y = ref.current.clientHeight - e.clientY
    setPos([x, y]);
  };

  return (
    <Container borderColor={item.color} onPointerMove={onMove} ref={ref}>
      <Blob
        style={{
          left: pos[0] - 60,
          top: pos[1] - 150,
          backgroundColor: item.color,
        }}
      ></Blob>

      <img className="HeroSectionCarouselComponent-image" src={item.image} />
      <DetailsWrapper>
        <DetailsHeader>
          {item.logo ? <img src={item.logo} /> : null}
          <p> {item.name} </p>
        </DetailsHeader>
        <p className="HeroSectionCarouselComponent-feature"> {item.feature} </p>
        <p className="HeroSectionCarouselComponent-price"> {item.price} </p>
      </DetailsWrapper>
    </Container>
  );
};

const Container = styled(motion.div)`
  margin: 1rem;
  background-color: black;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 11px;
  border-width: 3px;
  border-style: solid;
  border-color: ${(props) => props.borderColor};
  transition: 300ms;
  overflow: hidden;
  z-index: 100;

  .HeroSectionCarouselComponent-image {
    margin-top: 3rem;
    width: 50%;
  }

  &:hover {
    border-color: #2bb594;
    transform: scale(1.01);
    box-shadow: 0 0 15px rgba(0,0,0,0.5);
  }
`;
const DetailsWrapper = styled.div`
  width: 18rem;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1rem 2rem;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 7px;
  margin: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(100px);
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.15)
  );

  p {
    height: max-content;
    font-family: "Hubballi", cursive;
    line-height: 1.1;
  }

  .HeroSectionCarouselComponent-feature {
    color: #909090;

    @media (max-width: 480px) {
      visibility: hidden;
    }
  }
  .HeroSectionCarouselComponent-price {
    @media (max-width: 480px) {
      visibility: hidden;
    }
  }

  @media (max-width: 730px) {
    top: 0;
    left: 0;
    font-size: 0.9rem;
    justify-content: flex-start;
  }
  @media (max-width: 480px) {
    background: none;
    border: none;
    height: max-content;
    width: max-content;
    backdrop-filter: none;
    margin: 0;
    padding: 0.5rem;
  }
`;
const DetailsHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    border-left: 1px solid #b6b6b6;
    padding: 0 1rem;
  }

  img {
    height: 1.2rem;
    width: auto;
  }
`;
const Blob = styled.div`
  height: 650px;
  width: 650px;
  border-radius: 50%;
  z-index: -1;
  position: absolute;
  transform-origin: center;

  filter: blur(250px);

  @media (max-width: 480px) {
    visibility: hidden;
  }
`;
