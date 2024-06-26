import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  width: 100%;
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
  min-height: 90vh;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  @media (max-width: 800px) {
    padding: 2rem 0;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
  }
  @media (max-width: 500px) {
    gap: 1rem;
  }
`;

export const Left = styled.div`
  display: flex;
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
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
export const LeftFoot = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
export const LeftFootItem = styled(Button)`
  color: white;
  background-image: linear-gradient(40deg, #2bb594, #01b277);
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  p {
    flex: 1;
    text-align: left;
  }
`;
export const LeftFootItemDlt = styled(Button)`
  color: white;
  background-image: linear-gradient(40deg, #ff4a4a, tomato);
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  p {
    flex: 1;
    text-align: left;
  }
`;
export const OrdersBtn = styled(Button)`
  width: 100%;
  color: white;
  background-image: linear-gradient(40deg, #2bb594, #01b277);
  display: flex;
  justify-content: center;
  gap: 1rem;
  p {
    flex: 1;
    text-align: left;
  }
  @media (max-width: 800px) and (min-width: 500px) {
    width: max-content;
  }
`;
export const Right = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  .right-name {
    font-size: 2rem;
  }
  .right-beta {
    color: #b6b6b6;
  }
  .right-since {
  }
  @media (max-width: 800px) {
    font-size: 1rem;
    gap: 1rem;
    .right-name {
      font-size: 1.5rem;
    }
  }
`;
export const RightItem = styled(motion.div)`
  padding: 1rem 2rem;
  border-radius: 7px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.08);
`;
