import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <div className="header-container">
      <img
        src="https://i.insider.com/5fbd515550e71a001155724f?width=700"
        className="image"
        alt="pic"
      />
      <Link to="/login" className="link " style={{ marginRight: "50px" }}>
        <button className="submit-button">Log Out</button>
      </Link>
    </div>
  );
};

export default Header;
