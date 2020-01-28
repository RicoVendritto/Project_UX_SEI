import React, { Component } from "react";
import menu1 from "../resources/menu/food_menu.png";
import menu2 from "../resources/menu/drink_menu.png";
import glow from "../resources/menu/food_highlight.png";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: true,
      display: "block",
      display1: "none"
    };
  }
  onHandle = e => {
    e.preventDefault();
    if (!this.state.menu) {
      this.setState({
        menu: true,
        display: "block",
        display1: "none"
      });
    } else {
      this.setState({
        menu: true
      });
    }
  };
  onHandle1 = e => {
    e.preventDefault();
    if (!this.state.menu) {
      this.setState({
        menu: false
      });
    } else {
      this.setState({
        menu: false,
        display: "none",
        display1: "block"
      });
    }
  };

  render() {
    return (
      <section id="section-2">
        <div className="menu_ray">
          <h3>Menu</h3>
          <div className="food_drink">
            <div onClick={e => this.onHandle(e)} className="food_menu">
              Food
              <img
                className="line"
                src={glow}
                alt="menu"
                style={{ display: this.state.display }}
              />
            </div>

            <div onClick={e => this.onHandle1(e)} className="food_menu">
              Drinks
              <img
                className="line1"
                src={glow}
                alt="menu"
                style={{ display: this.state.display1 }}
              />
            </div>
          </div>
          {this.state.menu && (
            <div>
              <img className="menu" src={menu1} alt="menu" />
            </div>
          )}
          {!this.state.menu && (
            <div>
              <img className="menu" src={menu2} alt="menu" />
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default Menu;
