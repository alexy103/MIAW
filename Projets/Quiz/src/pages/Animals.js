import React from 'react';
import Navbar from '../components/Navbar';
import Questions from '../components/Questions';
import { useDifficulty } from '../DifficultyContext';

const Animals = () => {
    const quiz = 'Animals';
    const slug = 'animals';
    const { selectedDifficulty } = useDifficulty();

    return (
        <div className='catQuiz'>
            <Navbar quiz={quiz} />
            <Questions categorie={27} difficulte={selectedDifficulty} slug={slug} />
        </div>
    );
};

export { Animals };