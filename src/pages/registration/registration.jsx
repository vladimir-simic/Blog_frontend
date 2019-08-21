import React, { Component } from "react";
import { Redirect } from "react-router-dom";

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
      <div className="block">
        <form
          onSubmit={this.onSubmit}
          className='form'
        >
          <div class="input"> 
            {/* <label htmlFor=''>Username</label> */}
            <input
              type='text'
              name='username'
              // className='form-control'
              onChange={this.onChange}
            />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label htmlFor='' id="mla">Username</label>
          </div>
          <div class="input"> 
            {/* <label htmlFor=''>Email</label> */}
            <input
              type='email'
              name='email'
              // className='form-control'
              onChange={this.onChange}
            />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label htmlFor='' id="mla">Email</label>
          </div>
          <div class="input"> 
            {/* <label htmlFor=''>Password</label> */}
            <input
              type='password'
              name='rehashedPassword'
              // className='form-control'
              onChange={this.onChange}
            />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label htmlFor='' id="mla">Password</label>
          </div>
          <button type='submit' className='btn'>
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default Registration;