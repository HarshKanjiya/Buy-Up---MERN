import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const MyOrdersCardView = ({Helper}) => {
  const { orderList } = useSelector((state) => state.order);

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

  return (
    <>
      {orderList &&
        orderList.map((order, index) => {
          return (
            <Wrapper
              key={order._id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: (index + 1) * 0.1 }}
              layout
              onClick={() => {
                Helper(order);
              }}
            >
              <Left>
                <ImgWrapper>
                  <img src={order.orderItems[0].image} alt="product image" />
                </ImgWrapper>
                <p>
                  {order.orderItems.length !== 1
                    ? `+${order.orderItems.length - 1}`
                    : null}
                </p>
              </Left>
              <Right>
                <div className="order-idNdate">
                  <p className="order-id">
                    Order ID : <span>{order._id}</span>
                  </p>
                  <p className="order-date">
                    Order Date : <span>{ChangeFormat(order.paidAt)}</span>
                  </p>
                  <p className="order-date">
                    Price : &nbsp;
                    <span className="order-inner-price">
                      ₹ {order.totalPrice}
                    </span>{" "}
                  </p>
                </div>
                <Extras>
                  <p>Status:</p>
                  <p className="order-cart-status">{order.orderStatus}</p>
                </Extras>
              </Right>
            </Wrapper>
          );
        })}
    </>
  );
};

export default MyOrdersCardView;

const Wrapper = styled(motion.div)`
user-select: none;
  width: 100%;
  display: flex;
  gap: 2.5rem;
  margin: 1rem 0;
  background-color: white;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  padding: 1rem;
  transition: 300ms;
  &:hover {
    box-shadow: 0 5px 2rem rgba(0, 0, 0, 0.1);
  }
`;
const Left = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.8rem;
  color: #d1d1d1;
  position: relative;
  p {
    position: absolute;
    bottom: 0;
    right: -1.7rem;
  }
`;
const ImgWrapper = styled.div`
  height: 5rem;
  width: 5rem;
  overflow: hidden;
  border-radius: 4px;
  border: 1px solid #b6b6b6;
  img {
    height: 100%;
    width: 100%;
  }
`;
const Right = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  .order-idNdate {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    justify-content: flex-start;

    span {
      color: #454545;
    }
    .order-id,
    .order-date {
      color: #b6b6b6;
    }

    .order-inner-price {
      color: white;
      background-color: #2bb594;
      border-radius: 4px;
      padding: 0.1rem 0.5rem;
    }
  }
`;
const Extras = styled.div`
  width: max-content;
  padding: 0 2rem;
  p {
    color: #909090;
  }
  .order-cart-status {
    color: #2bb594;
  }
`;
