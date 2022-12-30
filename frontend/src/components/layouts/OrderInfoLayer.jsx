import styled from "@emotion/styled";
import React from "react";
import FlightIcon from "@mui/icons-material/Flight";

const OrderInfoLayer = ({ orderInfo }) => {
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

  console.log("orderInfo :>> ", orderInfo);
  return (
    <Wrapper>
      <Upper>
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
      </Upper>
      <Cart>
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
    </Wrapper>
  );
};

export default OrderInfoLayer;

const Wrapper = styled.div`
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
const Upper = styled.div`
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
`;
const Cart = styled.div`
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
