import React, { useState } from "react";
import { Grid, Typography, Box } from "@mui/material"
import DefaultLayout from "./layout/DefaultLayout";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Modal from "@mui/material/Modal";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

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
            <Grid container spacing={1} lg={12} md={12} xs={12}>
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
                                <Typography className="mt-5 f-16 font-weight-400 text-gray">
                                    Stay updated on your professional world
                                </Typography>
                                <Grid className="mt-20">
                                    <Box>
                                    <Typography className="f-14 font-weight-400 text-gray mt-10">
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
                                    <Typography className="f-14 font-weight-400 text-gray mt-15">
                                        Password
                                    </Typography>
                                    <Input
                                        type="text"
                                        name="email"
                                        id="email"
                                        className="form-control input-group m-b-0 inputcontrasts mt-5"
                                        margin="normal"
                                        placeholder="Enter email address"
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
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}
