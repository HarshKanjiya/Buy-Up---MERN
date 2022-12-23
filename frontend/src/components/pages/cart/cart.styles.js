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
    border-radius: 50%;
    display: grid;
    place-content: center;
    border: 1px solid #f5f5f5;
    background-color: white;
  }
  .cart-delete-all-btn {
    background-color: #ff5050;
    color: white;
  }
`;
export const Body = styled.div`
  width: 100%;
  flex: 1;
  overflow-x: hidden;
  overflow-y: scroll;
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
`;

export const CheckOut = styled(Button)`
  background-image: linear-gradient(-90deg, #2bb594, #01b277);
  font-weight: 700;
  letter-spacing: 2px;
`;

export const ExtraSpacs = styled.div`
  height: 100%;
  flex: 0.45;
  background-color: #fdfdfd;

  .ExtraSpacs-header {
    width: 100%;
    padding: 1rem;
    font-size: 1.3rem;
    font-weight: 700;
    text-align: right;
    color: #454545;
  }
`;
