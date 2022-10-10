import React from 'react';
import { useRouteLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const quizes = useRouteLoaderData();
    return (
        <div>
            <h2>This is Quizes Page</h2>
            
        </div>
    );
};

export default Quizes;