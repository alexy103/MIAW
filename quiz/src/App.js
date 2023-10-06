import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Quiz } from './pages/Quizzes';
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

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/quizzes" element={<Quiz />} />
                <Route path="/quizzes/general-knowledge" element={<GeneralKnowledge />} />
                <Route path="/quizzes/science-nature" element={<ScienceNature />} />
                <Route path="/quizzes/sports" element={<Sports />} />
                <Route path="/quizzes/geography" element={<Geography />} />
                <Route path="/quizzes/art" element={<Art />} />
                <Route path="/quizzes/animals" element={<Animals />} />
                <Route path="/quizzes/vehicles" element={<Vehicles />} />
                <Route path="/quizzes/movies" element={<Movies />} />
                <Route path="/quizzes/video-games" element={<VideoGames />} />
                <Route path="/quizzes/music" element={<Music />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App; <h1>Hello</h1>