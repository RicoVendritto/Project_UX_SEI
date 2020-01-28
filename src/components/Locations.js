import React from "react";
import long_island from "../resources/locations/Long-Island-City.jpeg";
import greenwich_village from "../resources/locations/exterior1.jpg";
import hells_kitchen from "../resources/locations/exterior2.jpg";
// import hells_kitchen_map from "../resources/locations/Screen_Shot.png";
import glow from "../resources/menu/Location Highlight.png";

class Locations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maps: true,
      maps1: false,
      maps2: false,
      display: "block",
      display1: "none",
      display2: "none"
    };
  }
  onClick = e => {
    e.preventDefault();
    if (!this.state.maps) {
      this.setState({
        maps: true,
        maps1: false,
        maps2: false,
        display: "block",
        display1: "none",
        display2: "none"
      });
    } else {
      this.setState({
        maps: true
      });
    }
  };
  onClick1 = e => {
    e.preventDefault();
    if (!this.state.maps1) {
      this.setState({
        maps: false,
        maps1: true,
        maps2: false,
        display: "none",
        display1: "block",
        display2: "none"
      });
    } else {
      this.setState({
        map1: true
      });
    }
  };
  onClick2 = e => {
    e.preventDefault();
    if (!this.state.maps2) {
      this.setState({
        maps: false,
        maps1: false,
        maps2: true,
        display: "none",
        display1: "none",
        display2: "block"
      });
    } else {
      this.setState({
        map2: true
      });
    }
  };

  render() {
    return (
      <section id="section-1">
        <div className="locations">
          <h3>Locations</h3>
          <div className="inner_locations">
            <div onClick={this.onClick} classname="in_loc">
              <img
                className="location_img"
                src={greenwich_village}
                alt="greenwich-village"
              />
              <h3>
                Greenwich Village
                <img
                  className="line_loc"
                  src={glow}
                  alt="menu"
                  style={{ display: this.state.display }}
                />
              </h3>
              <p className="loc">
                331 W 4th St, New York, NY 10004 at the corner of Jane and West
                4th St <p> (212)242-9502 </p>
              </p>
            </div>
            <div onClick={this.onClick1}>
              <img
                className="location_img"
                src={long_island}
                alt="long-island-city"
              />
              <h3>
                {" "}
                Long Island City
                <img
                  className="line_loc"
                  src={glow}
                  alt="menu"
                  style={{ display: this.state.display1 }}
                />
              </h3>
              <p className="loc">
                47-18 Vernon Blvd, Long Island City, NY 11101 at the corner of
                47th St
                <p>(718)606-6500</p>
              </p>
            </div>
            <div onClick={this.onClick2}>
              <img
                className="location_img"
                src={hells_kitchen}
                alt="hells-kitchen"
              />
              <h3>
                {" "}
                Hells Kitchen
                <img
                  className="line_loc"
                  src={glow}
                  alt="menu"
                  style={{ display: this.state.display2 }}
                />
              </h3>
              <p className="loc">
                600 11th Avenue New York, NY 10036 at the corner of West 44th
                Street
                <p>(212)582-2188</p>
              </p>
            </div>
          </div>
          <div className="maps">
            {this.state.maps1 && (
              <iframe
                title="maps1"
                className="mapped"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.7756280722424!2d-73.95581314914017!3d40.744962379226884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25923f58a0e2b%3A0x2382e29371f5241d!2sCorner%20Bistro!5e0!3m2!1sen!2sus!4v1580150795229!5m2!1sen!2sus"
              ></iframe>
            )}
          </div>
          <div className="maps">
            {this.state.maps2 && (
              <iframe
                title="maps2"
                className="mapped"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.7700896840925!2d-73.99972080778414!3d40.76227880835479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259d0afd71ce9%3A0xe0c43645db0a51c4!2sCorner%20Bistro!5e0!3m2!1sen!2sus!4v1580151968716!5m2!1sen!2sus"
              ></iframe>
            )}
          </div>
          <div className="maps">
            {this.state.maps && (
              <iframe
                title="maps3"
                className="mapped"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12092.359438384261!2d-74.01249573022457!3d40.738048199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259240a47f6d3%3A0xce4ee8d8fe562753!2sCorner%20Bistro!5e0!3m2!1sen!2sus!4v1580152082834!5m2!1sen!2sus"
              ></iframe>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Locations;
