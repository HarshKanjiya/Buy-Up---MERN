import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  width: 100%;
  height: 91.3vh;
  overflow-x: hidden;
  padding: 2rem;
  display: flex;
  justify-content: center;
  background-image:linear-gradient(-90deg, #2bb594, #01b277) ;

@media (max-width:555px){
  padding: 0.5rem;
}

`
export const Container = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 9px;
  min-height: 50vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;


  @media (max-width: 800px) {
    padding: 2rem 0;
    width: 100%;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   gap:2rem;
  }
`;
export const HeadBar = styled.div`
width: 100%;
padding: 1rem;
border-bottom: 1px solid #f5f5f5;
font-size: 1.3rem;
font-weight: 700;
color:#454545;
box-shadow: 0 1px 21px rgba(0,0,0,0.05);
`
export const Body = styled.div`
width: 100%;
height: 100%;
flex: 1;
`
export const Footer = styled.div`
width: 100%;
padding: 1rem;
border-top: 1px solid #f5f5f5;
font-size: 1.3rem;
font-weight: 700;
color:#454545;
box-shadow: 0 -1px 21px rgba(0,0,0,0.05);
`