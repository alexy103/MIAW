import React from 'react';
import Navbar from '../components/Navbar';
import Questions from '../components/Questions';
import { useDifficulty } from '../DifficultyContext';

const ScienceNature = () => {
    const quiz = 'Science & Nature'
    const slug = 'science-nature'
    const { selectedDifficulty } = useDifficulty();

    return (
        <div className='catQuiz'>
            <Navbar quiz={quiz} />
            <Questions categorie={17} difficulte={selectedDifficulty} slug={slug} />
        </div>
    );
};

export { ScienceNature };