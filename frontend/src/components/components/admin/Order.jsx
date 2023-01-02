import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { HeadLineBeta } from "../../layouts/dashboard/dashboard/DashboardLayout.styles";
import LoadingScreen from "../LoadingScreen";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "../Alert";
import {
  clearDeleteSuccessInAdmin,
  clearErrorsInAdmin,
  deleteOrder,
  getAdminOrders,
  updateOrderStatus,
} from "../../../redux/slices/AdminSlice";

const AdminOrder = ({ setOrderSelector, order }) => {
  const dispatch = useDispatch();
  const { loading, editedSuccess, deletedSuccess, errorInAdmin } =
    useSelector((state) => state.admin);
  const [status, setStatus] = useState(order.orderStatus);
  const initStatus = order.orderStatus;

  useEffect(() => {
    if (editedSuccess || deletedSuccess ) {
      setOrderSelector(false);
    }
  }, [editedSuccess, deletedSuccess]);

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

  const SubmitHandler = () => {
    if (status === initStatus || status === "") {
      Alert({
        icon: "error",
        text: "Please change the Status",
        title: "Oops!",
      });
      return;
    }

    const myForm = new FormData();
    myForm.set("status", status);
    myForm.set("orderItems", order.orderItems);
    dispatch(updateOrderStatus({ id: order._id, order: myForm }));
  };


  const SubmitHandlerDLTFXN = () => {
    dispatch(deleteOrder(order._id));
  };

  return (
    <>
      {loading ? (
        <LoadingScreen size="small" />
      ) : (
        <Wrapper
          key="order"
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          transition={{ duration: 0.3, type: "tween" }}
        >
          <ContainerWrapper>
            <div>
              <HeadLineBeta>Shipping Info</HeadLineBeta>
              <Container>
                <p> {order.shippingInfo.phoneNo} </p>
                <p> {order.shippingInfo.address}, </p>
                <p> {order.shippingInfo.city}, </p>
                <p> {order.shippingInfo.state}, </p>
                <p>
                  {order.shippingInfo.country} - {order.shippingInfo.pinCode}.{" "}
                </p>
              </Container>
            </div>

            <div>
              <HeadLineBeta>Payment Info</HeadLineBeta>
              <Container>
                <p className="admin-order-date">
                  {" "}
                  Ordered on : <span> {ChangeFormat(order.paidAt)} </span>{" "}
                </p>
                <p className="admin-order-itemPrice">
                  &nbsp;&nbsp;Item Price : <span>₹ {order.itemPrice}</span>
                </p>
                <p className="admin-order-taxPrice">
                  &nbsp;&nbsp;&nbsp;&nbsp;Tax Price :{" "}
                  <span>₹ {order.taxPrice}</span>
                </p>
                <p className="admin-order-totalPrice">
                  &nbsp;Total Price : <span>₹ {order.totalPrice}</span>
                </p>
              </Container>
            </div>
          </ContainerWrapper>

          <HeadLineBeta>Cart Info</HeadLineBeta>
          <Container2>
            {order.orderItems.map((item, index) => (
              <Card key={index}>
                <div className="admin-order-item-img-wrapper">
                  <img src={item.image} alt={item.name} />
                </div>
                <span>name :</span>
                <p>{item.name}</p>
                <span>Price :</span>
                <p>₹ {item.price}</p>
                <span>Quntity :</span>
                <p>{item.quantity}</p>
              </Card>
            ))}
          </Container2>
          <HeadLineBeta>Status Info</HeadLineBeta>
          <Container2>
            <p>orderStatus: </p>
            <select
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
              }}
            >
              <option value="">Pending</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
            </select>
            <button onClick={SubmitHandler}>SUBMIT</button>
            <button className="dlt-btn" onClick={SubmitHandlerDLTFXN}>
              DELETE
            </button>
          </Container2>
        </Wrapper>
      )}
    </>
  );
};

export default AdminOrder;

export const Wrapper = styled(motion.div)`
  width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const Container = styled.div`
  width: max-content;
  background-color: white;
  border-radius: 7px;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  padding: 1rem;

  .admin-order-date {
    margin: 0.5em 0;
    color: #a1a1a1;
    span {
      font-weight: 600;
      color: #232323;
    }
    span {
      color: #232323;
    }
  }
  .admin-order-itemPrice {
    color: #a1a1a1;
    span {
      color: #232323;
    }
  }
  .admin-order-taxPrice {
    color: #a1a1a1;
    span {
      color: #232323;
    }
  }
  .admin-order-totalPrice {
    color: #a1a1a1;
    span {
      color: #232323;
    }
  }
`;
export const Container2 = styled.div`
  width: max-content;
  background-color: white;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 7px;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;

  gap: 0.1rem;
  padding: 1rem;

  .dlt-btn {
    background-color: red;
  }
  span {
    color: #a1a1a1;
    font-size: 0.7rem;
  }

  select {
    padding: 0 0.5rem;
    margin: 0 2rem;
    color: #2bb594;
    font-weight: 700;
    outline: none;
    border: none;
  }
  button {
    padding: 0.5rem 1.5rem;
    border: 1px solid white;
    font-size: 0.8rem;
    letter-spacing: 1.5px;
    border-radius: 5px;
    background-color: #2bb594;
    color: white;
    box-shadow: 0 5px 1rem rgba(0, 0, 0, 0.1);

    &:disabled {
      background-color: #a1a1a1;
      box-shadow: none;
    }
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 170px;
  margin: 0.5rem;
  padding: 1rem;
  border: 1px solid #f5f5f5;
  border-radius: 6px;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.06);
  img {
    height: 5rem;
    width: 5rem;
    border-radius: 6px;
  }
  .admin-order-item-img-wrapper {
    border-radius: 6px;
    background-color: #fafafa;
    border: 1px solid #f5f5f5;
    width: 7rem;
    height: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 0.5rem;
  }
`;
const ContainerWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;
