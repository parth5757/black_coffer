// register.jsx
import React from "react";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <form className="form">
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
        <label>Confirm Password</label>
        <input type="password" placeholder="Confirm your password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
