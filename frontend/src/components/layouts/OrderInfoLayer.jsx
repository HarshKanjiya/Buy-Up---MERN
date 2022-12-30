import styled from "@emotion/styled";
import React from "react";
import FlightIcon from "@mui/icons-material/Flight";
import { motion } from "framer-motion";
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';
import { useNavigate } from "react-router-dom";

const OrderInfoLayer = ({ orderInfo,exitOrderInfo }) => {
  const navigate = useNavigate()
  const ChangeFormat = (date) => {
    let DateList = date.slice(0, 10).split("-").reverse();
    let DateString = "";
    const monthList = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    DateString =
      "" + DateList[0] + " " + monthList[DateList[1] - 1] + " , " + DateList[2];
    return DateString;
  };
  const EstimatedDate = (date) => {
    let DateList = date.slice(0, 10).split("-").reverse();
    let newDate = eval(DateList[0]) + 15;
    let monthListcount = 0;
    if (newDate > 29) {
      newDate = newDate % 29;
      monthListcount = 1;
    }
    let Month = (DateList[1] - 1 + monthListcount) % 12;
    let DateString = "";
    const monthList = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    DateString = "" + newDate + " " + monthList[Month] + " , " + DateList[2];
    return DateString;
  };

  return (
    <Wrapper
      layout
      key={orderInfo._id}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <Upper
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <p className="order-orderinfo-id">Order ID : {orderInfo._id}</p>
        <div>
          <p className="order-orderinfo-date">
            Order Date : <span>{ChangeFormat(orderInfo.paidAt)}</span>
          </p>
          <div className="order-orderinfo-estimation">
            <FlightIcon fontSize="small" /> Estimated Delivery :{" "}
            {EstimatedDate(orderInfo.paidAt)}
          </div>
        </div>
        <p className="order-orderInfo-orderStatus">
          Order Status : <span>{orderInfo.orderStatus}</span>
        </p>
      </Upper>
      <Cart
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        {orderInfo.orderItems.map((item) => (
          <div className="orderInfo-cart" key={item._id}>
            <div className="orderInfo-cart-left">
              <img src={item.image} alt="product image" />
            </div>
            <div className="orderInfo-cart-right">
              <div>
                <p className="orderInfo-cart-right-name">{item.name}</p>
                <p className="orderInfo-cart-right-id">ID : {item._id}</p>
              </div>
              <div>
                <p className="orderInfo-cart-right-price">₹ {item.price}</p>
                <p className="orderInfo-cart-right-quantity">
                  Qty : {item.quantity}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Cart>
      <Container1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        <div className="orderInfo-payment">
          <p className="orderInfo-payment-address-header">Payment</p>
          <p>
            Visa **42 <span>VISA</span>
          </p>
        </div>
        <div className="orderInfo-address">
          <p className="orderInfo-payment-address-header">Delivery</p>
          <p className="orderInfo-address-address">Address</p>
          <div>
            <p> {orderInfo.shippingInfo.address},</p>
            <p>
              {orderInfo.shippingInfo.city}, {orderInfo.shippingInfo.state},
            </p>
            <p>
              {orderInfo.shippingInfo.country} -{" "}
              {orderInfo.shippingInfo.pinCode}
            </p>
          </div>
        </div>
      </Container1>
      <Container2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.8 }}
      >
        <div className="orderInfo-redirects">
          <p className="orderInfo-redirects-summary-header">Redirects</p>
          <div onClick={()=>{exitOrderInfo()}} >ALL Orders   <CallMadeOutlinedIcon fontSize="small"/></div>
          <div onClick={()=>{navigate('/profile')}}>Profile   <CallMadeOutlinedIcon fontSize="small"/></div>
          <div onClick={()=>{navigate('/')}}>Home   <CallMadeOutlinedIcon fontSize="small"/></div>
        </div>
        <div className="orderInfo-summary">
          <p className="orderInfo-redirects-summary-header">Order Summary</p>
          <div className="orderInfo-summary-inner">
            <p>Item Cost</p>
            <p>₹ {orderInfo.itemPrice} </p>
          </div>
          <div className="orderInfo-summary-inner">
            <p>Delivery charges</p>
            <p>₹ {orderInfo.shippingPrice} </p>
          </div>
          <div className="orderInfo-summary-inner">
            <p>TAX</p>
            <p>₹ {orderInfo.taxPrice} </p>
          </div>
          <div className="orderInfo-summary-finalCost">
            <p>Total:</p>
            <p className="orderInfo-summary-finalCost-cost">
              ₹ {orderInfo.totalPrice}
            </p>
          </div>
        </div>
      </Container2>
    </Wrapper>
  );
};

export default OrderInfoLayer;

const Wrapper = styled(motion.div)`
  margin: 1rem;
  padding: 1rem;
  border-radius: 6px;
  background-color: white;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.06);

  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Upper = styled(motion.div)`
  width: 100%;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #d1d1d1;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  .order-orderinfo-id {
    font-size: 1.5rem;
    color: #232323;
    font-weight: 500;
  }
  .order-orderinfo-date {
    color: #909090;
    span {
      color: #232323;
    }
  }
  div {
    display: flex;
    gap: 1rem;
  }
  .order-orderinfo-estimation {
    gap: 0.5rem;
    color: #2bb594;
    border-left: 1px solid #909090;
    padding-left: 1rem;
  }
  .order-orderInfo-orderStatus {
    color: #909090;
    span {
      color: white;
      background-color: #2bb594;
      border-radius: 6px;
      padding: 0.3rem 0.8rem;
    }
  }
`;
const Cart = styled(motion.div)`
  color: #343434;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #d1d1d1;
  .orderInfo-cart {
    display: flex;
    gap: 1rem;
    margin: 1rem 0;
  }

  .orderInfo-cart-left {
    height: 5rem;
    width: 5rem;
    border-radius: 6px;
    background-color: #f2f2f2;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 3.5rem;
      width: 3.5rem;
    }
  }
  .orderInfo-cart-right {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .orderInfo-cart-right-name {
      font-size: 1.4rem;
      font-weight: 300;
    }
    .orderInfo-cart-right-id {
      color: #b6b6b6;
    }
    .orderInfo-cart-right-price {
      text-align: right;
      font-size: 1.4rem;
      font-weight: 500;
    }
    .orderInfo-cart-right-quantity {
      text-align: right;
    }
  }
`;

const Container1 = styled(motion.div)`
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #d1d1d1;

  .orderInfo-payment-address-header {
    font-weight: 600;
    font-size: 1.2rem;
    padding-bottom: 1rem;
  }
  .orderInfo-payment {
    flex: 1;
    span {
      background-color: lightblue;
      font-size: 0.7rem;
      color: blue;
      font-style: italic;
      font-weight: 500;
      padding: 0.1rem 0.2rem;
      border-radius: 4px;
    }
  }
  .orderInfo-address {
    flex: 1;

    .orderInfo-address-address {
      color: #909090;
    }
  }
`;
const Container2 = styled(motion.div)`
  display: flex;
  padding-bottom: 1.5rem;
  gap: 1rem;
  justify-content: space-between;

  .orderInfo-redirects-summary-header {
    font-weight: 600;
    font-size: 1.2rem;
    padding-bottom: 1rem;
    color: #000;
  }
  .orderInfo-redirects {
    flex: 1;
    color:#454545;

    div{
      width:max-content;
      border-bottom: 1px solid white;
      transition: 0.3s;
      &:hover{
        border-color: #454545;
      }
    }
  }
  .orderInfo-summary {
    flex: 1;
  }

  .orderInfo-summary-inner {
    display: flex;
    justify-content: space-between;
    color: #898989;
  }
  .orderInfo-summary-finalCost {
    display: flex;
    justify-content: space-between;
    color: #898989;
    font-weight: 600;

    .orderInfo-summary-finalCost-cost {
      color: #343434;
    }
  }
`;
