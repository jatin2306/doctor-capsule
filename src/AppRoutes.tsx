import React from "react";
import { Routes as RouterRoutes, Route } from "react-router-dom";
import Homepage from "./Pages/HomePage/Homepage";
import Onbarding from "./Pages/Onbarding/Onbarding";
import SignUp from "./auth/SignUp/SignUp";
import SignIn from "./auth/SignIn/SignIn";

const AppRoutes = () => {
  return (
    <>
      <RouterRoutes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />

        <Route path="/sign-in" element={<Onbarding />} />
        <Route path="/sign-in/:section" element={<Onbarding />} />
      </RouterRoutes>
    </>
  );
};

export default AppRoutes;
