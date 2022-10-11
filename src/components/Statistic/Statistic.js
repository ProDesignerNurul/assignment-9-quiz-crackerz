import axios from 'axios';
import './Statistic.css';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';


const Statistic = () => {
    const [quizes, setQuizes] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/quiz')
            .then(data => {
                const quizLoaded = data.data.data;
                const quizData = quizLoaded.map(quiz => {
                    const singleQuiz = {
                        name: quiz.name,
                        total: quiz.total,
                    }
                    return singleQuiz;
                })
                // console.log(quizLoaded)
                setQuizes(quizData);
            })
    }, [])
    return (
        <div className='chart'>
            <BarChart width={500} height={300} data={quizes}>
                <Bar dataKey="total" fill="#8884d8" />
                <Tooltip></Tooltip>
                <XAxis datakey="name"></XAxis>
                <YAxis></YAxis>
            </BarChart>
        </div>
    );
};

export default Statistic;