import { useState } from "react";
import Logo from "../../../assets/images/logo.png";
import {
  Blur,
  Container,
  Form,
  FormBody,
  FormHeader,
  FormHeaderElement,
  FormHeaderElementToggleBtn,
  FormTextField,
  FormTextFieldWrapper,
  Grid,
  Img,
  ImgText,
  ImgTextWrapper,
  LogBtn,
  Wrapper,
} from "./login.style";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { Input, InputLabel, FormControl } from "@mui/material";

const Login = () => {
  const [mode, setMode] = useState("login");
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  return (
    <>
      <Wrapper>
        <Container>
          {/* imgggg */}
          <Img>
            <Grid />
            <Blur />
            <ImgTextWrapper>
              <ImgText>
                <p>Smart</p>
                <span>PRODUCTS</span>
                <p>for</p>
                <p>
                  smart <span>PEOPLE</span>.
                </p>
                <h6>products for Better Lifestyle.</h6>
              </ImgText>
            </ImgTextWrapper>
          </Img>

          {/* form */}
          <Form>
            {/* headerrrr */}
            <FormHeader>
              <FormHeaderElement>
                <img src={Logo} alt="logo" />
                <p className="FormHeaderElement-p">BUY UP</p>
              </FormHeaderElement>
              <FormHeaderElement>
                <FormHeaderElementToggleBtn
                  value="login"
                  aria-label="login"
                  onClick={() => {
                    setMode("login");
                  }}
                  disabled={mode === "login"}
                >
                  <p>LogIn</p>
                </FormHeaderElementToggleBtn>
                <FormHeaderElementToggleBtn
                  value="signup"
                  aria-label="signup"
                  onClick={() => {
                    setMode("signup");
                  }}
                  disabled={mode === "signup"}
                >
                  <p>SignUp</p>
                </FormHeaderElementToggleBtn>
              </FormHeaderElement>
            </FormHeader>

            {/* body */}
            <FormBody>
              <div>
                <p className="FormBody-Header">Welcome Back!</p>
                <p className="FormBody-Header-beta">
                  Enter the details You entered while registering
                </p>
              </div>
              <FormTextFieldWrapper>
                <FormTextField
                  variant="standard"
                  label="Email"
                  value={values.email}
                  onChange={(event) => {
                    setValues({ ...values, email: event.target.value });
                  }}
                  helperText=" "
                />
                <FormControl variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">
                    Password
                  </InputLabel>
                  <Input
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={(event) => {
                      setValues({ ...values, password: event.target.value });
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => {
                            setValues({
                              ...values,
                              showPassword: !values.showPassword,
                            });
                          }}
                          onMouseDown={(event) => {
                            event.preventDefault();
                          }}
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <p className="FormTextFieldWrapper-forgotPassword">
                    Forgot Password?
                  </p>
                </FormControl>

                <LogBtn>login</LogBtn>
              </FormTextFieldWrapper>
            </FormBody>
          </Form>
        </Container>
      </Wrapper>
    </>
  );
};

export default Login;
