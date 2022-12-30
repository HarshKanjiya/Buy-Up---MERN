import styled from "@emotion/styled";
import { Breadcrumbs, Button } from "@mui/material";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  min-height: 100vh;
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
  height: max-content;
  background-color: #fafffe;
  border-radius: 9px;
  min-height: 100%;
  overflow: hidden;
  padding: 1rem;
`;

export const Navigators = styled(Breadcrumbs)`
color:#b6b6b6;
font-weight: 500;
p{
  border-bottom: 1px solid white;
  transition: 300ms;
  &:hover{
    border-color: #676767;
    color: #121212;
  }
}
.orders-lastNav{
  color: #121212 !important;
  border-color: white !important;
}
`
export const Body = styled(motion.div)`
width: 100%;
min-height: 100%;
padding: 1rem;
margin: 0 auto;

border-radius: 8px;
/* box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.06); */

`