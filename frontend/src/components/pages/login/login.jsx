import { useState } from "react";
import Logo from "../../../assets/images/logo.png";
import Profile from "../../../assets/images/Profile.png";
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
  ImgInputWrapper,
  ImgText,
  ImgTextWrapper,
  ImgUploadBtn,
  LogBtn,
  Wrapper,
} from "./login.style";

import UploadIcon from "@mui/icons-material/Upload";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { Input, InputLabel, FormControl, Button } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { Alert } from "../../components/Alert";

const Login = () => {
  const [mode, setMode] = useState("login");
  const [pageSwitch, setPageSwitch] = useState(true); // true for login page & false for forgot password
  const [logInValues, setlogInValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const [signUpValues, setSignupValues] = useState({
    name: "",
    email: "",
    password: "",
    confimPassword: "",
    avatar: Profile,
    showPassword: false,
  });
  const [fileName, setFileName] = useState("Upload Avatar");

  const HelperLogInBTN = () => {
    if (!logInValues.email.trim() || !logInValues.password.trim()) {
      Alert({
        icon: "error",
        title: "Oops!",
        text: "Please, fill all the details",
      });
    }
    const myForm = new FormData();
    myForm.set("email", logInValues.email);
    myForm.set("password", logInValues.password);
  };
  const HelperSignUpBtn = () => {
    if (
      !signUpValues.email.trim() ||
      !signUpValues.password.trim() ||
      !signUpValues.name.trim() ||
      !signUpValues.confimPassword.trim()
    ) {
      Alert({
        icon: "error",
        title: "Oops!",
        text: "Please, fill all the details",
      });
    }
    if (signUpValues.password !== signUpValues.confimPassword) {
      Alert({
        icon: "error",
        title: "Oops!",
        text: "Passwords do not Match!",
      });
    }

    const myForm = new FormData();
    myForm.set("name", signUpValues.name);
    myForm.set("email", signUpValues.email);
    myForm.set("password", signUpValues.password);
    myForm.set("confirmPassword", signUpValues.confimPassword);
  };

  const HelperImageUpload = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setSignupValues({ ...signUpValues, avatar: reader.result });
        setFileName(e.target.files[0].name);
      }
    };
  };
  return (
    <>
      <Wrapper>
        <AnimatePresence mode="wait">
          {pageSwitch ? (
            <Container
              key={"logPage"}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                type: "tween",
              }}
            >
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
                <AnimatePresence mode="wait">
                  {mode === "login" ? (
                    <FormBody
                      key={"login"}
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 10, opacity: 0 }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                      }}
                    >
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
                          value={logInValues.email}
                          onChange={(event) => {
                            setlogInValues({
                              ...logInValues,
                              email: event.target.value,
                            });
                          }}
                          helperText=" "
                        />
                        <FormControl variant="standard">
                          <InputLabel htmlFor="standard-adornment-password">
                            Password
                          </InputLabel>
                          <Input
                            type={
                              logInValues.showPassword ? "text" : "password"
                            }
                            value={logInValues.password}
                            onChange={(event) => {
                              setlogInValues({
                                ...values,
                                password: event.target.value,
                              });
                            }}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={() => {
                                    setlogInValues({
                                      ...values,
                                      showPassword: !logInValues.showPassword,
                                    });
                                  }}
                                  onMouseDown={(event) => {
                                    event.preventDefault();
                                  }}
                                >
                                  {logInValues.showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                          <p
                            className="FormTextFieldWrapper-forgotPassword"
                            onClick={() => {
                              setPageSwitch(false);
                            }}
                          >
                            Forgot Password?
                          </p>
                        </FormControl>

                        <LogBtn onClick={HelperLogInBTN}>log in</LogBtn>
                      </FormTextFieldWrapper>
                    </FormBody>
                  ) : (
                    <FormBody
                      key={"signup"}
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 10, opacity: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        type: "tween",
                      }}
                    >
                      {/* <div>
                        <p className="FormBody-Header">HI there👋!</p>
                       <p className="FormBody-Header-beta">
                          Your Data is Safe with us
                        </p>
                      </div> */}
                      <FormTextFieldWrapper>
                        <FormTextField
                          variant="standard"
                          label="Name"
                          type="text"
                          value={signUpValues.name}
                          onChange={(event) => {
                            setSignupValues({
                              ...signUpValues,
                              name: event.target.value,
                            });
                          }}
                          helperText=" "
                        />
                        <FormTextField
                          variant="standard"
                          label="Email"
                          type="email"
                          value={signUpValues.email}
                          onChange={(event) => {
                            setSignupValues({
                              ...signUpValues,
                              email: event.target.value,
                            });
                          }}
                          helperText=" "
                        />
                        <FormControl variant="standard">
                          <InputLabel htmlFor="standard-adornment-password">
                            Password
                          </InputLabel>
                          <Input
                            type={
                              signUpValues.showPassword ? "text" : "password"
                            }
                            value={signUpValues.password}
                            onChange={(event) => {
                              setSignupValues({
                                ...signUpValues,
                                password: event.target.value,
                              });
                            }}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={() => {
                                    setSignupValues({
                                      ...signUpValues,
                                      showPassword: !signUpValues.showPassword,
                                    });
                                  }}
                                  onMouseDown={(event) => {
                                    event.preventDefault();
                                  }}
                                >
                                  {signUpValues.showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                          <p>&nbsp;</p>
                        </FormControl>

                        <FormTextField
                          variant="standard"
                          label="confirm password"
                          type="password"
                          error={
                            signUpValues.confimPassword !== "" &&
                            signUpValues.confimPassword !==
                              signUpValues.password
                          }
                          value={signUpValues.confimPassword}
                          onChange={(event) => {
                            setSignupValues({
                              ...signUpValues,
                              confimPassword: event.target.value,
                            });
                          }}
                          helperText={
                            signUpValues.confimPassword === "" ||
                            signUpValues.confimPassword ===
                              signUpValues.password
                              ? " "
                              : "Passwords do not match!"
                          }
                        />
                        <ImgInputWrapper>
                          <img src={Profile} alt="profile image" />
                          <button>
                            <ImgUploadBtn variant="contained" component="label">
                              <UploadIcon />
                              {fileName}
                              <input
                                className="job6inputUploadProposal"
                                type="file"
                                name="avatar"
                                accept="image/*"
                                onChange={(e) => HelperImageUpload(e)}
                                required
                                hidden
                              />
                            </ImgUploadBtn>
                          </button>
                        </ImgInputWrapper>
                        <LogBtn onClick={HelperSignUpBtn}>SIGN UP</LogBtn>
                      </FormTextFieldWrapper>
                    </FormBody>
                  )}
                </AnimatePresence>
              </Form>
            </Container>
          ) : (
            <Container
              key={"forgotPasswordPage"}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                type: "tween",
              }}
            >
              <Form>
                <FormHeader>
                  <FormHeaderElement>
                    <p className="FormHeaderElement-password-recovery">
                      Password Recovery
                    </p>
                  </FormHeaderElement>
                </FormHeader>
                <FormBody>
                  <button
                    onClick={() => {
                      setPageSwitch(true);
                    }}
                  >
                    wqwqwqw
                  </button>
                  <button
                    onClick={() => {
                      setPageSwitch(true);
                    }}
                  >
                    wqwqwqw
                  </button>
                  <button
                    onClick={() => {
                      setPageSwitch(true);
                    }}
                  >
                    wqwqwqw
                  </button>
                </FormBody>
              </Form>
              <Img>
                <Grid />
                <Blur />
                <ImgTextWrapper>
                  <ImgText>
                    <p>
                      <span>Forgot</span>
                    </p>
                    <p>your</p>
                    <p>
                      <span>Password ?</span>
                    </p>
                  </ImgText>
                </ImgTextWrapper>
              </Img>
            </Container>
          )}
        </AnimatePresence>
      </Wrapper>
    </>
  );
};

export default Login;
