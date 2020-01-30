import React from "react";
import long_island from "../resources/locations/Long-Island-City.jpeg";
import greenwich_village from "../resources/locations/exterior1.jpg";
import hells_kitchen from "../resources/locations/exterior2.jpg";

class Locations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maps1: true,
      maps2: false,
      maps3: false,
      display1: "in_loc_active",
      display2: undefined,
      display3: undefined
    };
  }
  onClick1 = e => {
    e.preventDefault();
    if (!this.state.maps) {
      this.setState({
        maps1: true,
        maps2: false,
        maps3: false,
        display1: "in_loc_active",
        display2: undefined,
        display3: undefined
      });
    } else {
      this.setState({
        maps1: true,
        maps2: false,
        maps3: false,
        display1: "in_loc_active",
        display2: undefined,
        display3: undefined
      });
    }
  };
  onClick2 = e => {
    e.preventDefault();
    if (!this.state.maps1) {
      this.setState({
        maps1: false,
        maps2: true,
        maps3: false,
        display1: undefined,
        display2: "in_loc_active",
        display3: undefined
      });
    } else {
      this.setState({
        maps1: false,
        maps2: true,
        maps3: false,
        display1: undefined,
        display2: "in_loc_active",
        display3: undefined
      });
    }
  };
  onClick3 = e => {
    e.preventDefault();
    if (!this.state.maps2) {
      this.setState({
        maps1: false,
        maps2: false,
        maps3: true,
        display1: undefined,
        display2: undefined,
        display3: "in_loc_active"
      });
    } else {
      this.setState({
        maps1: false,
        maps2: false,
        maps3: true,
        display1: undefined,
        display2: undefined,
        display3: "in_loc_active"
      });
    }
  };

  render() {
    return (
      <section id="section-1">
        <div className="locations">
          <h3>Locations</h3>
          <div className="inner_locations">
            <div
              onClick={this.onClick1}
              className={`in_loc ${this.state.display1}`}
            >
              <div className="location_container">
                <img
                  className="location_img"
                  src={greenwich_village}
                  alt="greenwich-village"
                />
              </div>
              <h3 className="loc_title">Greenwich Village</h3>
              <p className="loc">
                331 W 4th St,
                <br />
                New York, NY 10004
                <br />
                at the corner of
                <br />
                Jane and West 4th St
                <br />
                (212)242-9502
              </p>
            </div>
            <div
              onClick={this.onClick2}
              className={`in_loc ${this.state.display2}`}
            >
              <div className="location_container">
                <img
                  className="location_img"
                  src={long_island}
                  alt="long-island-city"
                />
              </div>
              <h3 className="loc_title"> Long Island City</h3>
              <p className="loc">
                47-18 Vernon Blvd,
                <br />
                Long Island City, NY 11101
                <br />
                at the corner of
                <br />
                47th St
                <br />
                (718)606-6500
              </p>
            </div>
            <div
              onClick={this.onClick3}
              className={`in_loc ${this.state.display3}`}
            >
              <div className="location_container">
                <img
                  className="location_img"
                  src={hells_kitchen}
                  alt="hells-kitchen"
                />
              </div>
              <h3 className="loc_title"> Hells Kitchen</h3>
              <p className="loc">
                600 11th Avenue
                <br />
                New York, NY 10036
                <br />
                at the corner of
                <br />
                West 44th Street
                <br />
                (212)582-2188
              </p>
            </div>
          </div>
          <div className="maps">
            {this.state.maps1 && (
              <iframe
                title="maps3"
                className="mapped"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12092.359438384261!2d-74.01249573022457!3d40.738048199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259240a47f6d3%3A0xce4ee8d8fe562753!2sCorner%20Bistro!5e0!3m2!1sen!2sus!4v1580152082834!5m2!1sen!2sus"
              ></iframe>
            )}
          </div>
          <div className="maps">
            {this.state.maps2 && (
              <iframe
                title="maps1"
                className="mapped"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.7756280722424!2d-73.95581314914017!3d40.744962379226884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25923f58a0e2b%3A0x2382e29371f5241d!2sCorner%20Bistro!5e0!3m2!1sen!2sus!4v1580150795229!5m2!1sen!2sus"
              ></iframe>
            )}
          </div>
          <div className="maps">
            {this.state.maps3 && (
              <iframe
                title="maps2"
                className="mapped"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.7700896840925!2d-73.99972080778414!3d40.76227880835479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259d0afd71ce9%3A0xe0c43645db0a51c4!2sCorner%20Bistro!5e0!3m2!1sen!2sus!4v1580151968716!5m2!1sen!2sus"
              ></iframe>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Locations;
