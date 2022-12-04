import styled from "@emotion/styled";
import { Button, TextField, ToggleButton } from "@mui/material";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: grid;
  place-content: center;
  background-image: linear-gradient(45deg, #b2f8e8, #cffff3);
`;
export const Container = styled(motion.div)`
  height: 80vh;
  width: 70vw;
  background-color: white;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;

  position: relative;

  @media (max-width: 835px) {
    height: 100vh;
    width: 100vw;
    flex-direction: column;
  }
`;

// img
export const Img = styled.div`
  flex: 1;
  width: 50%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-image: conic-gradient(
    from 0.5turn at 50% 50%,
    #15ffe1,
    #48edc5,
    #3cecc1,
    #cffff3
  );

  @media (max-width: 835px) {
    visibility: hidden;
    position: absolute;
  }
`;
export const Blur = styled.div`
  height: 100%;
  width: 100%;
  backdrop-filter: blur(20px);
  background-color: rgba(0, 0, 0, 0.05);
`;
export const Grid = styled.div`
  height: 100%;
  width: 100%;
  margin: -1px;
  opacity: 0.3;
  z-index: 10;
  position: absolute;
  background-image: repeating-linear-gradient(#fff 0 1px, transparent 1px 100%),
    repeating-linear-gradient(90deg, #fff 0 1px, transparent 1px 100%);
  background-size: 75px 75px;
`;
export const ImgTextWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 99;
  left: 0;
  top: 0;

  display: grid;
  place-content: center;
`;
export const ImgText = styled.div`
  color: #b2f8e8;
  font-size: 2.2rem;
  padding: 2rem;
  border-radius: 6px;
  backdrop-filter: blur(5px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  font-family: "Hubballi", cursive;

  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.15)
  );
  h6 {
    font-size: 1rem;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.8);
  }
  span {
    font-size: 2.7rem;
    font-weight: 700;
    color: white;
  }

  @media (max-width: 1050px) {
    font-size: 1.3rem;
    padding: 1rem;
    span {
      font-size: 1.7rem;
    }
    h6 {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 700px) {
    padding: 0.5rem;
  }
`;

// form

// headerrrrrrr
export const Form = styled.div`
  flex: 1;
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  padding: 1rem;

  @media (max-width: 835px) {
    width: 100%;
  }
`;
export const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .FormHeaderElement-img{
    margin-left: -4px;

    img {
      height: 3rem;
      width: 3rem;
    }
    @media (max-width: 835px) {
    }
  }

  .FormHeaderElement-p {
    font-size: 1.5rem;
    font-weight: 700;
    color: #0c3324;

    @media (max-width: 950px) and (min-width: 835px) {
      visibility: hidden;
    }
    @media (max-width: 380px) {
      visibility: hidden;
      position: absolute;
    }
  }
`;
export const FormHeaderElement = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .FormHeaderElement-password-recovery {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;
export const FormHeaderElementToggleBtn = styled(ToggleButton)`
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border-width: 1px;
  border-color: #2bb594;
  color: #2bb594;
  border-style: solid;
  transition: 200ms ease-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    background-color: white;
  }

  &:disabled {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    color: white;
    border-color: white;
    background-image: linear-gradient(90deg, #2bb594, #01b277);
  }
`;
export const FormBody = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;

  .FormBody-Header {
    position: absolute;
    top: 1rem;
    left: 0;
    font-size: 1.5rem;
    font-weight: 500;
    text-align: left;
  }
  .FormBody-Header-beta {
    position: absolute;
    left: 0;
    top: 3rem;
    font-size: 0.7rem;
    text-align: left;
  }
  .FormBody-Header-signup {
    position: absolute;
    top: 0.7rem;
    right: 0;
    font-size: 1.5rem;
    font-weight: 500;
    /* text-align: right; */
  }
  .FormBody-Header-beta-signup {
    position: absolute;
    right: 0;
    top: 2.7rem;
    font-size: 0.7rem;
    /* text-align: left; */

    span {
      font-weight: 700;
    }
  }

  @media (max-width: 1150px) and (min-width: 835px){
    .FormBody-Header-signup{
      top:0rem;
    }
    .FormBody-Header-beta-signup{
      top:1.7rem;
    }
  }

  @media (max-width: 835px) {
    .FormBody-Header {
      position: relative;
      text-align: center;
    }
    .FormBody-Header-beta {
      position: relative;
      top: 1rem;
      text-align: center;
    }
    .FormBody-Header-signup {
      position: relative;
      text-align: center;
    }
    .FormBody-Header-beta-signup {
      position: relative;
      top: 1rem;
      text-align: center;
    }
  }
`;
export const FormTextFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: 1rem;

  .FormTextFieldWrapper-forgotPassword {
    width: 100%;
    text-align: right;
    font-size: 0.9rem;
    padding: 0.5rem 0 1rem 0;
    color: #01b277;
  }
  @media (max-width: 835px) {
    width: 90%;
    max-width: 300px;
  }
`;
export const FormTextField = styled(TextField)`
  padding: 0.5rem 0;
  @media (max-width: 950px) and (min-width: 835px) {
    padding: 0.2rem 0;
  }
  @media (max-width: 835px) {
    width: 100%;
  }
`;
export const ImgInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.5rem;
  img {
    height: 2rem;
    margin: 0 auto;
  }
`;
export const ImgUploadBtn = styled(Button)`
  background-image: linear-gradient(90deg, #2bb594, #01b277);
`;

export const LogBtn = styled(Button)`
  background-image: linear-gradient(90deg, #2bb594, #01b277);
  color: white;
`;
