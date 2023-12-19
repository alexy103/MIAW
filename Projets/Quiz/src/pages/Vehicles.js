import React from 'react';
import Navbar from '../components/Navbar';
import Questions from '../components/Questions';
import { useDifficulty } from '../DifficultyContext';

const Vehicles = () => {
    const quiz = 'Vehicles';
    const slug = 'vehicles';
    const { selectedDifficulty } = useDifficulty();

    return (
        <div className='catQuiz'>
            <Navbar quiz={quiz} />
            <Questions categorie={28} difficulte={selectedDifficulty} slug={slug} />
        </div>
    );
};

export { Vehicles };