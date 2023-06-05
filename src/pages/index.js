import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
// import SignIn from "./SignIn";

const SignIn = React.lazy(() => import("./SignIn"));
const SignUp = React.lazy(() => import("./SignUp"));
const ForgotPassword = React.lazy(() => import("./ForgotPassword"));

const PublicPortal = () => {
    return (
        <>
            <React.Suspense fallback={<></>}>
                <Routes>
                    <Route path="/" element={<DefaultLayout />}>
                        <Route
                            path="/signin"
                            element={
                                <React.Suspense fallback={<></>}>
                                    <SignIn />
                                </React.Suspense>
                            }
                        />
                        <Route
                            path="/signup"
                            element={
                                <React.Suspense fallback={<></>}>
                                    <SignUp />
                                </React.Suspense>
                            }
                        />
                        <Route
                            path="/forgotpassword"
                            element={
                                <React.Suspense fallback={<></>}>
                                    <ForgotPassword />
                                </React.Suspense>
                            }
                        />
                    </Route>
                </Routes>
            </React.Suspense>
        </>
    );
}

export default PublicPortal;