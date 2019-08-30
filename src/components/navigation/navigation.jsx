import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

const Navigation = ({ user, logout }) => {
  return (
    <div>
        <nav className='navbar'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link to='/' className='link'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/register' className='link'>
              Registration
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/users/self' className='link'>
              Login
            </Link>
          </li>
          {user.token ? (
            <li className='nav-item'>
              <Link to='/addPost' className='link'>
                Add Post
              </Link>
            </li>
          ) : null}
        </ul>
        {user.token ? (
          <button onClick={logout} className='btn btn-warning'>
            Log OUT!!!!
          </button>
        ) : null} 
      </nav>
      <nav className="navbar-main">
      <i className="fab fa-facebook"></i>
      <i className="fab fa-twitter"></i>
        <ul className="navbar-nav-main">
          <li className="nav-item-main">
            <Link to="/photography" className="link-main">
              Photography
            </Link>
          </li>
          <li className="nav-item-main">
            <Link to="/addPost" className="link-main">
              Add Post
            </Link>
          </li>
          <li className="nav-item-main">
            <Link to="/team" className="link-main">
              Team
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    
  );
};

export default Navigation;