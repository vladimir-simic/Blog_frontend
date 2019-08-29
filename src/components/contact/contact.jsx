import React, { Component } from 'react';
import "./contact.css";

class Contact extends Component {
    render() {
        // const { authors = [] } = this.props;
        return (
            <div className="contact">
                <div className="contact-name">Find out the V.log team</div>
                <p className="contact-email">vlog@vlog.com</p>
            </div>
        );
    }
}

export default Contact;

// const CountryList = ({countries = []}) => (
//     <div>
//       This is the country list: <br/>
//       <ul>
//         {countries.map((_id, country) => (
//           <li key={_id}>
//             <h3>{country}</h3>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );