import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export default function CreatePassword() {
    const [err, setErr] = React.useState("");
    let location = useLocation();
    const search = location.search;
    let searchParams = new URLSearchParams(search);
    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
        showConfirmPassword: false,
    });
    const inputRef1 = React.useRef();
    const inputRef2 = React.useRef();
    const handleClickShowConfirmPassword = () => {
        setValues({ ...values, showConfirmPassword: !values.showConfirmPassword });
    };
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleMouseDownConfirmPassword = (event) => {
        event.preventDefault();
      };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required("Please enter your password")
            .min(8, "The password must be at least 8 characters"),
        confirmPassword: Yup.string().oneOf(
            [Yup.ref("password")],
            "New Password and Confirm Password must match"
        ),
        otp: Yup.string()
            .required("Please enter verification code")
            .matches(/^\d+$/, "The verification code must have only digits")
            .min(6, "The verification code must have 6 digits")
            .max(6, "The verification code must have 6 digits"),
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
                            Create New Password
                        </Typography>
                        <Typography className="mt-5 f-16 font-weight-400 gray-text">
                            Please fill the below details to reset your password
                        </Typography>
                        <Grid className="mt-20">
                            <Box>
                                <Typography className="f-14 font-weight-400 gray-text mt-15">
                                    New Password
                                </Typography>
                                <Input
                                    // type="text"
                                    name="password"
                                    id="password"
                                    inputRef={inputRef1}
                                    {...register("password")}
                                    className={`form-control input-group password-icon inputcontrasts mt-5 ${errors.password ? "is-invalid" : ""
                                        }`}
                                    margin="normal"
                                    placeholder="Enter new password"
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
                            <Box>
                                <Typography className="f-14 font-weight-400 gray-text mt-15">
                                    Confirm New Password
                                </Typography>
                                <Input
                                    // type="text"
                                    name="password"
                                    id="password"
                                    inputRef={inputRef2}
                                    {...register("confirmPassword")}
                                    className={`form-control input-group password-icon inputcontrasts mt-5 ${errors.confirmPassword ? "is-invalid" : ""
                                        }`}
                                    margin="normal"
                                    placeholder="Confirm password"
                                    type={values.showConfirmPassword ? "text" : "password"}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="show-hide-password"
                                                onClick={handleClickShowConfirmPassword}
                                                onMouseDown={handleMouseDownConfirmPassword}
                                                sx={{
                                                    "& .MuiTouchRipple-root": { position: "static" },
                                                }}
                                                onKeyPress={handleClickShowConfirmPassword}
                                                tabIndex={0}
                                            >
                                                {values.showConfirmPassword ? (
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
                                    {errors.confirmPassword && errors.confirmPassword.message}
                                </span>
                            </Box>
                            <Box>
                                <Typography className="f-14 font-weight-400 gray-text mt-15">
                                    Verification Code
                                </Typography>
                                <Input
                                    type="text"
                                    name="code"
                                    id="code"
                                    onInput={() => setErr("")}
                                    {...register("otp")}
                                    className={`form-control input-group m-b-0 mt-5 inputcontrasts ${errors.otp ? "is-invalid" : ""
                                        }`}
                                    margin="normal"
                                    placeholder="Enter verification code"
                                />
                                <span className="danger-color error-msg">
                                    {" "}
                                    {errors.otp && errors.otp.message}
                                </span>
                                <span className="danger-color small-text-font">{err}</span>
                            </Box>
                            <Typography className="f-14 mt-10">
                                Code not received? <Link>Resent</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid className="mt-30">
                        <Button className="btn primary-button w-100">Create Password</Button>
                    </Grid>
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
        </>
    );
}
