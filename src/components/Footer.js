import React from "react";
// import all_in_one from "../resources/icons/all-in-one.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_items">
        <div className="order_thru">
          <h4> Order Thru</h4>
          <p> Grub </p>
          <p> Door Dash </p>
          <p> Seamless </p>
        </div>
        <div className="connect">
          <h4> Connect With Us! </h4>
          {/* <img src={all_in_one}> </img> */}
          </div>
      </div>
    </footer>
  );
};

export default Footer;
