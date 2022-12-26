import React, { useEffect, useRef, useState } from "react";
import Logo from "../../../assets/images/logo.png";
import { Country, State } from "country-state-city";
import { Alert } from "../../components/Alert";
import {
  AddressWrapper,
  Container,
  FinalAmountWrapper,
  Footer,
  Footer2,
  Footer3,
  Form,
  Form2,
  LeftSection,
  Locationselector,
  LocationWrapper,
  PaymentCont,
  PaymentWrapper,
  RightSection,
  RightSectionHeader,
  SaveBtn,
  TextInput,
  Wrapper,
  WrapperForScroll,
} from "./Shipping.styles";
import { useDispatch, useSelector } from "react-redux";
import SaveIcon from "@mui/icons-material/Save";
import Steps from "../../layouts/Stepper -- checkout page/Stepper";
import {
  clearErrors,
  SAVE_SHIPPING_INFO,
  getTotalCost,
  setfinalAmountForPayment,
} from "../../../redux/slices/cartPageSlice";
import { AnimatePresence, motion } from "framer-motion";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import EventIcon from "@mui/icons-material/Event";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import CartViewLayout from "../../layouts/Cart/CartViewLayout";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../../components/LoadingScreen";
import { clearErrorsInOrder, CreateOrderRequest } from "../../../redux/slices/OrderSlice";

const Shipping = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const payBtn = useRef(null);

  const { SHIPPING_INFO, error, totalCost, cartItems } = useSelector(
    (state) => state.cart
  );
  const { errorInOrder } = useSelector((state) => state.order);
  const { userInfo } = useSelector((state) => state.user);
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    country: "",
    city: "",
    pinCode: "",
    phoneNo: "",
    state: "",
  });
  const [activeStep, setActiveStep] = useState(0);
  const [Delta, setDelta] = useState(1);
  const [finalAmount, setfinalAmount] = useState(0);
  const [payLoading, setPayLoading] = useState(false);

  useEffect(() => {
    dispatch(getTotalCost());
    let temp = totalCost;
    if (totalCost > 2000) temp = temp + 400;
    temp = temp + Math.floor(totalCost * 0.18);
    setfinalAmount(temp);
  }, [cartItems, totalCost]);

  useEffect(() => {
    if (error) {
      Alert({
        icon: "error",
        text: error,
        title: "Oops!",
      });
      dispatch(clearErrors);
    }
    if (!SHIPPING_INFO) return;

    setShippingInfo(SHIPPING_INFO);

    if (SHIPPING_INFO.address.trim() === "") return;
    if (SHIPPING_INFO.country.trim() === "") return;
    if (SHIPPING_INFO.state.trim() === "") return;
    if (SHIPPING_INFO.city.trim() === "") return;
    if (SHIPPING_INFO.pinCode.trim() === "") return;
    if (SHIPPING_INFO.phoneNo.trim() === "") return;

    setActiveStep(1);
  }, [error, SHIPPING_INFO]);

  useEffect(() => {
    if (errorInOrder) {
      Alert({
        icon: "error",
        text: error,
      });
      dispatch(clearErrorsInOrder());
    }
  }, [errorInOrder]);

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

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: totalCost,
    taxPrice: Math.round(totalCost * 0.18),
    shippingPrice: totalCost > 2000 ? 0 : 400,
    totalPrice: finalAmount,
  };

  const HelperPayment = async () => {
    setPayLoading(true);
    payBtn.current.disabled = true;
    try {
      const config = {
        Headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/v1/payment/process",
        { amount: Math.round(finalAmount * 100) },
        config
      );
      console.log("data :>> ", data);
      const client_secret = data.client_secret;

      if (!stripe || !elements) {
        setPayLoading(false);
        return;
      }

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: userInfo.name,
            email: userInfo.email,
            address: {
              line1: shippingInfo.address,
              city: shippingInfo.city,
              state: shippingInfo.state,
              postal_code: shippingInfo.pinCode,
              country: shippingInfo.country,
            },
          },
        },
      });

      if (result.error) {
        setPayLoading(false);
        setPayLoading(false);
        payBtn.current.disabled = false;
        Alert({
          text: error,
          icon: "error",
        });
      }
      if (result.paymentIntent.status === "succeeded") {
        setPayLoading(false);
        order.paymentInfo = {
          id: result.paymentIntent.id,
          status: result.paymentIntent.status
        }
        dispatch(CreateOrderRequest(order))
        navigate("/success");
      } else {
        setPayLoading(false);
        Alert({
          title: "Sorry for inconviance",
          text: "There's some issue while processing Payment!",
          icon: "error",
        });
      }
    } catch (error) {
      console.log("error :>> ", error);
      payBtn.current.disabled = false;
      Alert({
        text: error,
        icon: "error",
      });
    }
  };
  return (
    <Wrapper>
      <Container>
        <LeftSection>
          <img src={Logo} alt="Buy Up" />
          <div className="LeftSection-mids">
            <AnimatePresence mode="wait">
              {activeStep === 0 && (
                <motion.p
                  key="Shipping Info-sideheader"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  Shipping Info
                </motion.p>
              )}
              {activeStep === 1 && (
                <motion.p
                  key="Order Summery-sideheader"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  Order Summery
                </motion.p>
              )}
              {activeStep === 2 && (
                <motion.p
                  key="Payment-sideheader"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  Payment
                </motion.p>
              )}
            </AnimatePresence>
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
                  scale: 0.8,
                }}
                animate={{ opacity: 1, x: "0%", scale: 1 }}
                exit={{ x: "-100%", scale: 0.8 }}
                transition={{
                  duration: 0.25,
                  type: "tween",
                  ease: "easeInOut",
                }}
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

            <WrapperForScroll>
              {activeStep === 1 ? (
                <motion.div
                  key="confirm-order"
                  initial={{ x: `${Delta > 0 ? "100%" : "-100%"}`, scale: 0.8 }}
                  animate={{ x: 0, scale: 1 }}
                  exit={{ x: `${Delta > 0 ? "100%" : "-100%"}` }}
                  transition={{
                    duration: 0.25,
                    type: "tween",
                    ease: "easeInOut",
                  }}
                >
                  <Form2>
                    <RightSectionHeader>Confirm your order</RightSectionHeader>
                    <AddressWrapper>
                      <div className="order-user-info">
                        <p>user info</p>
                        <div> {userInfo && userInfo.name} </div>
                        <div> {SHIPPING_INFO.phoneNo} </div>
                        <div>
                          {SHIPPING_INFO.address}, {SHIPPING_INFO.city}
                        </div>
                        <div>
                          {SHIPPING_INFO.state}, {SHIPPING_INFO.country} -{" "}
                          {SHIPPING_INFO.pinCode}
                        </div>
                      </div>
                    </AddressWrapper>
                    <RightSectionHeader>Order Info</RightSectionHeader>
                    <CartViewLayout page="confirm-order" />
                    {/* cost count */}
                    <FinalAmountWrapper>
                      <p className="payment-advertise-line">
                        <span>FREE Shipping</span> for purchase above ₹ 2000
                      </p>
                      <div className="payment-Order-Summery">
                        {" "}
                        <p>Order Summery</p>{" "}
                      </div>
                      <div>
                        <p>Product Cost</p> <p> ₹ {totalCost && totalCost} </p>{" "}
                      </div>
                      <div>
                        <p>Shipping charge</p>
                        <p
                          className={
                            totalCost > 2000 ? "shipping-charge-P-tag" : null
                          }
                        >
                          ₹ 400
                        </p>
                      </div>
                      <div>
                        <p>GST</p>{" "}
                        <p>₹ {totalCost && Math.floor(totalCost * 0.18)} </p>{" "}
                      </div>
                      <hr style={{ width: "50%" }} />
                      <div>
                        <p>Total</p>
                        <p>₹ {finalAmount}</p>
                      </div>
                    </FinalAmountWrapper>
                  </Form2>
                </motion.div>
              ) : null}
            </WrapperForScroll>
            {activeStep === 2 ? (
              <motion.div
                key="pay-for-order-body"
                initial={{ x: "100%" }}
                animate={{ x: "0%" }}
                transition={{
                  duration: 0.25,
                  type: "tween",
                  ease: "easeInOut",
                }}
                exit={{ x: "100%" }}
              >
                <Form>
                  <RightSectionHeader>Card Info</RightSectionHeader>
                  <PaymentWrapper>
                    {payLoading ? (
                      <LoadingScreen size="small" />
                    ) : (
                      <>
                        <p className="PaymentWrapper-header-line">
                          Add your card Details
                        </p>
                        <PaymentCont>
                          <div className="PaymentCont-ele">
                            <CreditCardIcon />{" "}
                            <CardNumberElement className="CardNumberElement" />{" "}
                          </div>
                          <div className="PaymentCont-ele">
                            <EventIcon />{" "}
                            <CardExpiryElement className="CardExpiryElement" />{" "}
                          </div>
                          <div className="PaymentCont-ele">
                            <VpnKeyIcon />{" "}
                            <CardCvcElement className="CardCvcElement" />{" "}
                          </div>
                          <div>
                            <SaveBtn
                              variant="contained"
                              onClick={HelperPayment}
                              ref={payBtn}
                            >
                              {`pay ₹${finalAmount}`}
                            </SaveBtn>
                          </div>
                        </PaymentCont>
                      </>
                    )}
                  </PaymentWrapper>
                </Form>
              </motion.div>
            ) : null}
          </AnimatePresence>

          {/* footer zone */}
          <AnimatePresence mode="wait">
            {activeStep === 0 ? (
              <Footer
                key="Shipping-details-footer"
                initial={{
                  x: `${Delta >= 0 ? "0%" : "-100%"}`,
                }}
                animate={{ x: "0%" }}
                transition={{
                  duration: 0.25,
                  type: "tween",
                  ease: "easeInOut",
                }}
                exit={{ x: "-100%" }}
              >
                <SaveBtn variant="contained" onClick={HelperShippingSubmit}>
                  <SaveIcon fontSize="small" />
                  &nbsp; save & continue
                </SaveBtn>
              </Footer>
            ) : null}

            {activeStep === 1 ? (
              <Footer2
                key="confirm-order"
                initial={{ x: `${Delta > 0 ? "100%" : "-100%"}` }}
                animate={{ x: "0%" }}
                transition={{
                  duration: 0.25,
                  type: "tween",
                  ease: "easeInOut",
                }}
                exit={{ x: `${Delta < 0 ? "-100%" : "100%"}` }}
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
                    CHANGEActiveStep(2);
                  }}
                >
                  <p>next</p>
                  <NavigateNextIcon fontSize="small" />
                </SaveBtn>
              </Footer2>
            ) : null}
            {activeStep === 2 ? (
              <Footer3
                key="pay-for-order"
                initial={{ x: "100%" }}
                animate={{ x: "0%" }}
                transition={{
                  duration: 0.25,
                  type: "tween",
                  ease: "easeInOut",
                }}
                exit={{ x: "100%" }}
              >
                <SaveBtn
                  variant="contained"
                  onClick={() => {
                    dispatch(setfinalAmountForPayment(finalAmount));
                    CHANGEActiveStep(1);
                  }}
                >
                  back
                </SaveBtn>
              </Footer3>
            ) : null}
          </AnimatePresence>
        </RightSection>
      </Container>
    </Wrapper>
  );
};

export default Shipping;
