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
  margin: 1rem;
  margin-bottom: 3rem;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.06);
  border-radius: 7px;
  align-items: center;
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

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  div {
    width: 50%;
    display: flex;
    justify-content: space-between;
  }
`;
export const Form = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem;
  justify-content: center;
  overflow: hidden;
`;
export const Form2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem;
  justify-content: start;
  user-select: none;
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
  justify-content: end;
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
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.06);
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  .PaymentWrapper-header-line{
    border-bottom: 1px solid #d1d1d1;
    padding: 0.5rem 1.5rem;
  }
  .CardNumberElement,
  .CardExpiryElement,
  .CardCvcElement {
    border-bottom: 1px solid #b6b6b6;
    min-width: 10rem;
    padding: 0.4rem 0.5rem;
    color: #454545;
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
.PaymentCont-ele{
display: flex;
gap: 1rem;
}
Button{
  width: 100%;
}
`