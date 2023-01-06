import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../layouts/NavBar/Header";
import {
  Container,
  Left,
  LeftElement,
  LeftLogoEle,
  Right,
  Wrapper,
} from "./Dashboard.styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Logo from "../../../assets/images/logo.png";
import CategoryIcon from "@mui/icons-material/Category";
import DashboardLayout from "../../layouts/dashboard/dashboard/DashboardLayout";
import {
  clearErrorsInAdmin,
  getAdminOrders,
  getAdminProducts,
  getAllUsers,
} from "../../../redux/slices/AdminSlice";
import LoadingScreen from "../../components/LoadingScreen";
import { Alert } from "../../components/Alert";
import { AnimatePresence, motion } from "framer-motion";
import ProductsLayout from "../../layouts/dashboard/products/productsLayout";
import OrdersLayout from "../../layouts/dashboard/orders/OrdersLayout";
import UsersLayout from "../../layouts/dashboard/users/UsersLayout";
import ReviewsLayout from "../../layouts/dashboard/reviews/ReviewsLayout";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo, isAuthenticated } = useSelector((state) => state.user);
  const { errorInAdmin, loading } = useSelector((state) => state.admin);

  const [layoutSelector, setLayoutSelector] = useState("dashboard-layout");

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/");
    }
    if (userInfo && userInfo.role !== "admin") {
      navigate("/");
    }
    dispatch(getAdminProducts({}));
    dispatch(getAllUsers({}));
    dispatch(getAdminOrders({}));
  }, []);

  useEffect(() => {
    if (errorInAdmin) {
      Alert({
        icon: "error",
        title: "Oops!",
        text: errorInAdmin,
      });
      dispatch(clearErrorsInAdmin());
    }
  }, [errorInAdmin]);

  if (userInfo && userInfo.role === "admin") {
    return (
      <>
        <Header />
        <Wrapper>
          <Container>
            {loading ? (
              <LoadingScreen size="small" />
            ) : (
              <>
                <Left>
                  <LeftLogoEle>
                    <img src={Logo} alt="logo" />
                  </LeftLogoEle>

                  <LeftElement
                    onClick={() => {
                      setLayoutSelector("dashboard-layout");
                    }}
                  >
                    <DashboardIcon
                      className={
                        layoutSelector === "dashboard-layout"
                          ? "dashboard-left-hover-white"
                          : null
                      }
                    />
                    <p>Dashboard</p>
                  </LeftElement>

                  <LeftElement
                    onClick={() => {
                      setLayoutSelector("products-layout");
                    }}
                  >
                    <CategoryIcon
                      className={
                        layoutSelector === "products-layout"
                          ? "dashboard-left-hover-white"
                          : null
                      }
                    />
                    <p>Products</p>
                  </LeftElement>

                  <LeftElement
                    onClick={() => {
                      setLayoutSelector("orders-layout");
                    }}
                  >
                    <LocalShippingIcon
                      className={
                        layoutSelector === "orders-layout"
                          ? "dashboard-left-hover-white"
                          : null
                      }
                    />
                    <p>Orders</p>
                  </LeftElement>

                  <LeftElement
                    onClick={() => {
                      setLayoutSelector("users-layout");
                    }}
                  >
                    <PeopleIcon
                      className={
                        layoutSelector === "users-layout"
                          ? "dashboard-left-hover-white"
                          : null
                      }
                    />
                    <p>Users</p>
                  </LeftElement>

                  <LeftElement
                    onClick={() => {
                      setLayoutSelector("reviews-layout");
                    }}
                  >
                    <ThumbsUpDownIcon
                      className={
                        layoutSelector === "reviews-layout"
                          ? "dashboard-left-hover-white"
                          : null
                      }
                    />
                    <p>Reviews</p>
                  </LeftElement>
                </Left>
                <Right>
                  <AnimatePresence mode="wait">
                    {layoutSelector === "dashboard-layout" && (
                      <motion.div
                        key="dashboard-layout"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, type: "tween" }}
                        style={{ width: "100%" }}
                      >
                        <DashboardLayout />
                      </motion.div>
                    )}
                    {layoutSelector === "products-layout" && (
                      <motion.div
                        key="products-layout"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, type: "tween" }}
                        style={{ width: "100%" }}
                      >
                        <ProductsLayout />
                      </motion.div>
                    )}
                    {layoutSelector === "orders-layout" && (
                      <motion.div
                        key="orders-layout"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, type: "tween" }}
                        style={{ width: "100%" }}
                      >
                        <OrdersLayout />
                      </motion.div>
                    )}
                    {layoutSelector === "users-layout" && (
                      <motion.div
                        key="users-layout"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, type: "tween" }}
                        style={{ width: "100%" }}
                      >
                        <UsersLayout />
                      </motion.div>
                    )}

                    {layoutSelector === "reviews-layout" && (
                      <motion.div
                        key="reviews-layout"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, type: "tween" }}
                        style={{ width: "100%" }}
                      >
                        <ReviewsLayout />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Right>
              </>
            )}
          </Container>
        </Wrapper>
      </>
    );
  }
};

export default Dashboard;
