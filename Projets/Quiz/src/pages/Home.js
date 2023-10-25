import React from 'react';
import Navbar from '../components/Navbar';
import ListeQuiz from '../components/ListeQuiz';
import Difficulty from '../components/Difficulty';

const Home = () => {
    return (
        <div>
            <Navbar />
            <ListeQuiz />
            <Difficulty />
        </div>
    );
};

export { Home };