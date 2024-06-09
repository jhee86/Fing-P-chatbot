import React from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "./css/Auth.css";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/");
  };

  return (
    <div className="auth-container">
      <h2>Fing-P CHATBOT</h2>
      <form>
        <div className="input-group">
          <label htmlFor="id">ID</label>
          <input type="text" id="id" name="id" required />
        </div>
        <div className="input-group">
          <label htmlFor="pw">PW</label>
          <input type="password" id="pw" name="pw" required />
        </div>
        <button type="submit" onClick={handleLogin}>
          LOGIN
        </button>
      </form>
      <div className="signup-link">
        <a href="/signup">회원가입하기</a>
      </div>
      <div className="logo-container">
        <img src="/assets/pngegg (1).png" alt="skku logo" />
      </div>
    </div>
  );
};

export default Login;
