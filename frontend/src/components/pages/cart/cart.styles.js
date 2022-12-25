import styled from "@emotion/styled";
import { Button } from "@mui/material";
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
  background-color: white;
  border-radius: 9px;
  min-height: 50vh;
  overflow: hidden;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
  }
    box-shadow:4px 4px 22px rgba(0,0,0,0.3), -4px -4px 22px rgba(255,255,255,0.4);

`;

export const LeftSection = styled.div`
  height: 100%;
  border-right: 1px solid #f1f1f1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
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
    gap: 1rem;
    color: #2bb594;
  }
  .LeftSection-mids-ele {
    border-radius: 2rem;
    padding: 0.4rem;
    border: 1px solid white;
    transition: 100ms;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    p {
      display: none;
    }

    &:hover {
      padding-left: 0.8rem;
      padding-right: 0.8rem;
      position: absolute;
      z-index: 100;
      top: 0;
      left: -0.5rem;
      background-color: white;
      border: 1px solid #2bb594;
      color:white;
      background-color: #2bb594;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
      p {
        display: block;
      }
    }
  }
`;
export const RightSection = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;
export const HeadBar = styled.div`
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid #f5f5f5;
  font-size: 1.3rem;
  font-weight: 700;
  color: #454545;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  button {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #f5f5f5;
    background-color: white;
    transition: 300ms;

    P {
      display: none;
    }
  }
  .cart-delete-all-btn {
    background-color: #ff5050;
    color: white;
    transition: 300ms ease-out;
    &:hover {
      background-color: red;
      width: 12rem;
      padding: 0 1rem;
      p {
        display: block;
        font-weight: 400;
        font-size: 1rem;
        animation: animDlt 300ms;
        @keyframes animDlt {
          0%,
          50% {
            opacity: 0;
            margin-top: 5rem;
          }
          100% {
            opacity: 1;
            margin-top: 0;
          }
        }
      }
    }
  }
`;
export const Body = styled.div`
  width: 100%;
  margin: 0.5rem 0;
  flex: 1;
  overflow-x: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 2px;
  }
`;
export const Footer = styled.div`
  width: 100%;
  padding: 1rem;
  border-top: 1px solid #f5f5f5;
  font-size: 1.3rem;
  font-weight: 700;
  color: #454545;

  display: flex;
  justify-content: space-between;

  p{
    color:#b6b6b6;

    span{
      color:#454545;
    }
  }
`;

export const CheckOut = styled(Button)`
  background-color: #2bb594;
color:#0c3324;
font-weight: 700;
letter-spacing: 2px;
&:hover{
    background-color: #2bb594;
    color:white;
}
`;
