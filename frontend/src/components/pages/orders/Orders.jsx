import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Body, Container, Navigators, Wrapper } from "./Orders.styles";
import Header from "../../layouts/NavBar/Header";
import LoadingScreen from "../../components/LoadingScreen";
import {
  clearErrorsInOrder,
  getUserOrders,
} from "../../../redux/slices/OrderSlice";
import { Alert } from "../../components/Alert";
import MyOrdersCardView from "../../components/myOrdersCardView";
import OrderInfoLayer from "../../layouts/OrderInfoLayer";
import { AnimatePresence, motion } from "framer-motion";

const Orders = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);
  const { loading, orderList, errorInOrder, message } = useSelector(
    (state) => state.order
  );

  const [OrderId, setOrderId] = useState(null);
  const [orderInfo, setOrderInfo] = useState(null);
  const [orderInfoPage, setOrderInfoPage] = useState(false);

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
    setOrderInfoPage(true);
  };
  const HelperMoveToOrderList = () => {
    setOrderInfoPage(false);
    setOrderId(null);
    setOrderInfo(null);
  };

  return (
    <motion.div
      key="orderPage"
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 10, opacity: 0 }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
        type: "tween",
      }}
    >
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
              <AnimatePresence mode="wait">
                {orderInfoPage ? (
                  <OrderInfoLayer orderInfo={orderInfo} exitOrderInfo={HelperMoveToOrderList} />
                ) : (
                  <Body
                  layout
                    key="orderCardviews"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <MyOrdersCardView Helper={HelperProductInfoSetter} />
                  </Body>
                )}
              </AnimatePresence>
            </Container>
          </Wrapper>
        </div>
      )}
    </motion.div>
  );
};

export default Orders;
