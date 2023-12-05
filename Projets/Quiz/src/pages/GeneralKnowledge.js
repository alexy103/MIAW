import React from 'react';
import Navbar from '../components/Navbar';
import Questions from '../components/Questions';
import { useDifficulty } from '../DifficultyContext';

const GeneralKnowledge = () => {
    const quiz = 'General Knowledge';
    const { selectedDifficulty } = useDifficulty();

    return (
        <div className='catQuiz'>
            <Navbar quiz={quiz} />
            <Questions categorie={9} difficulte={selectedDifficulty} quiz={quiz} quizLower={quiz.toLowerCase()} />
        </div>
    );
};

export { GeneralKnowledge };
