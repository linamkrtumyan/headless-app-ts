import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header_container">
      <img src={require("../../images/header_logo.svg").default} alt="logo" />
    </div>
  );
}

export default Header;
