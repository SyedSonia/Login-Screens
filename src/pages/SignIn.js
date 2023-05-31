import React, { useState } from "react";
import { Grid, Typography, Box, Link, Button } from "@mui/material"
import DefaultLayout from "./layout/DefaultLayout";
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

export default function SignIn() {
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
  //   const theme = useTheme();
  //   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Helmet>
        <title>Sign In</title>
        <meta name="description" content="Sign In" />
      </Helmet>
      <Grid container spacing={1} lg={12} md={12} xs={12}>
        <Grid item lg={10} md={10} xs={12} className="m-auto d-flex">
          <Grid item lg={6} md={6} xs={12}>
            <DefaultLayout />
          </Grid>
          <Grid item lg={6} md={6} xs={12} className="align-item-center min-h-100">
            <Grid container spacing={1} lg={12} md={12} xs={12}>
              <Grid item lg={10} md={10} xs={12} className="m-auto">
                <Grid>
                  <Typography className="f-24 font-weight-600">
                    Welcome back!
                  </Typography>
                  <Typography className="mt-5 f-16 font-weight-400 gray-text">
                    Stay updated on your professional world
                  </Typography>
                  <Grid className="mt-20">
                    <Box>
                      <Typography className="f-14 font-weight-400 gray-text mt-10">
                        Email Address
                      </Typography>
                      <Input
                        type="text"
                        name="email"
                        id="email"
                        className="form-control input-group m-b-0 inputcontrasts mt-5"
                        margin="normal"
                        placeholder="Enter email address"
                      />
                    </Box>
                    <Box>
                      <Typography className="f-14 font-weight-400 gray-text mt-15">
                        Password
                      </Typography>
                      <Input
                        // type="text"
                        name="password"
                        id="password"
                        className="form-control input-group m-b-0 inputcontrasts mt-5"
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
                    </Box>
                    <Typography className="text-right mt-10 mb-10">
                      <Link
                        className="link-color f-14 font-weight-500 text-decor-none"
                        to="../forgotpassword"
                        tabIndex={0}
                      >
                        Forgot Password?
                      </Link>
                    </Typography>
                    <Typography className="mt-20">
                      <Button className="btn primary-button w-100">Sign In</Button>
                    </Typography>
                    <Typography className="mt-20 text-center">
                      <span className="f-14 font-weight-500">
                        New Member?&nbsp;
                      </span>
                      <Link
                        className="link-color f-14 font-weight-500 text-decor-none"
                        to="../signup"
                      >
                        Sign up Now
                      </Link>
                    </Typography>
                    <Typography className="mt-15 d-flex align-center job-detail-align">
                      <span className="horizontal-line"></span>
                      <Box className="gray-text f-14 font-weight-400 ml-5 mr-5">OR</Box>
                      <span className="horizontal-line"></span>
                    </Typography>
                    <Grid container spacing={1} lg={12} md={12} xs={12} className="mt-20">
                      <Grid item lg={10} md={10} xs={10} className="m-auto d-flex align-center justify-center">
                        <Typography className="d-flex align-center social-login">
                          <img
                            src={facebookIcon}
                            alt="Facebook Icon"
                            aria-describedby="Facebook sign in"
                            width="18px"
                          />
                          <Box className="gray-text f-14 font-weight-500 ml-5">
                            Facebook
                          </Box>
                        </Typography>
                        <Typography className="d-flex align-center social-login" sx={{ mx: 3 }}>
                          <img
                            className="contrasts socialcontrasts"
                            src={googleIcon}
                            alt="Google Icon"
                            aria-describedby="Google sign in"
                            width="22px"
                          />
                          <Box className="gray-text f-14 font-weight-500 ml-5">
                            Google
                          </Box>
                        </Typography>
                        <Typography className="d-flex align-center social-login">
                          <img
                            className="contrasts"
                            src={appleIcon}
                            alt="Apple Icon"
                            aria-describedby="Apple Id sign in"
                            width="22px"
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
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
