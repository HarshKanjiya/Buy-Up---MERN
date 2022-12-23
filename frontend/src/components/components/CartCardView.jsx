import styled from "@emotion/styled";
import React from "react";

const CartCardView = () => {
  return (
    <Wrapper>
      <Container>
        <Left></Left>
        <Right>
          <Count></Count>
          <TotalCost></TotalCost>
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
    &:hover{
      color:#454545;
    }
  }
`;

const Container = styled.div`
  width: 80%;
  display: flex;
  padding: 1.5rem;
  background-color: white;
  /* box-shadow: 0 0px 11px rgba(0, 0, 0, 0.3); */
  border: 1px solid #f0f0f0;
  border-radius: 6px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: 100ms;
  position: relative;
  &:hover {
    box-shadow: 0 9px 15px rgba(0, 0, 0, 0.05);
    border: 1px solid white;
  }
`;

const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;

  display: flex;
  justify-content: space-around;
`;

const Count = styled.div`
  flex: 1;
`;
const TotalCost = styled.div`
  flex: 1;
`;
