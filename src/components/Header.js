import React, { Component } from "react";
import logo from "../resources/menu/cb_logo.png";

// Custom Components
import Slider from "./SliderHeader";

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
    console.log(window.location);
    if (window.scrollY > 400) {
      this.setState({color: 'black'})
    } else {
      this.setState({color: 'white'})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {
    return (
      <header className="header">
        <h4 className="cash_only">CASH ONLY</h4>
        <img className="corner_logo" src={logo} alt="bar-logo" />
        <nav className="header_nav">
          <a className="desktop_nav" href="#locations">
            LOCATIONS
          </a>
          <a className="mobile_nav" href="#locations">
            <i>{location}</i>
          </a>
          <a className="desktop_nav" href="#menu">
            MENU
          </a>
          <a className="mobile_nav" href="#menu">
            <i>{menu}</i>
          </a>
          <a className="desktop_nav" href="#gallery">
            GALLERY
          </a>
          <a className="mobile_nav" href="#gallery">
            <i>{gallery}</i>
          </a>
          <a className="desktop_nav" href="#store">
            STORE
          </a>
          <a className="mobile_nav" href="#store">
            <i>{shop}</i>
          </a>
        </nav>
        <Slider />
      </header>
    );
  }
}

export default Header;
