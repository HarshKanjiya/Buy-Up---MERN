import React, { useEffect, useState } from "react";
import Logo from "../../../assets/images/logo.png";
import { Country, State } from "country-state-city";
import { Alert } from "../../components/Alert";
import {
  AddressWrapper,
  Container,
  Footer,
  Form,
  LeftSection,
  Locationselector,
  LocationWrapper,
  RightSection,
  RightSectionHeader,
  SaveBtn,
  TextInput,
  Wrapper,
} from "./Shipping.styles";
import { useDispatch, useSelector } from "react-redux";
import SaveIcon from "@mui/icons-material/Save";
import Steps from "../../layouts/Stepper -- checkout page/Stepper";
import { SAVE_SHIPPING_INFO } from "../../../redux/slices/cartPageSlice";
import { AnimatePresence, motion } from "framer-motion";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';


const Shipping = () => {
  const dispatch = useDispatch();
  const { SHIPPING_INFO } = useSelector((state) => state.cart);
  const [shippingInfo, setShippingInfo] = useState(SHIPPING_INFO);
  const [activeStep, setActiveStep] = useState(0);
  const [Delta, setDelta] = useState(0);

  const CHANGEActiveStep = (newStep) => {
    setActiveStep(newStep);
    setDelta(newStep - activeStep);
  };

  const HelperShippingSubmit = () => {
    let checker = false;

    shippingInfo.address.trim().split("").length === 0
      ? (checker = false)
      : (checker = true);
    shippingInfo.city.trim().split("").length === 0
      ? (checker = false)
      : (checker = true);
    shippingInfo.country.trim().split("").length === 0
      ? (checker = false)
      : (checker = true);
    shippingInfo.state.trim().split("").length === 0 ||
    shippingInfo.state === ""
      ? (checker = false)
      : (checker = true);

    if (
      !(shippingInfo.phoneNo.trim().split().length > 10) &&
      !(shippingInfo.phoneNo.trim().split().length < 10)
    ) {
      console.log("object :>> ", shippingInfo.phoneNo.trim().split("").length);
      checker = false;
      Alert({
        icon: "error",
        text: "invalid Phone number",
        title: "Oops!",
      });
      return;
    } else {
      checker = true;
    }
    if (shippingInfo.pinCode.trim().split("").length !== 6) {
      checker = false;
      Alert({
        icon: "error",
        text: "invalid Pin code",
        title: "Oops!",
      });
      return;
    } else {
      checker = true;
    }

    if (!checker) {
      Alert({
        icon: "error",
        text: "Please Fill all the details",
        title: "Oops!",
      });
      return;
    }
    // save info
    CHANGEActiveStep(1);
    dispatch(SAVE_SHIPPING_INFO(shippingInfo));
  };

  return (
    <Wrapper>
      <Container>
        <LeftSection>
          <img src={Logo} alt="Buy Up" />
          <div className="LeftSection-mids">
            <p> Shipping Info </p>
          </div>
        </LeftSection>
        <RightSection>
          <Steps activeStep={activeStep} />
          <AnimatePresence mode="wait">
            {/* shipping info body */}
            {activeStep === 0 ? (
              <motion.div
                key="Shipping-details"
                initial={{
                  opacity: ` ${Delta >= 0 ? 0 : 1}`,
                  x: `${Delta >= 0 ? "0%" : "-100%"}`,
                }}
                animate={{ opacity: 1, x: "0%" }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.3, type: "tween", ease: "easeInOut" }}
              >
                <Form>
                  <RightSectionHeader>
                    <p>Add Your Location</p>
                  </RightSectionHeader>
                  <AddressWrapper>
                    <TextInput
                      variant="standard"
                      label="address"
                      multiline
                      maxRows={4}
                      value={shippingInfo ? shippingInfo.address : ""}
                      onChange={(event) => {
                        setShippingInfo({
                          ...shippingInfo,
                          address: event.target.value,
                        });
                      }}
                    />
                    <div>
                      <TextInput
                        variant="standard"
                        label="city"
                        value={shippingInfo ? shippingInfo.city : ""}
                        onChange={(event) => {
                          setShippingInfo({
                            ...shippingInfo,
                            city: event.target.value,
                          });
                        }}
                      />
                      <TextInput
                        variant="standard"
                        label="pin code"
                        value={shippingInfo ? shippingInfo.pinCode : ""}
                        onChange={(event) => {
                          if (event.target.value.trim().split("").length <= 6) {
                            setShippingInfo({
                              ...shippingInfo,
                              pinCode: event.target.value,
                            });
                          }
                        }}
                      />
                    </div>
                  </AddressWrapper>

                  <LocationWrapper>
                    <Locationselector
                      required
                      value={shippingInfo ? shippingInfo.country : ""}
                      onChange={(event) =>
                        setShippingInfo({
                          ...shippingInfo,
                          country: event.target.value,
                        })
                      }
                    >
                      <option value="">country</option>
                      {Country &&
                        Country.getAllCountries().map((i) => (
                          <option value={i.isoCode} key={i.isoCode}>
                            {i.name}
                          </option>
                        ))}
                    </Locationselector>

                    <Locationselector
                      required
                      disabled={
                        shippingInfo && shippingInfo.country === ""
                          ? true
                          : false
                      }
                      value={shippingInfo ? shippingInfo.state : ""}
                      onChange={(event) =>
                        setShippingInfo({
                          ...shippingInfo,
                          state: event.target.value,
                        })
                      }
                    >
                      <option value="">state</option>
                      {State &&
                        State.getStatesOfCountry(
                          shippingInfo ? shippingInfo.country : "in"
                        ).map((i) => (
                          <option value={i.isoCode} key={i.isoCode}>
                            {i.name}
                          </option>
                        ))}
                    </Locationselector>
                  </LocationWrapper>
                  <LocationWrapper>
                    <TextInput
                      className="width50"
                      variant="standard"
                      label="phone number"
                      type="text"
                      value={shippingInfo ? shippingInfo.phoneNo : ""}
                      onChange={(event) => {
                        if (event.target.value.trim().split("").length <= 10) {
                          setShippingInfo({
                            ...shippingInfo,
                            phoneNo: event.target.value,
                          });
                        }
                      }}
                    />
                  </LocationWrapper>
                </Form>
              </motion.div>
            ) : null}

            {activeStep === 1 ? (
              <motion.div
                key="confirm-order"
                initial={{ x: `${Delta > 0 ? "100%" : "-100%"}` }}
                animate={{ x: 0 }}
                exit={{ x: `${Delta > 0 ? "100%" : "-100%"}` }}
                transition={{ duration: 0.3, type: "tween", ease: "easeInOut" }}
              >
                qaz
              </motion.div>
            ) : null}
          </AnimatePresence>

          {/* footer zone */}
          <Footer>
            <AnimatePresence mode="wait">
              {activeStep === 0 ? (
                <motion.div
                  key="Shipping-details-footer"
                  initial={{
                    x: `${Delta >= 0 ? "0%" : "-450%"}`,
                  }}
                  animate={{ x: "0%" }}
                  transition={{
                    duration: 0.3,
                    type: "tween",
                    ease: "easeInOut",
                  }}
                  exit={{ x: "-500%" }}
                >
                  <SaveBtn variant="contained" onClick={HelperShippingSubmit}>
                    <SaveIcon fontSize="small" />
                    &nbsp; save & continue
                  </SaveBtn>
                </motion.div>
              ) : null}
              {activeStep === 1 ? (
                <motion.div
                  key="confirm-order"
                  initial={{ x: `${Delta > 0 ? "500%" : "-500%"}` }}
                  animate={{ x: 0 }}
                  transition={{
                    duration: 0.3,
                    type: "tween",
                    ease: "easeInOut",
                  }}
                  exit={{ x: `${Delta > 0 ? "500%" : "-500%"}` }}
                  style={{
                    display:"flex",
                    gap:"2rem"
                  }}
                >
                  <SaveBtn
                    variant="contained"
                    onClick={() => {
                      CHANGEActiveStep(0);
                    }}
                  >
                    <NavigateBeforeIcon fontSize="small" />
                    <p>back</p>
                  </SaveBtn>
                  <SaveBtn
                    variant="contained"
                    onClick={() => {
                      CHANGEActiveStep(0);
                    }}
                  >
                    <p>next</p>
                    <NavigateNextIcon fontSize="small" />
                  </SaveBtn>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </Footer>
        </RightSection>
      </Container>
    </Wrapper>
  );
};

export default Shipping;
