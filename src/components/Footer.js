import React from "react";
import social from "../resources/icons/all_in_one.png";
import grub from "../resources/icons/GrubHub.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_items">
        <div className="order_thru">
          <h4> Order Thru</h4>
          <img
                className="grub"
                src={grub}
                alt="grub-hub"
              />
          <p> Door Dash </p>
          <p> Seamless </p>
        </div>
        <div className="connect">
          <h4> Connect With Us! </h4>
          <p> Social Media Links </p>
          <img
                className="social-media"
                src={social}
                alt="social-media"
              />
          <p> Subscribe </p>
        </div>
        <div className="press">
          <h4> Press </h4>
          <p> Yelp </p>
          <p> The New Yorker</p>
          <p> Timeout </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
