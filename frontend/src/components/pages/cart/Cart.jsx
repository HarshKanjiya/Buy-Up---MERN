import React from "react";
import { motion } from "framer-motion";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";

const Cart = () => {
  return (
    <motion.div
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
      <Footer />
    </motion.div>
  );
};

export default Cart;
