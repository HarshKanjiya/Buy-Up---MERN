import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  width: 100%;
  overflow-x: hidden;
`;
export const Container = styled.div`
  width: 90%;
  background-color: white;
  border-radius: 9px;
  min-height: 90vh;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;

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
`;
export const LeftFoot = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;
export const LeftFootItem = styled(Button)`
  color: white;
  background-image: linear-gradient(40deg, #2bb594, #01b277);
  display: flex;
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
  gap: 1rem;
  p {
    flex: 1;
    text-align: left;
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
  .right-since{

  }
`;
export const RightItem = styled(motion.div)`
padding: 1rem 2rem;
border-radius: 7px;
box-shadow: 5px 5px 20px rgba(0,0,0,0.05);
`
