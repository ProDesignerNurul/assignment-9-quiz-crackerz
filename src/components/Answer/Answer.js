import React from 'react';
import './Answer.css';


const Answer = ({ option, handleAnswer }) => {
    
    
    return (
        <div className='border rounded p-1 m-2 bg-secondary text-white'>
        
            <button onClick={() => handleAnswer(option)} >
                <label htmlFor="">
                    <input type="radio" name="answer" id="" value={option} /> {option}
                </label>
            </button>
            

        </div>
    );
};

export default Answer;