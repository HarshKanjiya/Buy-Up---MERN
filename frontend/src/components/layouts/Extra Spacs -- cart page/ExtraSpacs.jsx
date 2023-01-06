import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addIntoQuantity,
  addQuantityFromSpacs,
  getTotalCost,
  removeIntoQuantity,
  removeItemFromCart,
  removeQuantityFromSpacs,
  setSpacsInfo,
} from "../../../redux/slices/cartPageSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const ExtraSpacs = () => {
  const dispatch = useDispatch();
  const { spacsInfo, cartItems, PRODUCT_QUANTITY } = useSelector(
    (state) => state.cart
  );
  const [addBtndisi, setAddBtnDisi] = useState(false); // for disiblity of add btn

  // console.log("spacsInfo.stock :>> ", spacsInfo && spacsInfo.stock);
  // console.log("PRODUCT_QUANTITY :>> ", PRODUCT_QUANTITY);
  
  useEffect(() => {
    if (!spacsInfo) {
      if (cartItems.length !== 0) {
        dispatch(setSpacsInfo(cartItems[0]));
      }
    } 
    if (cartItems.length === 0) {
      dispatch(setSpacsInfo(null));
    }
    dispatch(getTotalCost())
  }, [spacsInfo, cartItems]);

  useEffect(() => {
    if (spacsInfo) {
      if (PRODUCT_QUANTITY === spacsInfo.stock) {
        setAddBtnDisi(true);
      } else {
        setAddBtnDisi(false);
      }
    }
  }, [PRODUCT_QUANTITY]);

  const HelperRemoveQua = () => {
    if (PRODUCT_QUANTITY === 1) {
      HelperRemoveItem();
      return;
    } else {
      dispatch(removeIntoQuantity());
      dispatch(removeQuantityFromSpacs(spacsInfo.id));
    }
  };

  const HelperAddQua = () => {
    if (PRODUCT_QUANTITY < spacsInfo.stock) {
      dispatch(addIntoQuantity());
      dispatch(addQuantityFromSpacs(spacsInfo.id));
    }
  };
  const HelperRemoveItem = () => {
    dispatch(removeItemFromCart(spacsInfo.id));
    if (cartItems.length !== 0) {
      dispatch(setSpacsInfo(cartItems[0]));
    } else {
      dispatch(setSpacsInfo(null));
    }
  };

  if (spacsInfo) {
    return (
      <Wrapper
        key={spacsInfo.id}
        initial={{ x: "50%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        exit={{ x: "50%", opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Header>
          <p>Spacs</p>
        </Header>
        <Body>
          <div className="ExtraSpacs-img-wrapper">
            <img src={spacsInfo.image} alt={spacsInfo.name} />
          </div>
          <div className="ExtraSpacs-text-wrapper">
            <p className="ExtraSpacs-text-name"> {spacsInfo.name} </p>
            <div className="ExtraSpacs-text-cost-wrapper">
              <div className="ExtraSpacs-text-cost-header">
                <p>cost</p>
              </div>
              <div className="ExtraSpacs-text-cost-body">
                <p>{spacsInfo.price}</p>
                <p className="ExtraSpacs-text-cost-body-quantity">
                  x<span>{PRODUCT_QUANTITY}</span>
                </p>
              </div>
              ₹ {spacsInfo.price * PRODUCT_QUANTITY}
            </div>
          </div>
        </Body>
        <Footer>
          <div>
            <motion.button
              className="ExtraSpacs-remove"
              onClick={HelperRemoveQua}
            >
              <NavigateBeforeIcon />
            </motion.button>
            <p>{PRODUCT_QUANTITY}</p>
            <motion.button
              className="ExtraSpacs-add"
              disabled={addBtndisi}
              onClick={HelperAddQua}
            >
              <NavigateNextIcon />
            </motion.button>
          </div>
          <motion.button
            className="ExtraSpacs-delete"
            onClick={HelperRemoveItem}
          >
            <DeleteIcon />
          </motion.button>
        </Footer>
      </Wrapper>
    );
  } else {
    return <></>;
  }
};

export default ExtraSpacs;

const Wrapper = styled(motion.div)`
  height: calc(100% - 2rem);
  width: 320px;
  background-color: white;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.06);
border-radius: 7px;

  button {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #f5f5f5;
    color: white;
    transition: 300ms;
  }
  .ExtraSpacs-remove {
    background-color: #01b277;
    &:hover {
      background-color: #00a46d;
    }
    &:disabled {
      background-color: #8de9ca;
    }
  }
  .ExtraSpacs-add {
    background-color: #01b277;
    &:hover {
      background-color: #00a46d;
    }
    &:disabled {
      background-color: #8de9ca;
    }
  }
  .ExtraSpacs-delete {
    background-color: #ff5050;
    &:hover {
      background-color: red;
    }
  }
  @media (max-width:960px){
    display: none;
  }
`;
const Header = styled.div`
  flex: 1;
  padding-top: 0.5rem;
  padding-right: 1rem;
  font-size: 1.3rem;
  font-weight: 700;
  text-align: right;
  color: #454545;
`;
const Body = styled.div`
  /* background-color: red; */
  margin: 1rem;
  height: 100%;
  text-align: right;

  .ExtraSpacs-img-wrapper {
    width: calc(100% - 2rem);
    height: 256px;
    margin: 0 1rem;
    border-radius: 6px;
    overflow: hidden;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .ExtraSpacs-text-name {
    margin: 1rem;
  }
  .ExtraSpacs-text-cost-wrapper {
    margin: 0 1rem;
  }
  .ExtraSpacs-text-cost-header {
    color: #909090;
  }
  .ExtraSpacs-text-cost-body {
    margin: 0.5rem 0;
    border-bottom: 1px solid #b6b6b6;
  }
  .ExtraSpacs-text-cost-body-quantity {
    color: #909090;
    span {
      color: #343434;
    }
  }
`;
const Footer = styled.div`
  padding: 1rem 0;
  margin: 2rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 83%;
  bottom: 0;
  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;
