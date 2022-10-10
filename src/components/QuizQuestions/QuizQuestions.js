import React from 'react';
import './QuizQuestions.css';

const QuizQuestions = ({quizQuestion}) => {
    console.log(quizQuestion)
    const {question, options} = quizQuestion;
    return (
        <div className='question-section'>
            <h2>Questions : {question}</h2>
            <h3 className='answore'>Answore : {options}</h3>
        </div>
    );
};

export default QuizQuestions;