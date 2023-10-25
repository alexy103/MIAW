import React from 'react';
import { Link } from 'react-router-dom';

const ListeQuiz = () => {
    return (
        <ul className='listeQuiz'>
            <li><Link to='/general-knowledge'>General Knowledge</Link></li>
            <li><Link to='/science-nature'>Science & Nature</Link></li>
            <li><Link to='/sports'>Sports</Link></li>
            <li><Link to='/geography'>Geography</Link></li>
            <li><Link to='/art'>Art</Link></li>
            <li><Link to='/animals'>Animals</Link></li>
            <li><Link to='/vehicles'>Vehicles</Link></li>
            <li><Link to='/movies'>Movies</Link></li>
            <li><Link to='/video-games'>Video Games</Link></li>
            <li><Link to='/music'>Music</Link></li>
        </ul>
    );
};

export default ListeQuiz;
