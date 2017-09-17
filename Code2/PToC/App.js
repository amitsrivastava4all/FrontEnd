import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child1 from './child1.js';

class App extends Component {
  constructor(){
    super();
    this.state={
      name:'Ram',
      lastName:''
    }
  }
  collectDataFromChild(childStr){
    this.setState({lastName:childStr});
  }
  render() {
    return (
        <div>
        <h1>RelationShip Example </h1>
        <h2>First Name is {this.state.name} and Last name is {this.state.lastName} </h2>
        <Child1 name={this.state.name} fn={this.collectDataFromChild.bind(this)} /> 
        </div>
    );
  }
}

export default App;
