import React, { useState } from "react";
import Logo from "../../../assets/images/logo.png";
import { Country, State } from "country-state-city";

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
import { useSelector } from "react-redux";
import SaveIcon from "@mui/icons-material/Save";
import Steps from "../../layouts/Stepper -- checkout page/Stepper";

const Shipping = () => {
  const { SHIPPING_INFO } = useSelector((state) => state.cart);
  const [shippingInfo, setShippingInfo] = useState(SHIPPING_INFO);
  const [activeStep, setActiveStep] = useState(1);

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
          <Steps activeStep={1} />
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
                value={shippingInfo.address ? shippingInfo.address : ""}
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
                  value={shippingInfo.city ? shippingInfo.city : ""}
                  onChange={(event) => {
                    setShippingInfo({
                      ...shippingInfo,
                      address: event.target.value,
                    });
                  }}
                />
                <TextInput
                  variant="standard"
                  label="pin code"
                  value={shippingInfo.pinCode ? shippingInfo.pinCode : ""}
                  onChange={(event) => {
                    if (event.target.value.trim().split("").length <= 6) {
                      setShippingInfo({
                        ...shippingInfo,
                        address: event.target.value,
                      });
                    }
                  }}
                />
              </div>
            </AddressWrapper>

            <LocationWrapper>
              <Locationselector
                required
                value={shippingInfo.country ? shippingInfo.country : ""}
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
                disabled={shippingInfo.country === "" ? true : false}
                value={shippingInfo.state ? shippingInfo.state : ""}
                onChange={(event) =>
                  setShippingInfo({
                    ...shippingInfo,
                    state: event.target.value,
                  })
                }
              >
                <option value="">state</option>
                {State &&
                  State.getStatesOfCountry(shippingInfo.country).map((i) => (
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
                value={shippingInfo.phoneNo ? shippingInfo.phoneNo : ""}
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
            <SaveBtn variant="contained">
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
