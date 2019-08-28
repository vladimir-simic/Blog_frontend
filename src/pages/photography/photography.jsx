import React, { Component } from "react";
import Photos from "./photos";
import Logo from "../../components/logo/logo";
import "./photography.css";

class Photography extends Component {
  render() {
    return (
      <div>
        <Logo />
        <div className="photography">
          <Photos />
        </div>
      </div>
      
    );
  }
}

export default Photography;