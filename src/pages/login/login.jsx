import React, { Component } from "react";
import { Redirect } from "react-router-dom";

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
      <div className="block">
        <form
          onSubmit={this.onSubmit}
          className='form'
        >
          <div class="input"> 
            {/* <label htmlFor=''>Email</label> */}
            <input
              type='email'
              name='email'
              // className='login-input-email'
              onChange={this.onChange}
            />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label htmlFor='' id="mla">Name</label>
          </div>
          <div class="input"> 
            {/* <label htmlFor=''>Password</label> */}
            <input
              type='password'
              name='hashedPassword'
              // className='login-input-pass'
              onChange={this.onChange}
            />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label htmlFor=''>Password</label>
          </div>
          <button type='submit' className='btn'>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;