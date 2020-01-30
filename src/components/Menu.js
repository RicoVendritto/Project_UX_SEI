import React, { Component } from "react";
import menu1 from "../resources/menu/food_menu.png";
import menu2 from "../resources/menu/drink_menu.png";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: true,
      test1: "menu",
      test2: undefined,
      display1: "menu_active",
      display2: "none"
    };
  }
  onHandle1 = e => {
    e.preventDefault();
    if (!this.state.menu) {
      this.setState({
        menu: true,
        test1: "menu",
        display1: "menu_active",
        display2: undefined
      });
    } else {
      this.setState({
        menu: true,
        test1: "menu"
      });
    }
  };
  onHandle2 = e => {
    e.preventDefault();
    if (!this.state.menu) {
      this.setState({
        menu: false,
        test2: undefined,
      });
    } else {
      this.setState({
        menu: false,
        test2: undefined,
        display1: undefined,
        display2: "menu_active"
      });
    }
  };

  render() {
    return (
      <section id="section-2">
        <div className="menu_ray">
          <h3>Menu</h3>
          <div className="food_drink">
            <div
              onClick={e => this.onHandle1(e)}
              className={`food_menu ${this.state.display1}`}
            >
              <h3>FOOD</h3>
            </div>
            <div
              onClick={e => this.onHandle2(e)}
              className={`food_menu ${this.state.display2}`}
            >
              <h3>Drinks</h3>
            </div>
          </div>
          {this.state.menu && (
            <div>
              <img className={this.state.test1} src={menu1} alt="menu" />
            </div>
          )}
          {!this.state.menu && (
            <div>
              <img className={this.state.test1} src={menu2} alt="menu" />
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default Menu;
