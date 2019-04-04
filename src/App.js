import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const app = () => {

  const [personState, setPersonState] = useState({

    personItems: [{name: "Amol", mobile: 7058215810}, 
    {name: "Ujwala", mobile: 7875215810}, 
    {name: "Shreya", mobile: 7058215810}, 
    {name: "Amol", mobile: 7058215810}]            
});

const onClickedSwitchButton = () => {
  setPersonState({
    personItems: [{name: "Amol Chaudhari", mobile: 7058215810}, 
    {name: "Ujwala Chaudhari", mobile: 7875215810}, 
    {name: "Shreya Chaudhari", mobile: 7058215810}, 
    {name: "Amol Chaudhari", mobile: 7058215810}]            
});
}

const onChangeName

  return (
        <div>
          <h1> Amol Chaudhari </h1>
          <p> {personState.personItems[0].name}</p>
          <button onClick={onClickedSwitchButton}>click me</button>
          
          <Person name={personState.personItems[0].name} age={personState.personItems[0].mobile} changed={}/>
          <Person name={personState.personItems[1].name} age={personState.personItems[1].mobile} on/>
          <Person name={personState.personItems[2].name} age={personState.personItems[2].mobile} />
        </div>
    );

  }

export default app;
