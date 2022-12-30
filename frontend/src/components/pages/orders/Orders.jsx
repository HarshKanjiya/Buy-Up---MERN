import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Body, Container, Navigators, Wrapper } from "./Orders.styles";
import Header from "../../layouts/Header";
import LoadingScreen from "../../components/LoadingScreen";
import { getUserOrders } from "../../../redux/slices/OrderSlice";

const Orders = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);
  const { loading,
    orderList,
    orderInfo,
    errorInOrder,
    message, } = useSelector((state) => state.order);

  const [OrderId, setOrderId] = useState("qq");
  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login?redirect=/orders");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    dispatch(getUserOrders({}));
  }, []);

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
                <p>Home</p>
                <p className={OrderId ? null : "orders-lastNav"}>Orders</p>
                {OrderId && <p className="orders-lastNav">ID {OrderId}</p>}
              </Navigators>

              <Body>{orderList && orderList.map((order) => {})}</Body>
            </Container>
          </Wrapper>
        </div>
      )}
    </>
  );
};

export default Orders;
