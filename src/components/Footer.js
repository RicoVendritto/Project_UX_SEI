import React from "react";
import doordash from "../resources/footer/doordash_logo.png";
import fbigtw from "../resources/footer/fb_ig_tw.png";
import grubhub_logo from "../resources/footer/grubhub_logo.png";
import seemless from "../resources/footer/seemless_logo.png";
import tny from "../resources/footer/tny_logo.png";
import yelp from "../resources/footer/yelp_logo.png";
import timeout from "../resources/footer/tonyc_logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_items">
        <div className="footer_menu order_thru">
          <h4>Order Thru</h4>
          <img className="footer_logo_left grub_footer" src={grubhub_logo} alt="grub-hub" />
          <img className="footer_logo_left doordash_footer" src={doordash} alt="doordash" />
          <img className="footer_logo_left seamless_footer" src={seemless} alt="seemless" />
        </div>
        <div className="footer_menu connect">
          <h4>Connect With Us!</h4>
          <img className="social-media" src={fbigtw} alt="social-media" />
          <button className="footer_button" onClick={e => alert("Thank you")}>SUBSCRIBE</button>
        </div>
        <div className="footer_menu press">
          <h4>Press</h4>
          <img className="footer_logo_right yelp_footer" src={yelp} alt="yelp" />
          <img className="footer_logo_right tny_footer" src={tny} alt="tny" />
          <img className="footer_logo_right tonyc_footer" src={timeout} alt="timeout" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
