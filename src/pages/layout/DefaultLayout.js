import React from "react";
import { Grid, Typography } from "@mui/material";
import loginImage from "../../assets/images/login-section.png"
import logo from "../../assets/images/logo.png";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
    return (
        <>
            <Grid className="align-item-center min-h-100">
                <Grid container spacing={1} lg={12} md={12} xs={12}>
                    <Grid item lg={12} md={12} xs={12}>
                        <Typography className="d-flex justify-center">
                            <img width="80px" src={logo} alt="img" />
                        </Typography>
                        <Typography className="d-flex justify-center">
                            <img className="h-100" width="500px" src={loginImage} alt="img" />
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={1} lg={12} md={12} xs={12}>
                    <Grid item lg={10} md={10} xs={12} className="align-item-center min-h-100 m-auto">
                        <Outlet />
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}
