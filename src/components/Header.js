import React, { Component } from "react";
// import logo from "../resources/menu/cb_logo.png";

// Custom Components
import Slider from "./SliderHeader";
import LogoInteractive from "./LogoInteractive";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faBookOpen,
  faThLarge,
  faShoppingBag
} from "@fortawesome/free-solid-svg-icons";
const location = <FontAwesomeIcon icon={faMapMarker} />;
const menu = <FontAwesomeIcon icon={faBookOpen} />;
const gallery = <FontAwesomeIcon icon={faThLarge} />;
const shop = <FontAwesomeIcon icon={faShoppingBag} />;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      menu: null,
      gallery: null,
      shop: null
    };
  }

  listenScrollEvent = e => {
    let mainNavLinks = document.querySelectorAll("nav a");
    // let mainSections = document.querySelectorAll("main section");
    // let lastId;
    // let cur = [];
    window.addEventListener("scroll", event => {
      let fromTop = window.scrollY;
      console.log(fromTop);
      mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        console.log(section.offsetTop);
        if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          link.classList.add("current");
        } else {
          link.classList.remove("current");
        }
      });
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <header className="header">
        <h4 className="cash_only">CASH ONLY</h4>
        {/* <img className="corner_logo" src={logo} alt="bar-logo" /> */}
        <LogoInteractive />
        <nav className="header_nav">
          <a className="desktop_nav" href="#section-1">
            LOCATIONS
          </a>
          <a className="mobile_nav" href="#section-1">
            <i>{location}</i>
          </a>
          <a className="desktop_nav" href="#section-2">
            MENU
          </a>
          <a className="mobile_nav" href="#section-2">
            <i>{menu}</i>
          </a>
          <a className="desktop_nav" href="#section-3">
            GALLERY
          </a>
          <a className="mobile_nav" href="#section-3">
            <i>{gallery}</i>
          </a>
          <a className="desktop_nav" href="#section-4">
            STORE
          </a>
          <a className="mobile_nav" href="#section-4">
            <i>{shop}</i>
          </a>
        </nav>
        <Slider />
      </header>
    );
  }
}

export default Header;
