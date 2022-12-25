import React from "react";
import { Step, StepLabel, Stepper, Typography } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import "../../../index.css"
const Steps = ({ activeStep }) => {
  const stepList = [
    {
      label: <Typography>Shiping Info</Typography>,
      icon: <LocalShippingIcon />,
    },
    {
      label: <Typography>Confirm Order</Typography>,
      icon: <LibraryAddCheckIcon />,
    },
    {
      label: <Typography>Payment</Typography>,
      icon: <AccountBalanceWalletIcon />,
    },
  ];
  const styles = {
    boxSizing: "border-box",
    padding: "1rem",
  };
  return (
    <>
      <Stepper alternativeLabel activeStep={activeStep} style={styles}>
        {stepList.map((i, index) => (
          <Step
            key={index}
            active={activeStep === index ? true : false}
            completed={activeStep >= index ? true : false}
          >
            <StepLabel
            color={ activeStep >= index ? "#2bb595": "#909090" }
             icon={i.icon}></StepLabel>
          </Step>
        ))}
      </Stepper>
    </>
  );
};

export default Steps;
