import React, { useState } from "react";
import Logo from "../../Utils/images/RadicallX-Logo1.jpg";
import "./Login.scss";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="left"></div>
      <div className="right">
        <img src={Logo} alt="logo" />
        <div className="login_container">
          <h1>Login</h1>
          <div className="email_container">
            <EmailIcon className="icon" />
            <input type="Email" placeholder="Email" />
          </div>
          <div className="password_container">
            <LockIcon className="icon" />
            <input type="password" placeholder="Password" />
          </div>
          <div className="buttons">
            <div className="remember_me">
              <input type="checkbox" />
              <p>Remember me </p>
            </div>
            <p className="forgot_password">Forgot password?</p>
          </div>
          <Link to={"/"}>
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
