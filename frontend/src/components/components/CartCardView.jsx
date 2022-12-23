import styled from "@emotion/styled";
import React from "react";

const CartCardView = ({ data, index }) => {
  return (
    <Wrapper>
      <Container>
        <Left>
          <div className="CartCardView-img-wrapper">
            {" "}
            <img src={data.image} alt={data.name} />
          </div>
          <p> {data.name} </p>
        </Left>
        <Right>
          <Count>{data.quantity}</Count>
          <TotalCost>₹{data.price * data.quantity}</TotalCost>
        </Right>
      </Container>

      <CloseBtnWrapper>
        {" "}
        <p>&times;</p>{" "}
      </CloseBtnWrapper>
    </Wrapper>
  );
};

export default CartCardView;

const Wrapper = styled.div`
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

const Container = styled.div`
  width: 80%;
  display: flex;
  padding: 0.8rem;
  background-color: white;
  /* box-shadow: 0 0px 11px rgba(0, 0, 0, 0.3); */
  border: 1px solid #f0f0f0;
  border-radius: 6px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: 300ms;
  &:hover {
    box-shadow: 0 8px 11px rgba(0, 0, 0, 0.1);
    border: 1px solid white;
  }
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
`;

const Count = styled.div`
  flex: 1;
`;
const TotalCost = styled.div`
  flex: 1;
`;
