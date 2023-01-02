import React, { useEffect, useState } from "react";
import {
  HeaderElementsWrapper,
  HeadLine,
} from "../dashboard/DashboardLayout.styles";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Alert } from "../../../components/Alert";
import {
  clearDeleteSuccessInAdmin,
  clearEditSuccessInAdmin,
  clearErrorsInAdmin,
  getAdminOrders,
  getAdminProducts,
} from "../../../../redux/slices/AdminSlice";
import { CardWrapper, Left, Right } from "../products/productsLayout.styles";
import AdminOrder from "../../../components/admin/Order";
import { AnimatePresence, motion } from "framer-motion";
import styled from "@emotion/styled";

const OrdersLayout = () => {
  const dispatch = useDispatch();
  const { adminOrders, errorInAdmin, editedSuccess, deletedSuccess } =
    useSelector((state) => state.admin);
  const [orderSelector, setOrderSelector] = useState(false);
  const [order, setOrder] = useState(null);

  useEffect(() => {
    if (errorInAdmin) {
      Alert({
        icon: "error",
        title: "Oops!",
        text: errorInAdmin,
      });
      dispatch(clearErrorsInAdmin());
    }
    if (editedSuccess) {
      Alert({
        text: "Order Status Updated!",
        title: "",
      });
      dispatch(clearEditSuccessInAdmin());
      dispatch(getAdminProducts({}));
      dispatch(getAdminOrders({}));
    }
    if (deletedSuccess) {
      Alert({
        text: "Order Deleted!",
        title: "",
      });
      dispatch(clearDeleteSuccessInAdmin());
      dispatch(getAdminOrders({}));
    }
  }, [errorInAdmin, editedSuccess]);

  return (
    <div style={{ overflowX: "hidden" }}>
      <AnimatePresence mode="wait">
        {orderSelector ? (
          <motion.div
            key="1"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.3, type: "tween" }}
            style={{ display: "flex", gap: "2rem" }}
          >
            <BackBtn
              onClick={() => {
                setOrderSelector(false);
              }}
            >
              <ArrowBackIcon />
            </BackBtn>
            <HeadLine>Orders</HeadLine>
          </motion.div>
        ) : (
          <motion.div
            key="2"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.3, type: "tween" }}
          >
            <HeadLine>Orders</HeadLine>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {orderSelector ? (
          <AdminOrder setOrderSelector={setOrderSelector} order={order} />
        ) : (
          <motion.div
            key="order-list"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.3, type: "tween" }}
          >
            {adminOrders.map((order, index) => (
              <CardWrapper
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.3 }}
                onClick={() => {
                  setOrder(order);
                  setOrderSelector(true);
                }}
              >
                <Left>
                  <p className="admin-CardWrapper-index">{index + 1}</p>
                  <p>
                    Address :{" "}
                    <span>
                      {order.shippingInfo.address}, {order.shippingInfo.city},{" "}
                      {order.shippingInfo.state}
                    </span>
                  </p>
                  <p>
                    &nbsp;Price: <span>₹ {order.totalPrice}</span>
                  </p>
                </Left>
                <Right>
                  <Status>{order.orderStatus}</Status>
                </Right>
              </CardWrapper>
            ))}{" "}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OrdersLayout;

const Status = styled.p`
  color: #2bb594;
  font-weight: 700;
`;

const BackBtn = styled(motion.div)`
  background-color: white;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 2rem;
  display: grid;
  place-content: center;
  margin: 0 1rem;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.06);
  transition: 300ms;
  &:hover {
    box-shadow: 0 0 1.7rem rgba(0, 0, 0, 0.1);
    transform: rotate(360deg);
  }
`;
