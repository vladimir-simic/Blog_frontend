import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-secondary'>
            <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                    <Link to='/' className='nav-link'>
                        Home
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;