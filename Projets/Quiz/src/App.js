import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { GeneralKnowledge } from './pages/GeneralKnowledge';
import { ScienceNature } from './pages/ScienceNature';
import { Sports } from './pages/Sports';
import { Geography } from './pages/Geography';
import { Art } from './pages/Art';
import { Animals } from './pages/Animals';
import { Vehicles } from './pages/Vehicles';
import { Movies } from './pages/Movies';
import { VideoGames } from './pages/VideoGames';
import { Music } from './pages/Music';
import { Leaderboard } from './pages/Leaderboard';
import { DifficultyProvider } from './DifficultyContext';

const App = () => {
    return (
        <DifficultyProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<Home />} />
                    <Route path="/general-knowledge" element={<GeneralKnowledge />} />
                    <Route path="/science-nature" element={<ScienceNature />} />
                    <Route path="/sports" element={<Sports />} />
                    <Route path="/geography" element={<Geography />} />
                    <Route path="/art" element={<Art />} />
                    <Route path="/animals" element={<Animals />} />
                    <Route path="/vehicles" element={<Vehicles />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/video-games" element={<VideoGames />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/leaderboard/:quizLower" element={<Leaderboard />} />
                </Routes>
            </BrowserRouter>
        </DifficultyProvider>
    );
};

export default App;