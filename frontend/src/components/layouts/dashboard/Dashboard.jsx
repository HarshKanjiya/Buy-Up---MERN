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
} from "./Dashboard.styles";
import ProfitImg from "../../../assets/images/money.png";
import userImg from "../../../assets/images/user.png";
import ProductImg from "../../../assets/images/box.png";
import ordersImg from "../../../assets/images/package-box.png";

import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

const DashboardLayout = () => {
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
        backgroundColor: ["#2bb594", "#0c3324"],
        hoverBackgroundColor: ["#34ffcf", "#00a968"],
        data: [2, 20],
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
          <p className="dashboardlayout-header-ele-text">₹ 2000</p>
          <img src={ProfitImg} alt="img" />
        </HeaderElement>
      </HeaderElementsWrapper>

      <HeadLineBeta>Overview</HeadLineBeta>
      <HeaderElementsWrapper>
        <HeaderElement className="dashboardlayout-overview-products">
          <p className="dashboardlayout-header-ele-subtext">Products</p>
          <p className="dashboardlayout-header-ele-text">34</p>
          <img src={ProductImg} alt="img" />
        </HeaderElement>
        <HeaderElement className="dashboardlayout-overview-orders">
          <p className="dashboardlayout-header-ele-subtext">Orders</p>
          <p className="dashboardlayout-header-ele-text">21</p>
          <img src={ordersImg} alt="img" />
        </HeaderElement>
        <HeaderElement className="dashboardlayout-overview-users">
          <p className="dashboardlayout-header-ele-subtext">Users</p>
          <p className="dashboardlayout-header-ele-text">2</p>
          <img src={userImg} alt="img" />
        </HeaderElement>
      </HeaderElementsWrapper>

      <ChartWrapper>
        <div style={{ flex: 1 }}>
          <HeadLineBeta>Stock Details</HeadLineBeta>
          <DoughnutChartWrapper>
            <Doughnut data={doughnutState} />
          </DoughnutChartWrapper>
        </div>
        <div style={{ flex: 1 }}>
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
