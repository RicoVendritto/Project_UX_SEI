import React, { Component } from "react";
import "./App.css";

// Custom Components
import Header from "./components/Header";
import Locations from "./components/Locations";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
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
        <Header />
        <main>
          <Locations />
          <Menu />
          <Gallery />
          <Store />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
