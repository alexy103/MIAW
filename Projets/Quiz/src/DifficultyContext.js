import React, { createContext, useContext, useState } from 'react';

const DifficultyContext = createContext();

export const DifficultyProvider = ({ children }) => {
    const [selectedDifficulty, setSelectedDifficulty] = useState('easy');

    const handleDifficultyChange = (newDifficulty) => {
        setSelectedDifficulty(newDifficulty);
    };

    return (
        <DifficultyContext.Provider value={{ selectedDifficulty, handleDifficultyChange }}>
            {children}
        </DifficultyContext.Provider>
    );
};

export const useDifficulty = () => {
    return useContext(DifficultyContext);
};
