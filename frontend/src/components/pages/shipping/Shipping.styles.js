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
  z-index: 999;
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
      font-size: 3.7rem;
      position: absolute;
      width: max-content;

      transform: rotate(90deg);
    }
  }

  @media (max-width: 520px) {
    display: none;
  }
`;
export const RightSection = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const WrapperForScroll = styled.div`
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const RightSectionHeader = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
  color: #b6b6b6;
  width: 100%;
`;

export const AddressWrapper = styled.div`
  display: flex;
  gap: 0.7rem;
  flex-direction: column;
  background-color: white;
  border-radius: 7px;
  width: 100%;
  padding: 1rem;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.06);

  div {
    display: flex;
    gap: 2rem;
  }

  .order-user-info {
    display: flex;
    flex-direction: column;
    gap: 0;

    p {
      margin: 0.5rem 0;
      color: #565656;
      font-weight: 500;
    }
    div {
      display: flex;
      gap: 1rem;
    }
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
  flex-wrap: wrap;
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

export const SaveBtn = styled(Button)`
  background-color: #2bb594;
  color: #0c3324;
  font-weight: 700;
  letter-spacing: 2px;
  height: 36.5px;

  &:hover {
    background-color: #2bb594;
    color: white;

    transition: 300ms;
  }
`;
export const FinalAmountWrapper = styled.div`
  background-color: white;
  padding: 1rem;
  width: 100%;
  margin: 1rem auto;
  margin-bottom: 3rem;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.06);
  border-radius: 7px;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  div {
    width: 50%;
    display: flex;
    justify-content: space-between;
  }
  .payment-advertise-line {
    width: 100%;
    color: #2bb594;
    margin-bottom: 0.5rem;
    text-align: left;
    span {
      color: white;
      background-color: #2bb594;
      padding: 0.3rem 0.5rem;
      border-radius: 4px;
    }
  }
  .shipping-charge-P-tag {
    color: #b6b6b6;
    -webkit-text-decoration-line: line-through; /* Safari */
    text-decoration-line: line-through;
  }
  .payment-Order-Summery {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
    color: #676767;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #b6b6b6;
    p {
      width: 100%;
    }
  }

  @media (max-width:670px){
    .payment-advertise-line{
      font-size: 0.7rem;
      span{
        padding: 0.1rem;
      }
    }
    .payment-Order-Summery{
      width: 100%;
    }
    div{
      width: 100%;
    }
  }
  
`;
export const Form = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  overflow-y: scroll;
  overflow-x: hidden;
  justify-content: center;
`;
export const Form2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem;
  justify-content: start;
  user-select: none;
`;
export const Form3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem;
  justify-content: start;
  
  .for-3-sub{
    font-size: 0.7rem;
  }
`;
export const Footer = styled(motion.div)`
  margin: 1rem;
  margin-top: 0;
  padding: 1rem;
  background-color: white;
  border-radius: 7px;

  width: calc(100% - 2rem);
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.06);
  display: flex;
  gap: 2rem;
  justify-content: end;
  position: sticky;
  bottom: 1rem;
`;
export const Footer2 = styled(motion.div)`
  margin: 1rem;
  margin-top: 0;
  padding: 1rem;
  background-color: white;
  border-radius: 7px;

  width: calc(100% - 2rem);
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.06);
  display: flex;
  gap: 2rem;
  justify-content: end;
  position: sticky;
  bottom: 1rem;
`;
export const Footer3 = styled(motion.div)`
  margin: 1rem;
  margin-top: 0;
  padding: 1rem;
  background-color: white;
  border-radius: 7px;
  width: calc(100% - 2rem);
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: start;
`;
export const PaymentWrapper = styled.div`
  background-color: white;
width: 100%;
  margin: 1rem auto;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.06);
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  .PaymentWrapper-header-line {
    border-bottom: 1px solid #d1d1d1;
    padding: 0.5rem 1.5rem;
  }

  .payment-btn {
    width: 100%;
    padding: 0.5rem 1rem;
    background-image: linear-gradient(-90deg, #2bb594, #01b277);
    border-radius: 0 0 6px 6px;
    color: #0c3324;
    transition: 300ms;
    font-weight: 500;
    letter-spacing: 1.2px;

    &:hover {
      color: white;
    }
    &:disabled{
      color:#0c3324;
    }
  }

  form {
    overflow: hidden;
    width: 100%;
    align-self: center;
    box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
      0px 2px 5px 0px rgba(50, 50, 93, 0.1),
      0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
    padding: 2rem;

    @media (max-width:600px){
      padding: 0.5rem;
    }

  }

  input {
    border-radius: 6px;
    width: 100%;
    margin-bottom: 6px;
    padding: 12px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    max-height: 44px;
    font-size: 16px;
    width: 100%;
    background: white;
    box-sizing: border-box;
  }

  .result-message {
    line-height: 22px;
    font-size: 16px;
  }

  .result-message a {
    color: rgb(89, 111, 214);
    font-weight: 600;
    text-decoration: none;
  }

  .hidden {
    display: none;
  }

  #card-error {
    color: rgb(105, 115, 134);
    font-size: 16px;
    line-height: 20px;
    margin-top: 12px;
    text-align: center;
  }

  #card-element {
    border-radius: 4px 4px 0 0;
    padding: 12px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    max-height: 44px;
    width: 100%;
    background: white;
    box-sizing: border-box;
  }

  #payment-request-button {
    margin-bottom: 32px;
  }

  button:hover {
    filter: contrast(115%);
  }

  button:disabled {
    opacity: 0.5;
    cursor: default;
  }

  /* spinner/processing state, errors */
  .spinner,
  .spinner:before,
  .spinner:after {
    border-radius: 50%;
  }

  .spinner {
    color: #ffffff;
    font-size: 22px;
    text-indent: -99999px;
    margin: 0px auto;
    position: relative;
    width: 20px;
    height: 20px;
    box-shadow: inset 0 0 0 2px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }

  .spinner:before,
  .spinner:after {
    position: absolute;
    content: "";
  }

  .spinner:before {
    width: 10.4px;
    height: 20.4px;
    background: undefined;
    border-radius: 20.4px 0 0 20.4px;
    top: -0.2px;
    left: -0.2px;
    -webkit-transform-origin: 10.4px 10.2px;
    transform-origin: 10.4px 10.2px;
    -webkit-animation: loading 2s infinite ease 1.5s;
    animation: loading 2s infinite ease 1.5s;
  }

  .spinner:after {
    width: 10.4px;
    height: 10.2px;
    background: undefined;
    border-radius: 0 10.2px 10.2px 0;
    top: -0.1px;
    left: 10.2px;
    -webkit-transform-origin: 0px 10.2px;
    transform-origin: 0px 10.2px;
    -webkit-animation: loading 2s infinite ease;
    animation: loading 2s infinite ease;
  }

  @keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @media only screen and (max-width: 600px) {
    form {
      width: 80vw;
    }
  }
`;
export const PaymentCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 2rem;
  border-radius: 7px;
  border: 1px solid #d1d1d1;

  /* div{
  display: flex;
  gap: 0.8rem;
} */
  .PaymentCont-ele {
    display: flex;
    gap: 1rem;
  }
  Button {
    width: 100%;
  }
`;
