import React from 'react';
import Navbar from '../components/Navbar';
import Questions from '../components/Questions';
import { useDifficulty } from '../DifficultyContext';

const Music = () => {
    const quiz = 'Music';
    const slug = 'music';
    const { selectedDifficulty } = useDifficulty();

    return (
        <div className='catQuiz'>
            <Navbar quiz={quiz} />
            <Questions categorie={12} difficulte={selectedDifficulty} slug={slug} />
        </div>
    );
};

export { Music };