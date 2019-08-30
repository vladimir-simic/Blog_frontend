import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Logo from "../../components/logo/logo";
import Photo from "../../components/Image/image";
import "./login.css";

class Login extends Component {
  state = {
    email: "",
    hashedPassword: ""
  };

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();
    for (const key in this.state) {
      if (this.state[key].length < 1) {
        console.log("All fields required");
        return false;
      }
    }
    this.props.loginUser(this.state);
  };

  render() {
    const { user } = this.props;

    if (user.token) {
      return <Redirect to='/' />;
    }

    return (
      <div>
        <Logo />
        <Photo />
        <div className="block">
          <form onSubmit={this.onSubmit} className='form'>
            <div className="input"> 
              <input
                type='email'
                name='email'
                onChange={this.onChange}
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label htmlFor='' id="name">Name</label>
            </div>
            <div className="input"> 
              <input
                type='password'
                name='hashedPassword'
                onChange={this.onChange}
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label htmlFor=''>Password</label>
            </div>
            <button type='submit' className='btn'>
              Login
            </button>
          </form>
        </div>
      </div>
      
    );
  }
}

export default Login;