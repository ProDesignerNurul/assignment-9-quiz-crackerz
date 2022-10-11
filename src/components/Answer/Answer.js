import React from 'react';

const Answer = ({option}) => {
    console.log(option)
    return (
        <div>
            <h2><input type="radio" name=""  id="" /> {option}</h2>
        </div>
    );
};

export default Answer;