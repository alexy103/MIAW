import React, { useEffect, useState } from 'react';
import axios from 'axios';
import he from 'he';

const Questions = ({ categorie, difficulte }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://opentdb.com/api.php?amount=1&category=${categorie}&difficulty=${difficulte}&type=multiple`)
            .then((res) => {
                const question = res.data.results.map(question => {
                    return {
                        question: he.decode(question.question),
                        correct_answer: he.decode(question.correct_answer),
                        incorrect_answers: question.incorrect_answers.map((incorrectAnswer) => he.decode(incorrectAnswer)),
                    };
                });

                const answers = [...question[0].incorrect_answers, question[0].correct_answer];
                answers.sort(() => 0.5 - Math.random());

                setData([{ ...question[0], answers }]);
            });
    }, [categorie, difficulte]);

    function play(i) {
        const correct = document.querySelector('.correct');
        const incorrect = document.querySelectorAll('.incorrect');

        correct.classList.add('correctColor');
        correct.classList.remove('hover');
        incorrect.forEach(e => {
            e.classList.add('incorrectColor');
            e.classList.remove('hover');
        });
    }



    return (
        <div className='questions'>
            {data.map((item, index) => (
                <div key={index}>
                    <h2>{item.question}</h2>
                    <ul>
                        {item.answers.map((answer, i) => (
                            <li key={i}>
                                <p onClick={() => play(i)} className={answer === data[0].correct_answer ? 'correct hover' : 'incorrect hover'}>{answer}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Questions;
