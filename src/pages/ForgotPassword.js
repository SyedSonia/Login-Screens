import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Input from "@mui/material/Input";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export default function ForgotPassword() {
    const navigate = useNavigate();
    let location = useLocation();
    const search = location.search;
    let searchParams = new URLSearchParams(search);
    const goToCreatePassword = () => {
        navigate("/createpassword");
    };
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required("Please enter valid email address")
            .matches(/^\w+\.?\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Please enter valid email address'),
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
                            <Typography className="mt-30" onClick={goToCreatePassword}>
                                <Button
                                    type="submit"
                                    disabled={!isDirty || !isValid}
                                    className="btn primary-button w-100"
                                    variant="contained"
                                    aria-label="Sign in"
                                    disableRipple="true">
                                    Submit
                                </Button>
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
