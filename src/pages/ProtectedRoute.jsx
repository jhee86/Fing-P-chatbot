import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import MainPage from "./MainPage";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  console.log("ProtectedRoute: isAuthenticated", isAuthenticated);
  return isAuthenticated ? <MainPage /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
