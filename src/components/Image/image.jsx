import React, { Component } from "react";

// const Image = () => {
//     return (
//         <div>
//             <img src="./airplane-clouds.jpg" alt="Airplane clouds" className="main-image"/>
//         </div>
//     );
// };


  
  class Image extends Component {
    render() {
      return (
        <section style={ sectionStyle }>
        </section>
      );
    }
  }

  var sectionStyle = {
    width: "100%",
    height: "30%",
    backgroundImage: `url(${Image})`
  };

export default Image;


