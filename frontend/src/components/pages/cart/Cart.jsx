import React from "react";
import Header from "../../layouts/Header";
import { Wrapper } from "./cart.styles";

const Cart = () => {
  return (
    <Wrapper
      key="cart"
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      // transition={{
      //   duration: 0.4,
      // }}
    >
      <Header />
      Cart
    </Wrapper>
  );
};

export default Cart;
