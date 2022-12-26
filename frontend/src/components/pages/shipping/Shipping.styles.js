import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";
import { motion } from "framer-motion";


export const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  padding: 2rem;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(-90deg, #2bb594, #01b277);

  @media (max-width: 555px) {
    padding: 0.5rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  background-color: #fafffe;
  border-radius: 9px;
  min-height: 50vh;
  overflow: hidden;

  max-width: 1200px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 4px 4px 22px rgba(0, 0, 0, 0.3),
    -4px -4px 22px rgba(255, 255, 255, 0.4);

  .width50 {
    width: 50%;
  }
  
`;

export const LeftSection = styled.div`
  height: 100%;
  border-right: 1px solid #f1f1f1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: white;
  overflow: hidden;
  img {
    height: auto;
    width: 2.3rem;
  }
  .LeftSection-mids {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      margin-right: 2rem;
      color: #f1f1f1;
      font-weight: 800;
      font-size: 4rem;
      position: absolute;
      width: max-content;

      transform: rotate(90deg);
    }
  }

  @media (max-width:520px){
    display: none;
  }
`;
export const RightSection = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const RightSectionHeader = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
  color: #b6b6b6;
  width: 100%;
  /* padding: 1rem; */
  /* margin: 1rem; */
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem;
  /* margin: 1rem; */
  justify-content: center;
`;
export const AddressWrapper = styled.div`
  display: flex;
  gap: 0.7rem;
  flex-direction: column;
  background-color: white;
  border-radius: 7px;
  width: 100%;
  padding: 1rem;
  /* margin: 1rem; */
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.06);

  div {
    display: flex;
    gap: 2rem;
  }
`;
export const TextInput = styled(TextField)`
  & label.Mui-focused {
    color: #2bb594;
  }

  & .MuiInput-underline:after {
    border-color: #2bb594;
  }
`;

export const LocationWrapper = styled.div`
  background-color: white;
  border-radius: 7px;
  width: 100%;
  padding: 1rem;
  /* margin: 1rem; */
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.06);

  display: flex;
  gap: 1rem;
`;
export const Locationselector = styled.select`
  background-color: white;
  border: none;
  outline: none;
  min-width: 10rem;
  max-width: 10rem;
  padding: 0.3rem 0.6rem;
  border-bottom: 1px solid #b6b6b6;

  &:disabled {
    width: 5rem;
    color: #d1d1d1;
  }
`;
export const Footer = styled.div`
  margin: 1rem;
  margin-top: 0;
  padding: 1rem;
  background-color: white;
  border-radius: 7px;
  width: calc(100% - 2rem);
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: end;
`;

export const SaveBtn = styled(Button)`
background-color: #2bb594;
color:#0c3324;
font-weight: 700;
letter-spacing: 2px;
height: 36.5px;

&:hover{
    background-color: #2bb594;
    color:white;

    transition: 300ms;
}

`