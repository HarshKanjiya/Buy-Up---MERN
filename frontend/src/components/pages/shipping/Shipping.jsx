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

const Shipping = () => {
  const dispatch = useDispatch()
  const { SHIPPING_INFO } = useSelector((state) => state.cart);
  const [shippingInfo, setShippingInfo] = useState(SHIPPING_INFO);
  const [activeStep, setActiveStep] = useState(0);


  const HelperShippingSubmit = () => {

    let checker = true;


    shippingInfo.address.trim() ? (checker = false) : true;
    shippingInfo.city.trim() ? (checker = false) : true;
    shippingInfo.country.trim() ? (checker = false) : true;
    shippingInfo.state.trim() ? (checker = false) : true;
    shippingInfo.phoneNo.trim() ? (checker = false) : true;
    shippingInfo.pinCode.trim() ? (checker = false) : true;

    if (checker) {
      Alert({
        icon: "error",
        text: "Please Fill all the details",
        title: "Oops!",
      });
      return;
    }
    // save info
    dispatch( SAVE_SHIPPING_INFO(shippingInfo) )
    

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
                  shippingInfo && shippingInfo.country === "" ? true : false
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
          <Footer>
            <SaveBtn variant="contained" onClick={HelperShippingSubmit}>
              <SaveIcon fontSize="small" />
              &nbsp; save & continue
            </SaveBtn>
          </Footer>
        </RightSection>
      </Container>
    </Wrapper>
  );
};

export default Shipping;
