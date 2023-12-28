import React from 'react';
import { useDifficulty } from '../DifficultyContext';

const Difficulty = () => {
    const { selectedDifficulty, handleDifficultyChange } = useDifficulty();

    return (
        <div className="difficulty">
            <h2>Difficulty</h2>
            <div>
                <p
                    onClick={() => handleDifficultyChange('easy')}
                    style={{ color: selectedDifficulty === 'easy' ? '#FFD53F' : '' }}
                >
                    Easy
                </p>
                <p
                    onClick={() => handleDifficultyChange('medium')}
                    style={{ color: selectedDifficulty === 'medium' ? '#FFD53F' : '' }}
                >
                    Medium
                </p>
                <p
                    onClick={() => handleDifficultyChange('hard')}
                    style={{ color: selectedDifficulty === 'hard' ? '#FFD53F' : '' }}
                >
                    Hard
                </p>
            </div>

        </div>
    );
};

export default Difficulty;
