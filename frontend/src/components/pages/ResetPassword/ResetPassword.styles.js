import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(45deg, #b2f8e8, #cffff3);
`;
export const Master = styled.div`
  height: max-content;
  width: max-content;
  padding: 2rem 3rem;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  @media (max-width: 450px) {
    height: 100vh;
    width: 100vw;
    flex-direction: column;
  }
`;
export const Header = styled.div`
display: grid;
place-content: center;
width: 100%;
padding-bottom: 0.5rem;
border-bottom: 1px solid #b0b0b0;
font-weight: 600;
color:#565656;
font-size: 1.2rem;
`
export const Body = styled.div`
display: flex;
flex-direction: column;
min-width: 350px;
margin: 2rem 0;
.reset-pass-body-inner{
    display: flex;
    align-items: baseline;
}
@media (max-width: 450px) {
    width: 90vw;
    min-width: 0px;
    padding-top: 15vh;
  }

`
export const FormTextField = styled(TextField)`
  width: 100%;
  padding: 0.5rem 0;


  & label.Mui-focused {
    color: #2bb594;
  }

  & .MuiInput-underline:after {
    border-color: #2bb594;
  }
`;


export const Btn = styled(Button)`
margin-top: 1rem;
  color: white;
  background-image: linear-gradient(40deg, #2bb594, #01b277);

  gap: 1rem;
  position: relative;
  p {
    flex: 1;
    text-align: left;
  }
`;