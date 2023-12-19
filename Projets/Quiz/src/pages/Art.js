import React from 'react';
import Navbar from '../components/Navbar';
import Questions from '../components/Questions';
import { useDifficulty } from '../DifficultyContext';

const Art = () => {
    const quiz = 'Art';
    const slug = 'art';
    const { selectedDifficulty } = useDifficulty();

    return (
        <div className='catQuiz'>
            <Navbar quiz={quiz} />
            <Questions categorie={25} difficulte={selectedDifficulty} slug={slug} />
        </div>
    );
};

export { Art };