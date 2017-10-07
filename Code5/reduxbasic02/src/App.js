import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MobileComponent from './components/mobilecomponent.js';
import LedComponent from './components/ledcomponent.js';
import {connect} from 'react-redux';
class App extends Component {
  render() {
    return (
     <div>
       <h1>Multiple reducer and all in seperate JS </h1>
      <button onClick={()=>{console.log("Server Call ",this.props.callMobile);this.props.callMobile()}}>Get Mobile Data </button>
      <button onClick={()=>{this.props.callLed()}}>Get Led Data </button>
      <MobileComponent mobiles={this.props.mobiles} />
      <LedComponent leds ={this.props.leds} /> 
      </div> 
    );
  }
}

//Reducer Data Mapping to Props (Rec)
const mapStateToProps=(reduxstate)=>{
  return{
    mobiles:reduxstate.mobileskey,  // Mapping redux states with props and pass these props to the child component
    leds:reduxstate.ledkeys
  }
}
// Action Mapping to Props (Sending)
const mapDispatchToProps = (dispatch)=>{
  return{
      callMobile:()=>{
        dispatch({
          type:"SHOW",
          payload:{}
        })
      },
      callLed:()=>{
         dispatch({
          type:"DISPLAY",
          payload:{}
        })
      }
};

}
export default connect(mapStateToProps,mapDispatchToProps)(App);
//export default App;
