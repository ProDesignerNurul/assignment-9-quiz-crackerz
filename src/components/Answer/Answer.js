import React from 'react';
import './Answer.css';

const Answer = ({ option }) => {
    console.log(option)
    return (
        <div className='border rounded p-1 m-2 bg-secondary text-white'>
            <h2> <label htmlFor="">
                <input type="radio" name="answer" id="" value={option} /> {option}
            </label></h2>
        </div>
    );
};

export default Answer;