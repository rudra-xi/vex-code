import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PublicRoute({ user }) {
	return !user ? <Outlet /> : <Navigate to="/dashboard" replace />;
}

export default PublicRoute;
