import React, { Component } from "react";
import "./App.css";

// Custom Components
import Header from "./components/Header";
import Locations from "./components/Locations";
import Menu from "./components/Menu";
import Store from "./components/Store";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <p>We're up and running</p>
        <Header />
        <main>
          
          <Locations />
          <Menu />
          <Store />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
