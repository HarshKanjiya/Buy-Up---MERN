import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../layouts/Header";
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
import DashboardLayout from "../../layouts/dashboard/Dashboard";

const Dashboard = () => {
  const navigate = useNavigate();
  const { userInfo, isAuthenticated } = useSelector((state) => state.user);
  const [layoutSelector, setLayoutSelector] = useState("");
  // useEffect(() => {
  //   if (isAuthenticated === false || userInfo.role !== "admin") {
  //     navigate("/");
  //   }
  // }, []);

  return (
    <>
      <Header />
      <Wrapper>
        <Container>
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
            <DashboardLayout />
          </Right>
        </Container>
      </Wrapper>
    </>
  );
};

export default Dashboard;
