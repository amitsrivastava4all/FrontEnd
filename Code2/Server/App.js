import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Request from 'superagent';
import axios from 'axios';
import $ from 'jquery';
class App extends Component {
  constructor(){
    super();
    this.counter = 0;
    this.state={
      mobiles:[],count:0
    }
  }
  render() {
   // console.log('Mobiles ',this.state.mobiles);
     // console.log('Now Mobile Array ',this.state.mobiles.mobiles);
    return (
      <div>
      <h1>Ajax Call Using SuperAgent/Axios Count is {this.state.count}</h1> 
      
      <ul>
      {this.state.mobiles.map(function(mobile,index){
        return (<li key={index}> {mobile.id} {mobile.name} {mobile.image} <img src={mobile.image}/></li>);
      })}
      </ul>
      </div>
    );
  }
  componentWillMount() {
    //$.ajax();

    console.log('Call the first time the component is loaded before the component is added to the page');
    var url = "https://raw.githubusercontent.com/brainmentorspvtltd/hmr/master/mobile.json";
    Request.get(url).then((response)=>{
      console.log('server response.....',response);
      this.setState({
        mobiles: JSON.parse(response.text).mobiles
      });
    });
 /*   axios.get(url)
  .then(function (response) {
    console.log("axios ",response);
  })
  .catch(function (error) {
    console.log("axios ",error);
  });*/
    }

   componentDidMount() {
     setInterval(()=>{
       this.counter++;
        this.setState({
          count: this.counter
        });
     },1000);
      console.log('Called after the component has been rendered into the page');
   }

   componentWillReceiveProps(newProps) {    
      console.log('Called wheen the props provided to the component is changed')
   }

   

   componentWillUpdate(nextProps, nextState) {
      console.log('called when the props or state is updated...');
   }

   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }

   componentWillUnmount() {
      console.log('Component is removed')
   }
}

export default App;
