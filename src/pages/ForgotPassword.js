import React, { useState } from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Input from "@mui/material/Input";
import { Helmet } from "react-helmet";

export default function ForgotPassword() {
    const navigate = useNavigate();
    const goToCreatePassword = () => {
        navigate("/createpassword");
      };
    return (
        <>
            <Helmet>
                <title>Forgot Password</title>
                <meta name="description" content="Sign In" />
            </Helmet>
            <Grid container spacing={1} lg={12} md={12} xs={12}>
                <Grid item lg={10} md={10} xs={12} className="m-auto">
                    <Grid>
                        <Typography className="f-24 font-weight-600">
                            Forgot Password
                        </Typography>
                        <Typography className="mt-5 f-16 font-weight-400 gray-text">
                            Enter your email and we'll send a link to reset your password
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
                            <Typography className="mt-30" onClick={goToCreatePassword}>
                                <Button className="btn primary-button w-100">Submit</Button>
                            </Typography>
                            <Typography className="mt-20 text-center">
                                <span className="f-14 font-weight-500">
                                    Back to&nbsp;
                                </span>
                                <Link
                                    className="link-color f-14 font-weight-500 text-decor-none"
                                    to="../signin"
                                >
                                    Login
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}
