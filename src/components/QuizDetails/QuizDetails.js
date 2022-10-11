import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestions from '../QuizQuestions/QuizQuestions';
import './QuizDetails.css';

const QuizDetails = () => {
    const quizDetails = useLoaderData();
    // const {id, } = quizDetails.data.questions
    // const {question} = quizDetails.data.questions;
    console.log(quizDetails.data.questions[1].options)
    return (
        <div>
            <h2>Start Your Question Quiz Prectice</h2>
            <div className='quiz-details'>
                {
                    quizDetails.data.questions.map(quizQuestion => <QuizQuestions
                        key={quizDetails.data.questions.id}
                        quizQuestion={quizQuestion}
                    ></QuizQuestions>)
                }
            </div>
        </div>
    );
};

export default QuizDetails;