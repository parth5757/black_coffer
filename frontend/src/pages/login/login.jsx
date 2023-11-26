// login.jsx
import React from "react";
import "./login.scss";
import { Link } from "react-router-dom"; // Import Link from React Router
const Login = () => {
  return (
    <div className="login">
      <form className="form">
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
        <button type="submit">Login</button>

        <div className="additional-options">
        <p>Don't have an account? <Link to="/register">Register</Link></p>
          <p><a href="#forgot">Forgot your password?</a></p>
        </div>
      </form>
    </div>
  );
};
export default Login;