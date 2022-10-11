import React from 'react';
import './Answer.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Answer = ({ option, correctAnswer }) => {
    if(correctAnswer){
        console.log('correct')
    }
    else{
        console.log('incorect')
    }
    const notify = () => toast("Wow so easy!");
    console.log(option)
    return (
        <div className='border rounded p-1 m-2 bg-secondary text-white'>
            {
                correctAnswer ? 'corect' : 'incorect'
            }
            <button onClick={notify}>
                <label htmlFor="">
                    <input type="radio" name="answer" id="" value={option} /> {option}
                </label>
            </button>
            <ToastContainer />

        </div>
    );
};

export default Answer;