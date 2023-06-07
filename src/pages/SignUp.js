import React, { useRef } from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Modal from "@mui/material/Modal";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import googleIcon from "../assets/images/googleIcon.png";
import facebookIcon from "../assets/images/facebookIcon.png";
import appleIcon from "../assets/images/appleIcon.png";
import { Helmet } from "react-helmet";
import Checkbox from '@mui/material/Checkbox';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function SignUp() {
  const [err, setErr] = React.useState("");
  const inputRef = useRef();
  let location = useLocation();
  const search = location.search;
  let searchParams = new URLSearchParams(search);
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Please enter valid email address")
      .matches(/^\w+\.?\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Please enter valid email address'),

    password: Yup.string()
      .required("Please enter your password")
      .min(8, "The password must be at least 8 characters"),
  });
  const {
    register,
    formState: { errors, isValid, isDirty },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
    defaultValues: {
      email: decodeURIComponent(
        searchParams.get("email") ? searchParams.get("email") : ""
      ),
    },
  });
  return (
    <>
      <Helmet>
        <title>Sign Up</title>
        <meta name="description" content="Sign In" />
      </Helmet>
      <Grid container spacing={1} lg={12} md={12} xs={12}>
        <Grid item lg={10} md={10} xs={12} className="m-auto">
          <Grid>
            <Typography className="f-24 font-weight-600">
              Create a New Account
            </Typography>
            <Typography className="mt-5 f-16 font-weight-400 gray-text">
              Please fill in the below details
            </Typography>
            <Grid className="mt-20">
              <Box>
                <Typography className="f-14 font-weight-400 gray-text mt-10">
                  Full Name
                </Typography>
                <Input
                  type="text"
                  name="email"
                  id="email"
                  className="form-control input-group m-b-0 inputcontrasts mt-5"
                  margin="normal"
                  placeholder="Enter full name"
                />
              </Box>
              <Box>
                <Typography className="f-14 font-weight-400 gray-text mt-15">
                  Email Address
                </Typography>
                <Input
                  type="text"
                  name="email"
                  id="email"
                  {...register("email")}
                  className={`form-control input-group mb-0 inputcontrasts mt-5 ${errors.email ? "is-invalid" : ""}`}
                  margin="normal"
                  placeholder="Enter email address"
                />
                <span className="danger-color error-msg">
                  {" "}
                  {errors.email && errors.email.message}
                </span>
              </Box>
              <Box>
                <Typography className="f-14 font-weight-400 gray-text mt-15">
                  Password
                </Typography>
                <Input
                  // type="text"
                  name="password"
                  id="password"
                  inputRef={inputRef}
                  onInput={() => setErr("")}
                  {...register("password")}
                  className={`form-control input-group mb-0 inputcontrasts mt-5 ${errors.password ? "is-invalid" : ""
                    }`}
                  margin="normal"
                  placeholder="Enter password"
                  type={values.showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="show-hide-password"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        sx={{
                          "& .MuiTouchRipple-root": { position: "static" },
                        }}
                        onKeyPress={handleClickShowPassword}
                        tabIndex={0}
                      >
                        {values.showPassword ? (
                          <Visibility
                            className="gray7"
                            aria-label="Visibility icon"
                          />
                        ) : (
                          <VisibilityOffIcon
                            className="gray7"
                            aria-label="Visibilityoff icon"
                          />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <span className="danger-color error-msg">
                  {" "}
                  {errors.password && errors.password.message}
                </span>
              </Box>
              <Typography className="mt-10">
                <Checkbox {...label} />
                I accept the <Link className="link-color f-14 text-decor-none">Terms of Use</Link> &
                <Link className="link-color f-14 text-decor-none">&nbsp;Privacy Policy</Link>
              </Typography>
              <Typography className="mt-30">
                <Button
                  type="submit"
                  disabled={!isDirty || !isValid}
                  className="btn primary-button w-100"
                  variant="contained"
                  aria-label="Sign in"
                  disableRipple="true">
                  Sign Up
                </Button>
              </Typography>
              <Typography className="mt-20 text-center">
                <span className="f-14 font-weight-500">
                  Already a member?&nbsp;
                </span>
                <Link
                  className="link-color f-14 font-weight-500 text-decor-none"
                  to="../signin"
                >
                  Log In
                </Link>
              </Typography>
              <Typography className="mt-15 d-flex align-center job-detail-align">
                <span className="horizontal-line"></span>
                <Box className="gray-text f-14 font-weight-400 ml-5 mr-5">OR</Box>
                <span className="horizontal-line"></span>
              </Typography>
              <Grid container spacing={1} lg={12} md={12} xs={12} className="mt-20 social-login-mobile">
                <Grid item lg={10} md={10} xs={12} className="m-auto d-flex align-center justify-center responsive-block">
                  <Typography className="d-flex align-center social-login login-margin">
                    <img
                      className="contrasts socialcontrasts"
                      src={googleIcon}
                      alt="Google Icon"
                      aria-describedby="Google sign in"
                      width="20px"
                    />
                    <Box className="gray-text f-14 font-weight-500 ml-5">
                      Google
                    </Box>
                  </Typography>
                  <Typography className="d-flex align-center social-login facebook-align login-margin" sx={{ mx: 3 }}>
                    <img
                      src={facebookIcon}
                      alt="Facebook Icon"
                      aria-describedby="Facebook sign in"
                      width="16px"
                    />
                    <Box className="gray-text f-14 font-weight-500 ml-5">
                      Facebook
                    </Box>
                  </Typography>
                  <Typography className="d-flex align-center social-login login-margin">
                    <img
                      className="contrasts"
                      src={appleIcon}
                      alt="Apple Icon"
                      aria-describedby="Apple Id sign in"
                      width="20px"
                    />
                    <Box className="f-14 font-weight-500 ml-5 gray-text">
                      Apple
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
