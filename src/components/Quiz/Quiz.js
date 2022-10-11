import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';


const Quiz = ({quiz}) => {
    const {id, name, logo} = quiz;
    return (
        <div className='quiz'>
            <Link to={`/quizes/${id}`}><button>Click To Start Quiz</button></Link>
            <h2>{name}</h2>
            <img src={logo} alt="Loading" />
        </div>
    );
};

export default Quiz;