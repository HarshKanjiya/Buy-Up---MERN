import React from "react";
import { motion } from "framer-motion";
import Logo from "../../../assets/images/logo.png";
import {
  Body,
  CheckOut,
  Container,
  ExtraSpacs,
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
import DeleteIcon from '@mui/icons-material/Delete';
import CartViewLayout from "../../layouts/Cart/CartViewLayout";

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
      <Wrapper>
        <Container>
          <LeftSection>
            <img src={Logo} alt="Buy Up" />
            <div className="LeftSection-mids">
              <HomeIcon />
              <PhonelinkIcon />
              <PersonIcon />
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
              >
                <ArrowBackIcon />
              </motion.button>
              <p>Your Cart</p>
              </div>
              <motion.button
              className="cart-delete-all-btn"
              >
                <DeleteIcon />
              </motion.button>
            </HeadBar>
            <Body>

                <CartViewLayout />

            </Body>
            <Footer>
              <p>Total </p>
              <CheckOut variant="contained">check out</CheckOut>
            </Footer>
          </RightSection>
          <ExtraSpacs>
            <div className="ExtraSpacs-header">
              <p>Spacs</p>
            </div>
          </ExtraSpacs>
        </Container>
      </Wrapper>
    </motion.div>
  );
};

export default Cart;
