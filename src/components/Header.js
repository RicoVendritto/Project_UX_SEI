import React from "react";
import logo from "../resources/menu/cb_logo.png";

// Custom Components
import Slider from "./SliderHeader";

const Header = () => {
  return (
    <header className="header">
      <h4 className="cash_only">CASH ONLY</h4>
      <img className="corner_logo" src={logo} alt="bar-logo" />
      <nav className="header_nav">
        <a href="#locations">LOCATIONS</a>
        <a href="#menu">MENU</a>
        <a href="#gallery">GALLERY</a>
        <a href="#store">STORE</a>
      </nav>
      <Slider />
    </header>
  );
};

export default Header;
