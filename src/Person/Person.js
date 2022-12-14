import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I am a {props.name} and I am {props.age} Years!</p>
            <p><i>{props.children}</i></p>
            <input type="text" onChange={props.changed} />
        </div>
    
    )
}

export default person;