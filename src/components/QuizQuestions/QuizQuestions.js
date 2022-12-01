import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Answer from '../Answer/Answer';
import './QuizQuestions.css';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'

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
        <div className='question-section'>
            <div>
                <div onClick={() => setOpen(!open)} className='h-1 w-1 text-black correct-icon' >
                    {open ? <EyeIcon /> : <EyeSlashIcon></EyeSlashIcon>}
                </div>
                <div className={open ? 'hidden' : 'block'}>
                    <h1 className='text-xl py-2 bg-white px-2 rounded-sm my-5'>
                        <span className='text-red-500 text-2xl'>Correct Ans : </span>
                        {correctAnswer}
                    </h1>

                </div>
                <h2>{question}</h2>
                {/* maping  */}
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