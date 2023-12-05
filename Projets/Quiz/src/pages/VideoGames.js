import React from 'react';
import Navbar from '../components/Navbar';
import Questions from '../components/Questions';
import { useDifficulty } from '../DifficultyContext';

const VideoGames = () => {
    const quiz = 'Video Games';
    const { selectedDifficulty } = useDifficulty();
    return (
        <div className='catQuiz'>
            <Navbar quiz={quiz} />
            <Questions categorie={15} difficulte={selectedDifficulty} quiz={quiz} quizLower={quiz.toLowerCase()} />
        </div>
    );
};

export { VideoGames };