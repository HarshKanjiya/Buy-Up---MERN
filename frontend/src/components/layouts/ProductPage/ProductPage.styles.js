import styled from "@emotion/styled";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Fab,
  TextField,
} from "@mui/material";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  min-height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const Container = styled.div`
  min-height: 60vh;
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
export const Left = styled.div`
  flex: 0.55;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Right = styled.div`
  flex: 0.45;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  @media (max-width: 480px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 1rem;
  }
`;
export const ProductName = styled.q`
  font-size: 2rem;
  width: 100%;
  text-align: center;
  font-family: "Hubballi", cursive;
  font-weight: 600;
  padding: 0.5rem 0;

  @media (max-width: 480px) {
    font-size: 1.3rem;
    text-align: left;
  }
`;
export const Description = styled.p`
  width: 100%;
  font-size: 0.85rem;
  color: #909090;
  padding: 0.5em 0;
`;
export const RatingsWrapper = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  gap: 1rem;
  align-items: center;

  font-size: 0.8rem;
`;
export const QuantityWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  user-select: none;
  padding: 0.5rem 0;
  p {
    text-align: center;
    width: 2rem;
  }
`;
export const QuantityDownButton = styled(motion.button)`
  height: 1.7rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 11px 0 0 11px;

  font-size: 1.2rem;
  color: white;
  background-image: linear-gradient(120deg, #20bf55, #63d471);
  transition: 150ms ease-in-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: 4px 4px 11px rgba(0, 0, 0, 0.3),
      -4px -4px 11px rgba(255, 255, 255, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    transform: scale(1);
    box-shadow: none;
  }
`;
export const QuantityUpButton = styled(motion.button)`
  height: 1.7rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 11px 11px 0;

  font-size: 1.2rem;
  color: white;
  background-image: linear-gradient(-45deg, #20bf55, #63d471);
  transition: 150ms ease-in-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: 4px 4px 11px rgba(0, 0, 0, 0.2),
      -4px -4px 11px rgba(0, 0, 0, 0.05);
  }

  &:disabled {
    opacity: 0.5;
    transform: scale(1);
    box-shadow: none;
  }
`;
export const PriceWrapper = styled.div`
  padding: 0.5rem;
`;

// add to cart UI
export const AddToCartWrapper = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  margin: 1rem auto;
`;
export const CartButton = styled(Button)`
  letter-spacing: 3px;
  display: flex !important ;
  font-size: 1.1rem !important ;
  background-image: linear-gradient(120deg, #269f4e, #20bf55) !important ;
  transition: 400ms;
  span {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 100% !important ;
    border-radius: 0px !important;
    letter-spacing: 2px;
    font-size: 1rem;
  }
`;

// reviews UI
export const ReviewWrapper = styled.div`
  width: calc(100% - 2rem);
  height: max-content;
  margin: 1rem;

  .ReviewWrapper-Header {
    text-align: center;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
`;

// make review styles
export const MakeReviewOpenerWrapper = styled.div`
  width: calc(100% - 2rem);
  margin: 0 1rem;
  display: flex;
  justify-content: flex-end;
`;
export const MakeReviewOpener = styled(Fab)`
  width: 10rem;
  background-image: linear-gradient(120deg, #269f4e, #20bf55) !important ;
  color: white;
`;
export const MakeReviewWrapper = styled(Dialog)``;
export const MakeReviewTitle = styled(DialogTitle)`
  font-size: 1.2rem;
`;
export const MakeReviewContent = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;
  min-width: 50vw;

  @media (max-width: 480px) {
    min-width: 80vw;
  }
`;
export const ReviewInputText = styled(TextField)`
  & label.Mui-focused {
    color: #2bb594;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #2bb594;
    }
  }
`;
export const ReviewFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
export const ReviewFooterButton = styled(Button)`
  display: flex;
  gap: 1rem;

  background-image: linear-gradient(90deg, #2bb594, #01b277);
`;
