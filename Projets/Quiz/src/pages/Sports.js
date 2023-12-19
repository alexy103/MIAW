import React from 'react';
import Navbar from '../components/Navbar';
import Questions from '../components/Questions';
import { useDifficulty } from '../DifficultyContext';

const Sports = () => {
    const quiz = 'Sports';
    const slug = 'sports';
    const { selectedDifficulty } = useDifficulty();

    return (
        <div className='catQuiz'>
            <Navbar quiz={quiz} />
            <Questions categorie={21} difficulte={selectedDifficulty} slug={slug} />
        </div>
    );
};

export { Sports };