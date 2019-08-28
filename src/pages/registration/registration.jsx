import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Logo from "../../components/logo/logo";
import Photo from "../../components/Image/image";

class Registration extends Component {
  state = {
    username: "",
    email: "",
    rehashedPassword: ""
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
    this.props.registerUser(this.state);
  };

  render() {
    const { isRegistered } = this.props;

    if (isRegistered) {
      return <Redirect to='/login' />;
    }

    return (
      <div>
        <Logo />
        <Photo />
        <div className="block">
          <form
            onSubmit={this.onSubmit}
            className='form'
          >
            <div class="input"> 
              <input
                type='text'
                name='username'
                onChange={this.onChange}
              />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label htmlFor='' id="username">Username</label>
            </div>
            <div class="input">
              <input
                type='email'
                name='email'
                onChange={this.onChange}
              />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label htmlFor='' id="email">Email</label>
            </div>
            <div class="input"> 
              <input
                type='password'
                name='rehashedPassword'
                onChange={this.onChange}
              />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label htmlFor='' id="password">Password</label>
            </div>
            <button type='submit' className='btn'>
              Register
            </button>
          </form>
        </div>
      </div>
      
    );
  }
}

export default Registration;