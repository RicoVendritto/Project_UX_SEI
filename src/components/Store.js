import React, { Component } from "react";

// Custom Component
import ApiCall from "../services/api_helper";

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      apiDataLoaded: false
    };
  }

  componentDidMount = async () => {
    const res = ApiCall();
    this.setState({
      products: res,
      apiDataLoaded: true
    });
  };

  render() {
    console.log(this.state.products);
    return (
      <div classname="store-container">
        <div className="store" id="store">
          {this.state.apiDataLoaded ? (
            this.state.products.map((product, index) => (
              <div className="store_item" key={index}>
                <img className="store_item_image" src={product.product_image} />
                <p>{product.product_name}</p>
                <p>{product.product_price}</p>
                <button onClick={e => alert("BUYING THAT SHIT")}>BUY</button>
              </div>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    );
  }
}

export default Store;
