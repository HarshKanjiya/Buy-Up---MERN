import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Body, Container, Navigators, Wrapper } from "./Orders.styles";
import Header from "../../layouts/Header";
import LoadingScreen from "../../components/LoadingScreen";
import {
  clearErrorsInOrder,
  getUserOrders,
} from "../../../redux/slices/OrderSlice";
import { Alert } from "../../components/Alert";
import MyOrdersCardView from "../../components/myOrdersCardView";
import OrderInfoLayer from "../../layouts/OrderInfoLayer";

const Orders = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);
  const { loading, orderList, errorInOrder, message } = useSelector(
    (state) => state.order
  );


  const [OrderId, setOrderId] = useState(null);
  const [orderInfo, setOrderInfo] = useState(null);

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login?redirect=/orders");
    }
    if (errorInOrder) {
      Alert({
        icon: "error",
        text: "Something went Wrong, Please try Again!",
      });
      dispatch(clearErrorsInOrder());
    }
  }, [isAuthenticated, errorInOrder]);

  useEffect(() => {
    dispatch(getUserOrders({}));
  }, []);

  const HelperProductInfoSetter = (order) => {
    setOrderId(order._id);
    setOrderInfo(order);
  };
  const HelperMoveToOrderList = () => {
    dispatch(getUserOrders({}));
    setOrderId(null);
    setOrderInfo(null);
  };

  return (
    <>
      <Header />
      {loading ? (
        <LoadingScreen size="small" />
      ) : (
        <div>
          <Wrapper>
            <Container>
              <Navigators>
                <p
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Home
                </p>
                <p
                  className={OrderId ? null : "orders-lastNav"}
                  onClick={HelperMoveToOrderList}
                >
                  Orders
                </p>
                {OrderId && <p className="orders-lastNav">ID {OrderId}</p>}
              </Navigators>

              {orderInfo ? (
                <OrderInfoLayer orderInfo={orderInfo} />
              ) : (
                <>
                  <Body>
                    <MyOrdersCardView Helper={HelperProductInfoSetter} />
                  </Body>
                </>
              )}
            </Container>
          </Wrapper>
        </div>
      )}
    </>
  );
};

export default Orders;
