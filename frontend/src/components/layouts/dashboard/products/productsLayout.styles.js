import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-x: hidden;
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const AdminBtn = styled(motion.button)`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 1.5rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  border: 1px solid #f5f5f5;
  background-color: #2bb594;
  transition: 250ms;
  font-weight: 600;
  color: white;
  font-size: 1.5rem;
  P {
    font-size: 1rem;
    display: none;
  }

  &:hover {
    width: 12rem;
    p {
      display: block;
      animation: ani 300ms;
      @keyframes ani {
        0%,
        60% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }
  }
`;
export const CardWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.04);
  padding: 1rem;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  margin: 0.5rem 0;
`;
export const Left = styled.div`
  margin-left: 3rem;
  flex: 1;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  justify-content: space-between;

  p {
    color: #909090;
  }
  span {
    color: #343434;
    font-weight: 600;
  }
  .admin-CardWrapper-index {
    position: absolute;
    font-weight: 800;
    font-size: 3rem;
    color: #f1f1f1;
    bottom: -1rem;
    left: 0.5rem;
  }
`;
export const Right = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  button {
    height: 2rem;
    width: 2rem;
    display: grid;
    place-content: center;
    color: white;
    padding: 1.5rem;
    border-radius: 50%;
    transition: 300ms;
  }
  .admin-products-edit {
    background-color: #2bb594;
    &:hover{
        background-color: #22826b;
    }
  }
  .admin-products-delete {
    background-color: tomato;
    &:hover{
        background-color: #ff1d1d;
    }
  }

`;
