import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestions from '../QuizQuestions/QuizQuestions';

const QuizDetails = () => {
    const quizDetails = useLoaderData();
    // const {question} = quizDetails.data.questions;
    // console.log(quizDetails.data.questions)
    return (
        <div>
            
        </div>
    );
};

export default QuizDetails;