import React from "react";
import { motion } from "framer-motion";
import Header from "../../layouts/Header";
import { Body, Container, Footer, HeadBar, Wrapper } from "./cart.styles";

const Cart = () => {
  return (
    <motion.div
      key="cart"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.4,
      }}
    >
      <Header />
      <Wrapper>
        <Container>
          <HeadBar>
          <p>Your Cart</p>
          </HeadBar>
          <Body>

          </Body>
          <Footer>

          </Footer>
        </Container>
      </Wrapper>
    </motion.div>
  );
};

export default Cart;
