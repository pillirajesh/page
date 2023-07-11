import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./index.css";

const Login = () => {
  const navigate = useNavigate();

  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const getInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/login", details)
      .then((res) => {
        if (res.data === "Login Success") {
          alert("Login Success");
          navigate("/");
        } else {
          alert("Email or Password not matched, Enter Correct Details");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="signup-container">
      <>
        <h3>Login</h3>
        <form onSubmit={submitForm}>
          <label htmlFor="email" className="label">
            E-MAIL<span>*</span>
          </label>
          <br />
          <input
            type="email"
            className="input"
            placeholder="E-Mail"
            id="email"
            name="email"
            onChange={getInput}
            autoComplete="off"
            required
          />
          <br />
          <label htmlFor="password" className="label">
            PASSWORD<span>*</span>
          </label>
          <br />
          <input
            type="password"
            className="input"
            placeholder="Password"
            id="password"
            name="password"
            onChange={getInput}
            autoComplete="off"
            required
          />
          <br />
          <button type="submit" className="submit-button">
            SUBMIT
          </button>
        </form>
        <p style={{ color: "red", fontSize: "13px" }}>
          If not registered yet?{" "}
          <Link to="/signup" className="link">
            Register Now
          </Link>
        </p>
      </>
    </div>
  );
};

export default Login;
