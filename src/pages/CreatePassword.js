import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Helmet } from "react-helmet";

export default function CreatePassword() {
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
                                    className="form-control input-group m-b-0 inputcontrasts mt-5"
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
                            </Box>
                            <Box>
                                <Typography className="f-14 font-weight-400 gray-text mt-15">
                                    Confirm New Password
                                </Typography>
                                <Input
                                    // type="text"
                                    name="password"
                                    id="password"
                                    className="form-control input-group m-b-0 inputcontrasts mt-5"
                                    margin="normal"
                                    placeholder="Confirm password"
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
                            <Box>
                                <Typography className="f-14 font-weight-400 gray-text mt-15">
                                    Verification Code
                                </Typography>
                                <Input
                                    type="text"
                                    name="code"
                                    id="code"
                                    className="form-control input-group m-b-0 inputcontrasts mt-5"
                                    margin="normal"
                                    placeholder="Enter verification code"
                                />
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
