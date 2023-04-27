import React, { useState, useEffect } from "react";
import "./login.css";
import GoogleImg from "../../images/google.png";

export const Login = () => {
  return (
    <div className="loginPopup">
      <div className="remove">
        <h4>Login/Sign Up On Snapdeal</h4>
        <button>
          <i className="fa-solid fa-x"></i>
        </button>
      </div>
      <p>
        Please provide your Mobile Number or Email to Login/ Sign Up on Snapdeal
      </p>
      <input type="text" placeholder="Mobile Number/Email" />
      <button>CONTINUE</button>
      <div className="login">
        <p style={{ color: "grey" }}>Sign in with Google</p>
        <button>
          <img src={GoogleImg} alt="" /> <span>Google</span>
        </button>
      </div>
    </div>
  );
};
