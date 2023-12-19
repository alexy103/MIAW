/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Leaderboard = () => {
    const { difficulte, slug } = useParams();
    const quizTitle = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    // const quizTitle = 'Quiz title';
    const [leaderboardData, setLeaderboardData] = useState([]);
    let sortedLeaderboard;

    useEffect(() => {
        if (!leaderboardData || leaderboardData.length === 0) {
            setLeaderboardData(JSON.parse(localStorage.getItem(`leaderboard-${difficulte}-${slug}`)));
            console.log(`leaderboard-${difficulte}-${slug}`)
        }
    }, [difficulte, leaderboardData]);

    if (leaderboardData) {
        sortedLeaderboard = leaderboardData.sort((a, b) => (a.score < b.score) ? 1 : -1);
        sortedLeaderboard = sortedLeaderboard.slice(0, 5);
    }

    return (
        <div className='leaderboard'>
            {quizTitle !== 'as' && <Navbar quiz={'Leaderboard - ' + quizTitle + ' (' + difficulte + ')'} slug={slug} />}
            {sortedLeaderboard && sortedLeaderboard !== null ? (
                <ul>
                    {sortedLeaderboard.map((data, index) => (
                        <li key={index}>
                            <p>{data.username}</p>
                            <p>{data.score} / 5</p>
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

