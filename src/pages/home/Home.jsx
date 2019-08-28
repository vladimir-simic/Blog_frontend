import React, { Component } from "react";
import Posts from "../posts";
import Image from "../../components/Image/image";
import Logo from "../../components/logo/logo";
import Contact from "../../components/contact/contact";

class Home extends Component {
  render() {
    return (
      <div>
        <Logo />
        <Image />
        <Contact />
        <Posts />
      </div>
    );
  }
}

export default Home;