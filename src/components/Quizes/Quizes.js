import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Quizes.css';


const Quizes = () => {
    const quizes = useLoaderData();
    console.log(quizes)
    return (
        <div>
            <h2>This is Quizes Page {quizes.length}</h2>
            <div className="quizes">
                {
                    quizes.data.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}
                    ></Quiz>)
                }
            </div>
        </div>
    );
};

export default Quizes;