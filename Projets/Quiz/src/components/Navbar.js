import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = (props) => {
    const quiz = props.quiz;
    const slug = props.slug;

    if (!quiz) {
        return (
            <header className='home'>
                <NavLink to='/'>
                    <h1>Brain Pulse</h1>
                </NavLink>
            </header>
        );
    }
    else if (quiz && !slug) {
        return (
            <header className='quiz'>
                <NavLink to='/' className='fleche'>
                    <i className="fa-solid fa-left-long"></i>
                </NavLink>
                <h1>{quiz}</h1>
            </header>
        );
    }
    else if (slug) {
        return (
            <header className='quiz'>
                <NavLink to='/' className='fleche'>
                    <i className="fa-solid fa-left-long"></i>
                </NavLink>
                <h1>{quiz}</h1>
                <Link to={`/${slug}`} className='backToQuiz'>Go back to quiz</Link>
            </header>
        );
    }
}

export default Navbar;