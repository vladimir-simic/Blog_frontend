import React, { Component } from "react";
import Posts from "../posts";
import Image from "../../components/Image/image";

class Home extends Component {
  render() {
    return (
      <div>
        <Image />
        <Posts />
      </div>
    );
  }
}

export default Home;