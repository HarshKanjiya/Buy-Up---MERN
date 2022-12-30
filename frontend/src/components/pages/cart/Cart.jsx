import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../../../assets/images/logo.png";
import {
  Body,
  CheckOut,
  Container,
  Footer,
  HeadBar,
  LeftSection,
  RightSection,
  Wrapper,
} from "./cart.styles";
import HomeIcon from "@mui/icons-material/Home";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import PersonIcon from "@mui/icons-material/Person";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import CartViewLayout from "../../layouts/Cart/CartViewLayout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  DeleteCart,
  getTotalCost,
  setCartFromLocalStorage,
} from "../../../redux/slices/cartPageSlice";
import ExtraSpacs from "../../layouts/Extra Spacs -- cart page/ExtraSpacs";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems, totalCost } = useSelector((state) => state.cart);
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getTotalCost());
  }, []);
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated]);

  const HelperCheckOut = () => {
    navigate("/login?redirect=/shipping");
  };

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
      <Wrapper>
        <Container>
          <LeftSection>
            <img src={Logo} alt="Buy Up" />
            <div className="LeftSection-mids">
              <div
                style={{ position: "relative", height: "2rem", width: "2rem" }}
              >
                <div
                  className="LeftSection-mids-ele"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <HomeIcon />
                  <p>Home</p>
                </div>
              </div>
              <div
                style={{ position: "relative", height: "2rem", width: "2rem" }}
              >
                <div
                  className="LeftSection-mids-ele"
                  onClick={() => {
                    navigate("/products");
                  }}
                >
                  <PhonelinkIcon />
                  <p>Products</p>
                </div>
              </div>
              <div
                style={{ position: "relative", height: "2rem", width: "2rem" }}
              >
                <div
                  className="LeftSection-mids-ele"
                  onClick={() => {
                    navigate("/profile");
                  }}
                >
                  <PersonIcon />
                  <p>Profile</p>
                </div>
              </div>
            </div>
          </LeftSection>
          <RightSection>
            <HeadBar>
              <div>
                <motion.button
                  initial={{ boxShadow: "0 0px 11px rgba(0, 0, 0, 0.05)" }}
                  transition={{ duration: 0.2 }}
                  whileTap={{
                    boxShadow: "0 0px 11px rgba(0, 0, 0, 0.0)",
                    rotate: "0deg",
                  }}
                  whileHover={{
                    boxShadow: " 0 0px 21px rgba(0, 0, 0, 0.1) ",
                    rotate: "-360deg",
                  }}
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  <ArrowBackIcon />
                </motion.button>
                <p>Your Cart</p>
              </div>
              {cartItems.length !== 0 ? (
                <motion.button
                  className="cart-delete-all-btn"
                  onClick={() => {
                    dispatch(DeleteCart());
                  }}
                >
                  <DeleteIcon />
                  <p>delete cart</p>
                </motion.button>
              ) : null}
            </HeadBar>
            <Body>
              <CartViewLayout />
            </Body>
            {cartItems.length !== 0 ? (
              <Footer>
                <p>
                  Total : <span>₹ {totalCost}</span>{" "}
                </p>
                <CheckOut variant="contained" onClick={HelperCheckOut}>
                  <ShoppingCartCheckoutIcon fontSize="small" />
                  &nbsp; check out
                </CheckOut>
              </Footer>
            ) : null}
          </RightSection>
          <AnimatePresence mode="wait">
            <ExtraSpacs />
          </AnimatePresence>
        </Container>
      </Wrapper>
    </motion.div>
  );
};

export default Cart;
