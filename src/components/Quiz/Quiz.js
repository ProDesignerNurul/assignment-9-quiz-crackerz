import React from 'react';
import './Quiz.css';

const Quiz = ({quiz}) => {
    const {name, logo} = quiz;
    return (
        <div className='quiz'>
            <button>Start Quiz</button>
            <h2>{name}</h2>
            <img src={logo} alt="Loading" />
        </div>
    );
};

export default Quiz;