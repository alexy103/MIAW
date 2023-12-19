import React from 'react';
import Navbar from '../components/Navbar';
import Questions from '../components/Questions';
import { useDifficulty } from '../DifficultyContext';

const Geography = () => {
    const quiz = 'Geography';
    const slug = 'geography';
    const { selectedDifficulty } = useDifficulty();

    return (
        <div className='catQuiz'>
            <Navbar quiz={quiz} />
            <Questions categorie={22} difficulte={selectedDifficulty} slug={slug} />
        </div>
    );
};

export { Geography };