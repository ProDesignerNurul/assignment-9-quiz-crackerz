import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Answer from '../Answer/Answer';
import './QuizQuestions.css';

const QuizQuestions = ({ quizQuestion }) => {
    const [open, setOpen] = useState(true);
    console.log(quizQuestion)
    const { question, options, correctAnswer } = quizQuestion;

    const handleAnswer = (correct) => {
        if (correct === correctAnswer) {
            toast.success('Very Good. Correct Answer!!!', { autoClose: 500 })
        }
        else {
            toast.warning('So Sad. Wrong Answer!!!', { autoClose: 500 })
        }
    }


    return (
        <div>
            <div>

            </div>
            <div className='question-section'>
                <h2>{question}</h2>
                {
                    options.map((option, idx) => <Answer
                        key={idx}
                        option={option}
                        handleAnswer={handleAnswer}
                    ></Answer>)
                }
            </div>
        </div>
    );
};

export default QuizQuestions;