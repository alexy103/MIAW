import React from 'react';
import Navbar from '../components/Navbar';
import Questions from '../components/Questions';
import { useDifficulty } from '../DifficultyContext';

const Movies = () => {
    const quiz = 'Movies';
    const slug = 'movies';
    const { selectedDifficulty } = useDifficulty();
    return (
        <div className='catQuiz'>
            <Navbar quiz={quiz} />
            <Questions categorie={11} difficulte={selectedDifficulty} slug={slug} />
        </div>
    );
};

export { Movies };