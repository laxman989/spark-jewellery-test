import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = ({ isAdmin = false }) => {
    const { user, isAuthenticated } = useSelector(state => state.userReducer);

    if (isAuthenticated === false) return <Navigate to="/login" replace />
    if (isAdmin === true && user.role !== "admin") return <Navigate to="/login" replace />
    return <Outlet />
}

export default PrivateRoute;