import React, { Component } from "react";

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

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: false,
      sticky: false
    };
  }

  listenScrollEvent = e => {
    let mainNavLinks = document.querySelectorAll("nav a");
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
    window.addEventListener("scroll", this.stickyNavigation);
    const header = document.querySelector(".desktop_nav");
    const sticky = header.offsetTop;
    this.setState({
      header,
      sticky
    });
  }

  stickyNavigation = () => {
    if (window.pageYOffset > this.state.sticky) {
      this.state.header.classList.add("sticky");
    } else {
      this.state.header.classList.remove("sticky");
    }
  };

  render() {
    return (
      <div className="navigation">
        <nav className="desktop_nav header_nav">
          <a href="#section-1">LOCATIONS</a>
          <a href="#section-2">MENU</a>
          <a href="#section-3">GALLERY</a>
          <a href="#section-4">SHOP</a>
        </nav>
        <nav className="mobile_nav">
          <a href="#section-1">
            <i className="nav_icons">{location}</i>
          </a>
          <a href="#section-2">
            <i className="nav_icons">{menu}</i>
          </a>
          <a href="#section-3">
            <i className="nav_icons">{gallery}</i>
          </a>
          <a href="#section-4">
            <i className="nav_icons">{shop}</i>
          </a>
        </nav>
      </div>
    );
  }
}

export default Navigation;
