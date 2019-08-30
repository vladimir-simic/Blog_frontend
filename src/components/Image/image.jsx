import React, { Component } from "react";
import airplaneClouds from "./airplane-clouds.jpg";

class Image extends Component {
  render() {
    return (
      <div>
        <img src={airplaneClouds} alt="Airplane clouds" className="main-image"/>
      </div>
    );
  }
}

export default Image;





