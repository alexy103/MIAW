import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    const quiz = props.quiz;

    if (!quiz) {
        return (
            <header className='home'>
                <NavLink to='/'>
                    <h1>Brain Pulse</h1>
                </NavLink>
            </header>
        );
    }
    else {
        return (
            <header className='quiz'>
                <NavLink to='/'>
                    <i className="fa-solid fa-left-long"></i>
                </NavLink>
                <h1>{quiz}</h1>
            </header>

        );
    }
}

export default Navbar;
