import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Success = () => {
  return (
    <div className="signup-success">
      <h1>
        Thank you for the registering with us{" "}
        <Link to="/login" className="link">
          Login
        </Link>{" "}
        to continue...
      </h1>
    </div>
  );
};

export default Success;
