import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navigation">
            <ul>
                <NavLink to='/' className={(nav) => (nav.isActive ? 'nav-active' : '')}>
                    <li>Home</li>
                </NavLink>
                <NavLink to='/quizzes' className={(nav) => (nav.isActive ? 'nav-active' : '')}>
                    <li>Quizzes</li>
                </NavLink>
            </ul>
        </nav>
    );
};

export default Navbar;