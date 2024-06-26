import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React from "react";
import { useDispatch } from "react-redux";
import {
  removeItemFromCart,
  setSpacsInfo,
} from "../../redux/slices/cartPageSlice";

const CartCardView = ({ data, index, page }) => {
  const dispatch = useDispatch();
  if (page === "confirm-order") {
    return (
      <Wrapper
        key={data.id}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, delay: (index + 1) * 0.1 }}
        layout
        onClick={() => {
          dispatch(setSpacsInfo(data));
        }}
      >
        <ContainerForConfirmOrder>
          <Left>
            <div className="CartCardView-img-wrapper">
              <img src={data.image} alt={data.name} />
            </div>
            <p> {data.name} </p>
          </Left>
          <Right>
            <Count>{data.quantity}</Count>
            <TotalCost>₹{data.price * data.quantity}</TotalCost>
          </Right>
        </ContainerForConfirmOrder>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper
        key={data.id}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, delay: (index + 1) * 0.1 }}
        layout
        onClick={() => {
          dispatch(setSpacsInfo(data));
        }}
      >
        <Container
          whileHover={{
            boxShadow: "0 8px 11px rgba(0, 0, 0, 0.1)",
          }}
          whileTap={{ boxShadow: "none" }}
          transition={{ duration: 0.3 }}
        >
          <Left>
            <div className="CartCardView-img-wrapper">
              {" "}
              <img src={data.image} alt={data.name} />
            </div>
            <p> {data.name} </p>
          </Left>
          <Right>
            <Count className="large-size">{data.quantity}</Count>
            <Count className="small-size">Qty : {data.quantity}</Count>
            <TotalCost className="large-size">
              ₹{data.price * data.quantity}
            </TotalCost>
            <TotalCost className="small-size">
              cost : ₹{data.price * data.quantity}
            </TotalCost>
          </Right>
        </Container>

        {page && page !== "confirm-order" ? (
          <CloseBtnWrapper
            onClick={() => {
              dispatch(removeItemFromCart(data.id));
            }}
          >
            <p>&times;</p>
          </CloseBtnWrapper>
        ) : null}
      </Wrapper>
    );
  }
};

export default CartCardView;

const Wrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0.3rem 0;
`;
const CloseBtnWrapper = styled.div`
  width: 20%;
  display: grid;
  place-items: center;
  font-size: 1.3rem;
  color: #a6a6a6;
  user-select: none;
  transition: 100ms;

  p {
    cursor: pointer;
    &:hover {
      color: #454545;
    }
  }
`;

const Container = styled(motion.div)`
  width: 80%;
  display: flex;
  padding: 0.8rem;
  background-color: white;
  border-radius: 6px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
  

  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.04);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ContainerForConfirmOrder = styled(motion.div)`
  width: 100%;
  display: flex;
  padding: 0.8rem;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.06);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
  .CartCardView-img-wrapper {
    width: 4rem;
    height: 4rem;
    border-radius: 6px;
    overflow: hidden;

    img {
      height: 100%;
      width: 100%;
    }
  }
  p {
    flex: 1;
  }
`;
const Right = styled.div`
  flex: 1;

  display: flex;
  justify-content: flex-end;
  text-align: center;

  .small-size {
    display: none;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: start;
    margin-left: 2.5rem;
    .small-size {
      display: block;
    }
    .large-size {
      display: none;
    }
  }

`;

const Count = styled.div`
  flex: 1;
`;
const TotalCost = styled.div`
  flex: 1;
`;
