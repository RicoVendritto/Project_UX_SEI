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

          <a href = "https://www.grubhub.com/"> <img className="footer_logo_left grub_footer" src={grubhub_logo} alt="grub-hub" /></a>
          <a href = "https://www.doordash.com/"> <img className="footer_logo_left doordash_footer" src={doordash} alt="doordash" /></a>
          <a href = "https://www.seamless.com/"><img className="footer_logo_left seamless_footer" src={seemless} alt="seemless" /></a>
        </div>
        <div className="footer_menu connect">
          <h4>Connect With Us!</h4>
          <a href ="https://www.facebook.com/cornerbistronyc/"> <img className="social-media" src={fbigtw} alt="social-media" /></a>
          <button className="footer_button" onClick={e => alert("Thank you")}>SUBSCRIBE</button>
        </div>
        <div className="footer_menu press">
          <h4>Press</h4>
          <a href="https://www.yelp.com/biz/corner-bistro-new-york"> <img className="footer_logo_right yelp_footer" src={yelp} alt="yelp" /></a>
          <a href="https://www.newyorker.com/search/q/corner%20bistro"><img className="footer_logo_right tny_footer" src={tny} alt="tny" /></a>
          <a href="https://www.timeout.com/newyork/restaurants/corner-bistro"><img className="footer_logo_right tonyc_footer" src={timeout} alt="timeout" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
