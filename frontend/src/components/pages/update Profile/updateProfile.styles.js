import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  width: 100%;
  overflow-x: hidden;
  padding: 2rem;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(-90deg, #2bb594, #01b277);
  @media (max-width:555px){
    padding: 0;
}
`;
export const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: white;
  border-radius: 9px;
  min-height: 90vh;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  @media (max-width: 800px) and (min-width:555px){
    padding: 2rem 0;
    width: 100%;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    justify-content: center;
  }
  @media (max-width:555px){
    width: 100%;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: start;
    gap: 1rem;
    justify-content: center;
    border-radius: 0px;
    
}
`;

export const Left = styled.div`
  display: flex;
  flex: 0.5%;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  .Left-imgWrapper {
    height: 250px;
    width: 250px;
    overflow: hidden;
    display: grid;
    border-radius: 50%;
    place-content: center;
    img {
      height: 250px;
      width: 250px;
      object-fit: cover;
    }
  }
  @media (max-width: 800px) {
    flex:0;
    flex-direction: row;

    .Left-imgWrapper {
      height: 4rem;
      width: 4rem;
      img {
        height: 4rem;
        width: 4rem;
      }
    }
  }
`;

export const TitleUpdate = styled.div`
  position: absolute;
  left: 50%;
  left: 2rem;
  top: 1.5rem;
  font-size: 1.5rem;
  @media (max-width:555px){
    left:1rem;
    top: 1rem;
    font-size:1.2rem;
}
`;
export const BtnUpload = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 2rem;
`;

export const Btn = styled(Button)`
  color: white;
  background-image: linear-gradient(40deg, #2bb594, #01b277);
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  position: relative;
  p {
    flex: 1;
    text-align: left;
  }
  input {
    max-width: 200px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const Right = styled(motion.div)`
  flex: 0.5%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;

  width: 40%;
  @media (max-width: 800px) and (min-width:555px){
    width:50%;
    flex:0;
    gap: 1rem;
  }
  @media (max-width:555px){
    height: max-content;
    flex:0;
    width: 100%;
    align-items: center;
  }
`;

export const RightItem = styled(motion.div)`
  padding: 1.5rem 2rem;
  border-radius: 7px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.08);

  max-width: 80%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  @media (max-width:800px) {
    max-width: 100%;
  }
  @media (max-width:555px){
    width:90%;
  }
`;

export const TextFields = styled(TextField)`
  width: 100%;

  & label.Mui-focused {
    color: #2bb594;
  }

  & .MuiInput-underline:after {
    border-color: #2bb594;
  }
`;
