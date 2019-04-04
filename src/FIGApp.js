import React, { Component, setState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import { timingSafeEqual } from 'crypto';

class FIGApp extends Component {

  state = {

    personItems: [{name: "Amol", mobile: 7058215810}, 
    {name: "Ujwala", mobile: 7875215810}, 
    {name: "Shreya", mobile: 7058215810}, 
    {name: "Amol", mobile: 7058215810}]            
}

onClickedSwitchButton = () => {
  this.setState({
    personItems: [{name: "Amol Chaudhari", mobile: 7058215810}, 
    {name: "Ujwala Chaudhari", mobile: 7875215810}, 
    {name: "Shreya Chaudhari", mobile: 7058215810}, 
    {name: "Amol Chaudhari", mobile: 7058215810}]            
});
}

onChangeName = (event) => {
    this.setState({
        personItems: [{name: event.target.value, mobile: 7058215810}, 
        {name: "Ujwala Chaudhari", mobile: 7875215810}, 
        {name: "Shreya Chaudhari", mobile: 7058215810}, 
        {name: "Amol Chaudhari", mobile: 7058215810}]            
    });
}

render() {
    let values = this.state.personItems
    return (
        <div className="App">
          <h1> Amol Chaudhari </h1>
          <p> {this.state.personItems[0].name}</p>
          <button onClick={this.onClickedSwitchButton}>click me</button>
          
          <Person name={values[0].name} age={values[0].mobile} changed={this.onChangeName}/>
          <Person name={values[1].name} age={values[1].mobile} on/>
          <Person name={values[2].name} age={values[2].mobile} />
        </div>
    );
}
  

  }

export default FIGApp;
