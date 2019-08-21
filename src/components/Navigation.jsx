import React from "react";
import { Link } from "react-router-dom";

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
        <ul className="navbar-nav-main">
          <li className="nav-item-main">
            <Link to="/photography" className="link-main">
              Photography
            </Link>
          </li>
          <li className="nav-item-main">
            <Link to="/design" className="link-main">
              Design
            </Link>
          </li>
          <li className="nav-item-main">
            <Link to="/graphic" className="link-main">
              Graphic
            </Link>
          </li>
          <li className="nav-item-main">
            <Link to="/stories" className="link-main">
              Stories
            </Link>
          </li>
          <li className="nav-item-main">
            <Link to="/contact" className="link-main">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    
  );
};

export default Navigation;