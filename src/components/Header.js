import React from "react";

// Custom Components
import Slider from "./SliderHeader";
// import LogoInteractive from "./LogoInteractive";
import Navigation from "./Navigation";
import LogoMonica from "./LogoMonica";
// import Logo_CB from "../resources/icons/animate-logo-o.png";

const Header = () => {
  return (
    <header className="header">
      <h4 className="cash_only">CASH ONLY</h4>
      {/* <LogoInteractive /> */}
      <LogoMonica />
      <Navigation />
      <Slider />
    </header>
  );
};

export default Header;
