import React from 'react';
import Answer from '../Answer/Answer';
import './QuizQuestions.css';

const QuizQuestions = ({ quizQuestion }) => {
    console.log(quizQuestion)
    const { question, options } = quizQuestion;
    return (
        <div className='question-section'>
            <h2>{question}</h2>
            {
                options.map((option, idx) => <Answer
                key={idx}
                option={option}
                ></Answer>)
            }
        </div>
    );
};

export default QuizQuestions;