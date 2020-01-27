import React from "react";
import pic1 from "../resources/food/pic1.jpg";
import burger1 from "../resources/food/burger1.jpg";
import burger6 from "../resources/food/burger6.jpg";
import burger5 from "../resources/food/burger5.jpg";
import pic5 from "../resources/food/pic5.jpg";
import pic6 from "../resources/food/pic6.jpeg";

const Gallery = () => {
  return (
    <div className="gallery" id="gallery">
      <h3>Gallery</h3>
      <div className="grid-container">
        <img className="grid-element pic1" src={burger1} alt="grid-element-1" />
        <img className="grid-element pic2" src={pic1} alt="grid-element-2" />
        <img className="grid-element pic3" src={pic5} alt="grid-element-3" />
        <img className="grid-element pic4" src={burger6} alt="grid-element-4" />
        <img className="grid-element pic5" src={pic6} alt="grid-element-5" />
        <img className="grid-element pic6" src={burger5} alt="grid-element-6" />
      </div>
    </div>
  );
};

export default Gallery;
