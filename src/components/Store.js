import React, { Component } from "react";

// Custom Component
import ApiCall from "../services/api_helper";
// import left_arrow from "../resources/menu/left_arrow.png";
// import right_arrow from "../resources/menu/right_arrow.png";

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
      <section id="section-4">
        <div classname="store-container">
          <h3>Shop</h3>
          <div className="store">
            {/* <img className="arrow_right" src={right_arrow} alt="right-arrow" /> */}
            {this.state.apiDataLoaded ? (
              this.state.products.map((product, index) => (
                <div className="store_item" key={index}>
                  <div className="background_item_image">
                    <img
                      className="store_item_image"
                      src={product.product_image}
                      alt="corner_bistro_merchandise"
                    />
                  </div>
                  <p>{product.product_name}</p>
                  <p>$ {product.product_price}</p>
                  <button onClick={e => alert("Item is added to your cart")}>
                    add to cart
                  </button>
                </div>
              ))
            ) : (
              <div>Loading...</div>
            )}
          </div>
          {/* <img className="arrow" src={right_arrow} alt="right-arrow" /> */}
        </div>
      </section>
    );
  }
}

export default Store;
