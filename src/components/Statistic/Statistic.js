import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Statistic = () => {
const [quizes, setQuizes] = useState([]);
useEffect(() => {
    axios.get('https://openapi.programming-hero.com/api/quiz')
    .then(data => {
        const quizLoaded = data.data.data;
        const quizData = quizLoaded.map( quiz => {
            const singleQuiz = {
                name: quiz.name,
                total: quiz.total,
            }
            return singleQuiz;
        })
        console.log(quizLoaded)
        setQuizes(quizData);
    })
}, [])
    return (
        <div>
            <h2>this is Statistic page</h2>
        </div>
    );
};

export default Statistic;