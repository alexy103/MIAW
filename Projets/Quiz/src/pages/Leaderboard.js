/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Leaderboard = () => {
    const { quizLower } = useParams();
    useEffect(() => {
        if (leaderboardData.length === 0) {
            setLeaderboardData(JSON.parse(localStorage.getItem(`leaderboard-${quizLower}`)));
        }
    }, []);

    const [leaderboardData, setLeaderboardData] = useState([]);
    const location = useLocation();
    const { state } = location;
    const quizTitle = state && state.quizTitle ? state.quizTitle : quizLower.charAt(0).toUpperCase() + quizLower.slice(1).toLowerCase();

    return (
        <div className='leaderboard'>
            {quizTitle !== 'as' && <Navbar quiz={'Leaderboard - ' + quizTitle} />}
            {leaderboardData !== null ? (
                <ul>
                    {leaderboardData.map((data, index) => (
                        <li key={index}>
                            <p>Username: {data.username}</p>
                            <p>Score: {data.score}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No leaderboard data available</p>
            )}
        </div>
    );


};

export { Leaderboard };