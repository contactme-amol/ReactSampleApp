import React, { Component, useState } from 'react';
import Person from './Person.css';

const person = (props) => {

    return (
        <div className="Person">
            <p> My name is - {props.name} </p>
            <p> My mobile number - {props.mobile} </p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    );

}

export default person;