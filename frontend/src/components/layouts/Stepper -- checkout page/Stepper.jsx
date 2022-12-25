import React from "react";
import { Step, StepLabel, Stepper, Typography } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import "../../../index.css";
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
        {stepList.map((i, index) => {
          return (
            <Step
              sx={{
                color: "#b6b6b6",
                "& .MuiStepLabel-root .Mui-completed": {
                  color: "#2bb594", // circle color (COMPLETED)
                },
                "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                  {
                    color: "grey.500", // Just text label (COMPLETED)
                  },
                "& .MuiStepLabel-root .Mui-active": {
                  color: "#2bb594", // circle color (ACTIVE)
                },
                "& .MuiStepLabel-label": {
                  marginTop: "-0rem",
                },
                "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                  {
                    color: "#2bb594", // Just text label (ACTIVE)
                  },
                "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                  fill: "#b6b6b6", // circle's number (ACTIVE)
                },
              }}
              key={index}
              active={activeStep === index ? true : false}
              completed={activeStep >= index ? true : false}
            >
              <StepLabel
                color={activeStep >= index ? "#2bb595" : "#909090"}
                icon={i.icon}
              >
                {i.label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </>
  );
};

export default Steps;
