import React from "react";
import { Doughnut, Line } from "react-chartjs-2";

import {
  ChartWrapper,
  DoughnutChartWrapper,
  HeaderElement,
  HeaderElementsWrapper,
  HeadLine,
  HeadLineBeta,
  LineGraphWrapper,
} from "./DashboardLayout.styles";
import ProfitImg from "../../../../assets/images/money.png";
import userImg from "../../../../assets/images/user (1).png";
import ProductImg from "../../../../assets/images/box.png";
import ordersImg from "../../../../assets/images/package-box.png";

import { Chart as ChartJS, registerables } from "chart.js";
import { useSelector } from "react-redux";
ChartJS.register(...registerables);

const DashboardLayout = () => {
  const { adminProducts, profit, adminOrders,adminUsers } = useSelector(
    (state) => state.admin
  );

  let OutOfStockProducts = 0;

  adminProducts.map((product) => {
    if (product.stock === 0) {
      OutOfStockProducts += 1;
    }
  });

  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "total amount",
        backgroundColor: ["#2bb594"],
        hoverBackgroundColor: ["red"],
        data: [0, 5000],
      },
    ],
  };
  const doughnutState = {
    labels: ["out of Stock", "in Stock"],
    datasets: [
      {
        backgroundColor: ["tomato", "#2bb594"],
        hoverBackgroundColor: ["red", "#00a968"],
        data: [OutOfStockProducts, adminProducts.length - OutOfStockProducts],
      },
    ],
  };

  return (
    <div>
      <HeadLine>Dashboard</HeadLine>

      <HeadLineBeta>Profit</HeadLineBeta>
      <HeaderElementsWrapper>
        <HeaderElement className="dashboardlayout-overview-profit">
          <p className="dashboardlayout-header-ele-subtext">Total GAIN</p>
          <p className="dashboardlayout-header-ele-text">₹ {profit}</p>
          <img src={ProfitImg} alt="img" />
        </HeaderElement>
      </HeaderElementsWrapper>

      <HeadLineBeta>Overview</HeadLineBeta>
      <HeaderElementsWrapper>
        <HeaderElement className="dashboardlayout-overview-products">
          <p className="dashboardlayout-header-ele-subtext">Products</p>
          <p className="dashboardlayout-header-ele-text">
            {adminProducts.length}
          </p>
          <img src={ProductImg} alt="img" />
        </HeaderElement>
        <HeaderElement className="dashboardlayout-overview-orders">
          <p className="dashboardlayout-header-ele-subtext">Orders</p>
          <p className="dashboardlayout-header-ele-text">
            {adminOrders.length}
          </p>
          <img src={ordersImg} alt="img" />
        </HeaderElement>
        <HeaderElement className="dashboardlayout-overview-users">
          <p className="dashboardlayout-header-ele-subtext">Users</p>
          <p className="dashboardlayout-header-ele-text">{adminUsers.length}</p>
          <img src={userImg} alt="img" />
        </HeaderElement>
      </HeaderElementsWrapper>

      <ChartWrapper>
        <div style={{ flex: 0.35 }}>
          <HeadLineBeta>Stock Details</HeadLineBeta>
          <DoughnutChartWrapper>
            <Doughnut data={doughnutState} />
          </DoughnutChartWrapper>
        </div>
        <div style={{ flex: 0.65 }}>
          <HeadLineBeta>Money Earned</HeadLineBeta>
          <LineGraphWrapper>
            <Line
              data={lineState}
              options={{
                responsive: true,
              }}
            />
          </LineGraphWrapper>
        </div>
      </ChartWrapper>
    </div>
  );
};

export default DashboardLayout;
