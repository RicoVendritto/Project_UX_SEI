import React from "react";
import pic1 from "../resources/food/pic1.jpg";
import burger1 from "../resources/food/burger1.jpg";
import burger6 from "../resources/food/burger6.jpg";
import burger5 from "../resources/food/burger5.jpg";
import pic5 from "../resources/food/pic5.jpg";
import pic6 from "../resources/food/pic6.jpeg";

const Gallery = () => {
  return (
    <section id="section-3">
      <div className="gallery">
        <h3>Gallery</h3>
        <div className="grid-container">
          <div className="card card1">
            <img
              className="grid-element pic1"
              src={burger1}
              alt="grid-element-1"
            />
          </div>
          <div className="card card2">
            <img
              className="grid-element pic2 card"
              src={pic1}
              alt="grid-element-2"
            />
          </div>
          <div className="card card3">
            <img
              className="grid-element pic3 card"
              src={pic5}
              alt="grid-element-3"
            />
          </div>
          <div className="card card4">
            <img
              className="grid-element pic4 card"
              src={burger6}
              alt="grid-element-4"
            />
          </div>
          <div className="card card5">
            <img
              className="grid-element pic5 card"
              src={pic6}
              alt="grid-element-5"
            />
          </div>
          <div className="card card6">
            <img
              className="grid-element pic6 card"
              src={burger5}
              alt="grid-element-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
