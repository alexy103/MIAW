import React from 'react';
import Navbar from '../components/Navbar';
import Questions from '../components/Questions';
import { useDifficulty } from '../DifficultyContext';

const Movies = () => {
    const quiz = 'Movies';
    const { selectedDifficulty } = useDifficulty();
    return (
        <div className='catQuiz'>
            <Navbar quiz={quiz} />
            <Questions categorie={11} difficulte={selectedDifficulty} quiz={quiz} quizLower={quiz.toLowerCase()} />
        </div>
    );
};

export { Movies };