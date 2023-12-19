/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import he from 'he';
import { Link, useNavigate } from "react-router-dom";

const Questions = ({ categorie, difficulte, slug }) => {
    const [data, setData] = useState([]);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [played, setPlayed] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [leaderboardData, setLeaderboardData] = useState(null);
    const navigate = useNavigate();
    const popup = document.querySelector('.popup');

    useEffect(() => {
        getQuestions(categorie, difficulte);
    }, [categorie, difficulte]);

    useEffect(() => {
        setLeaderboardData(JSON.parse(localStorage.getItem(`leaderboard-${difficulte}-${slug}`)));
    }, []);


    function play(i) {
        setPlayed(true);
        const correct = document.querySelector('.correct');
        const incorrect = document.querySelectorAll('.incorrect');
        const next = document.querySelector('.next');
        const answers = document.querySelectorAll('.correct, .incorrect');

        correct.classList.add('correctColor');
        correct.classList.remove('hover');
        incorrect.forEach(e => {
            e.classList.add('incorrectColor');
            e.classList.remove('hover');
        });

        if (answers[i] === correct && !played) {
            setScore(score + 1);
        } else {
            setScore(score);
        }

        if (questionIndex === 4) {
            next.classList.add('hidden');
            const menu = document.querySelector('.menu');
            const playAgain = document.querySelector('.again');
            const addLeaderboard = document.querySelector('.addLeaderboard');
            const leaderboard = document.querySelector('.leaderboard');

            menu.classList.remove('hidden');
            playAgain.classList.remove('hidden');
            addLeaderboard.classList.remove('hidden');
            leaderboard.classList.remove('hidden');

            menu.addEventListener('click', () => {
                navigate('/');
            });
        } else {
            next.classList.remove('hidden');
        }
    }

    function getQuestions(categorie, difficulte) {
        axios.get(`https://opentdb.com/api.php?amount=5&category=${categorie}&difficulty=${difficulte}&type=multiple`)
            .then((res) => {
                const questions = res.data.results.map((questionData) => {
                    const question = {
                        question: he.decode(questionData.question),
                        correct_answer: he.decode(questionData.correct_answer),
                        incorrect_answers: questionData.incorrect_answers.map((incorrectAnswer) => he.decode(incorrectAnswer)),
                    };

                    const answers = [...question.incorrect_answers, question.correct_answer];
                    answers.sort(() => 0.5 - Math.random());

                    return { ...question, answers };
                });
                setData(questions)
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des questions:', error);
            });
    }

    function nextQuestion() {
        setPlayed(false);
        const correct = document.querySelector('.correct');
        const incorrect = document.querySelectorAll('.incorrect');
        const next = document.querySelector('.next');
        if (questionIndex < 4) {
            setQuestionIndex(questionIndex + 1);
            next.classList.add('hidden');
            incorrect.forEach(e => {
                e.classList.remove('incorrectColor');
                e.classList.add('hover');
            });
            correct.classList.remove('correctColor');
            correct.classList.add('hover');
        }
    }

    function addUserScore(username, score) {
        const newScore = { username, score };
        if (leaderboardData !== null) {
            localStorage.setItem(`leaderboard-${difficulte}-${slug}`, JSON.stringify([...leaderboardData, newScore]))
        } else {
            localStorage.setItem(`leaderboard-${difficulte}-${slug}`, JSON.stringify([newScore]))
        }
        console.log(newScore);
        console.log(localStorage.getItem('leaderboard'));
        setShowPopup(false);
    }

    function reload() {
        window.location.reload();
    }


    if (showPopup) {
        popup.classList.remove('hidden');
        document.querySelector('form').addEventListener('submit', (event) => {
            event.preventDefault();
            const username = document.getElementById('username').value;
            addUserScore(username, score);
            navigate(`/leaderboard/${difficulte}/${slug}`);
        });
    }

    return (
        <div className='questions'>
            {data.length > 0 && (
                <div>
                    <h2>{data[questionIndex].question}</h2>
                    <ul>
                        {data[questionIndex].answers.map((answer, i) => (
                            <li key={i}>
                                <p onClick={() => play(i)} className={answer === data[questionIndex].correct_answer ? 'correct hover' : 'incorrect hover'}>{answer}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <h3 className='score'>Score : {score}/5</h3>
            <p className='next hidden' onClick={nextQuestion}>Next question</p>
            <div className='end'>
                <Link to='/'><p className='menu hidden'>Back to main menu</p></Link>
                <a onClick={() => reload()}><p className='again hidden'>Play again</p></a>
                <a><p className='addLeaderboard hidden' onClick={() => setShowPopup(true)}>Add my score to leaderboard</p></a>
                <Link to={`/leaderboard/${difficulte}/${slug}`}><p className='leaderboard hidden'>Leaderboard</p></Link>
            </div>
            <div className="popup hidden">
                <form action='#'>
                    <label htmlFor='username'>Username:</label>
                    <input type="text" id='username' />
                </form>
            </div>
        </div>
    );
};

export default Questions;