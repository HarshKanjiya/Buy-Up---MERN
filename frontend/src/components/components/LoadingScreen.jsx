import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React from "react";

const LoadingScreen = ({ size = "large" }) => {
  if (size === "large") {
    return (
      <Wrapper>
        <Container
          key={"loadingScreen"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <lottie-player
            src="https://lottie.host/972318a7-f1f2-484d-8b5f-ddfd0645c57b/ar4GNAAB0C.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </Container>
      </Wrapper>
    );
  }
  if (size === "small") {
    return (
      <SmallWrapper>
        <Container
          key={"loadingScreen"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <lottie-player
            src="https://lottie.host/972318a7-f1f2-484d-8b5f-ddfd0645c57b/ar4GNAAB0C.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </Container>
      </SmallWrapper>
    );
  }
};

export default LoadingScreen;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-content: center;
  overflow: hidden;
`;
const SmallWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  overflow: hidden;
`;
const Container = styled(motion.div)`
  height: 100px;
  width: 100px;
`;
