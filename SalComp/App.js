import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Compute from './Compute.js';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      salary : 0
    };
  }

  updateSalary(){
    this.setState({salary:this.refs.salarytxt.value});
  }

  render() {
    return (
      <div>
        <h1> Salary Calc App </h1>
        <input onChange={this.updateSalary.bind(this)} type='text' ref='salarytxt' placeholder='Type Salary'/>
        <p>Salary is {this.state.salary}</p>
       
        <hr/>
        <Compute sal={this.state.salary} />
      </div>
    );
  }
}

export default App;
