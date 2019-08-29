import React, { Component } from "react";
import cat from "./photos/cat.jpg";
import borders from "./photos/borders.jpg";
import conceptual from "./photos/conceptual.jpg";
import flower from "./photos/flower.jpg";
import images from "./photos/images.jpg";
import riga from "./photos/riga.jpg";
import shadows from "./photos/shadows.jpg";
import venice from "./photos/venice.jpg";

class Photos extends Component {
    render() {
        // const { posts } = this.props;
      return (
        <div>
          <h1 className="photography-heading">Digital Art</h1>
          <div class="row"> 
            <div class="column">
              <img src={cat} alt="Cat" className="cat"/>
              <img src={borders} alt="borders" className="borders"/>
              <img src={conceptual} alt="conceptual" className="conceptual"/>
              <img src={flower} alt="flower" className="flower"/>
              <img src={images} alt="images" className="images"/>
              <img src={riga} alt="riga" className="riga"/>
              <img src={venice} alt="venice" className="venice"/>
              <img src={shadows} alt="shadows" className="shadows"/>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Photos;