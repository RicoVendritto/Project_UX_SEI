import React from 'react';
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
      <div className="g1">
        <img className="pic" src={burger1} alt="pic" />
        <div className="inner_g">
          <img className="pic2" src={pic1} alt="pic2" />
          <img className="pic3" src={pic5} alt="pic2" />
        </div>
      </div>
      <div className="g2">
        
        <div className="inner_g1">
          <img className="pic2" src={burger6} alt="pic2" />
          <img className="pic3" src={pic6} alt="pic2" />
        </div>

          <img className="pic" src={burger5} alt="pic" />
      </div>
    </div>
  )
}

export default Gallery;