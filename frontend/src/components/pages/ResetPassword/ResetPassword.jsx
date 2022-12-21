import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  Body,
  Btn,
  FormTextField,
  Header,
  Master,
  Wrapper,
} from "./ResetPassword.styles";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, resetPassword } from "../../../redux/slices/userSlice";
import { Alert } from "../../components/Alert";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
    const params = useParams()
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { error,isAuthenticated } = useSelector((state) => state.user);
  const [password, setPassword] = useState("");
  const [visi, setVisi] = useState(false);
  const [confirmPassword, setconfirmPassword] = useState("");

  useEffect(() => {
    if (error) {
      Alert({
        icon: "error",
        title: "Oops!",
        text: error,
      });
      dispatch(clearErrors());
    }
    if(isAuthenticated){
        navigate('/')
    }
  }, [error,isAuthenticated]);

  const HelperClick = () => {
    dispatch(resetPassword({ password, confirmPassword,token: params.token }));
  };

  return (
    <Wrapper
      key={"resetPasswordPage"}
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 10, opacity: 0 }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
        type: "tween",
      }}
    >
      <Master>
        <Header>
          <p>Change Password</p>
        </Header>
        <Body>
          <div className="reset-pass-body-inner">
            <FormTextField
              variant="standard"
              label="password"
              type={visi ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <IconButton
              onClick={() => {
                setVisi(!visi);
              }}
            >
              {visi ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </div>
          <FormTextField
            type="password"
            variant="standard"
            label="confirm password"
            value={confirmPassword}
            onChange={(e) => setconfirmPassword(e.target.value)}
          />
          <Btn variant="contained" onClick={HelperClick}>
            <LockOpenIcon />
            change
          </Btn>
        </Body>
      </Master>
    </Wrapper>
  );
};

export default ResetPassword;
