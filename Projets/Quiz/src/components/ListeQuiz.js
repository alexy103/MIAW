import React from 'react';
import { Link } from 'react-router-dom';

const ListeQuiz = () => {
    return (
        <ul className='listeQuiz'>
            <li><Link to='/quizzes/general-knowledge'>General Knowledge</Link></li>
            <li><Link to='/quizzes/science-nature'>Science & Nature</Link></li>
            <li><Link to='/quizzes/sports'>Sports</Link></li>
            <li><Link to='/quizzes/geography'>Geography</Link></li>
            <li><Link to='/quizzes/art'>Art</Link></li>
            <li><Link to='/quizzes/animals'>Animals</Link></li>
            <li><Link to='/quizzes/vehicles'>Vehicles</Link></li>
            <li><Link to='/quizzes/movies'>Movies</Link></li>
            <li><Link to='/quizzes/video-games'>Video Games</Link></li>
            <li><Link to='/quizzes/music'>Music</Link></li>
        </ul>
    );
};

export default ListeQuiz;
