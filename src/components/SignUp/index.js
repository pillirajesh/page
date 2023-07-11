import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./index.css";

const SignUp = () => {
  const navigate = useNavigate();

  const [inputName, setInputName] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
  });

  const getInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputName((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/signup", inputName)
      .then((res) => navigate("/signupsuccess"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="signup-container">
      <>
        <h3>Registration Form</h3>
        <form onSubmit={submitForm}>
          <label htmlFor="first-name" className="label">
            FIRST NAME<span>*</span>
          </label>
          <br />
          <input
            type="text"
            className="input"
            placeholder="First Name"
            id="first-name"
            name="fName"
            onChange={getInput}
            autoComplete="off"
            required
          />
          <br />
          <label htmlFor="last-name" className="label">
            LAST NAME<span>*</span>
          </label>
          <br />
          <input
            type="text"
            className="input"
            placeholder="Last Name"
            id="last-name"
            name="lName"
            onChange={getInput}
            autoComplete="off"
            required
          />
          <br />
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
          <p style={{ marginTop: "0px", fontSize: "12px" }}>
            <span>*</span>All fields are mandatory
          </p>

          <button type="submit" className="submit-button">
            SUBMIT
          </button>
          <p style={{ marginTop: "10px", fontSize: "15px", color: "red" }}>
            Already Registered{" "}
            <Link to="/login" className="link">
              Log In
            </Link>
          </p>
        </form>
      </>
    </div>
  );
};

export default SignUp;
