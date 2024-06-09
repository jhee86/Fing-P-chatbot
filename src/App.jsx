import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
// import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute />} />
      </Routes>
    </div>
  );
};

export default App;
