import React, { useEffect, useState } from 'react';
import axios from 'axios';
import he from 'he';

const Questions = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://opentdb.com/api.php?amount=1&type=multiple')
            .then((res) => {
                const questions = res.data.results.map(question => he.decode(question.question));
                setData(questions);
            });
    }, []);

    return (
        <ul className='questions'>
            {data.map((question, index) => (
                <li key={index}>{question}</li>
            ))}
        </ul>
    );
};

export default Questions;
