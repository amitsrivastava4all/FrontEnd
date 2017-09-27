import React, { Component } from 'react';
import logo from './logo.svg';

import {BrowserRouter as Router, Route,Link,NavLink} from 'react-router-dom';
import './App.css';

const Home=(props)=> {
console.log("Inside Home ",props); //props has match , location , history
return <div><h1>Home Page</h1></div>;
}
const About=(props)=> <div><h1>About Us {props.match.params.name} {props.match.params.job} {props.match.params.address}</h1></div>;
const Contact=()=> <div><h1>Contact Us</h1></div>;
const News=()=> <div><h1>News</h1></div>;


const Clothes=(props)=><div>Clothes Price is ::: {props.match.params.price}</div>;
const Shoes=(props)=><div>Shoes Price is ::: {props.match.params.price}</div>;


class Menu extends Component{
  render(){
    return(
      <div>
      <h1>Menu </h1>
      <Link to="/menu/clothes/12000" >Clothes</Link>&nbsp;&nbsp;
      <Link to="/menu/shoes/6000" >Shoes</Link>
      </div>
    );
  }
}
 
class App extends Component {
  /*
  NavLink remember the Status which link is active , visited, where Link is not
  */
  render() {
    var path = "/events?id=1111&firstname=Amit&lastname=Srivastava";
    return (
     <div>
     
     <h1>React SPA (Router 4.x)</h1>
     <Router >
   <div> 
    <ul>
   <li><Link to="/">Home</Link></li>

   <li><Link to="/about/Amit/Trainer/Delhi">About</Link></li>
   <li><Link to="/news">News</Link></li>
   <li><NavLink activeClassName="active"  to="/contact/">Contact Us</NavLink></li>
   <li><NavLink activeStyle={{color:'orange'}} to={path}>Events</NavLink></li>
   <li><Link to="/menu">Menu</Link></li>
 </ul>
       <Route exact path="/" component={Home}/> 
      <Route path="/about/:name/:job/:address?" component={About}/> 
       <Route strict path="/contact/" component={Contact}/> 
        <Route exact path="/news/" component={News}/> 
        <Route  path = {{pathname:{path},search:'id=1001&firstname=ram&lastname=kumar'}} render={(props)=>
        {
          console.log("Event Called ",props.location);
          return (<h1>Events {new URLSearchParams(props.location.search).get('id')}
          {new URLSearchParams(props.location.search).get('firstname')}
          {new URLSearchParams(props.location.search).get('lastname')}
          </h1>);
          } 
        }
          />
          <Route path="/menu" component  = {Menu}/>
          <Route path="/menu/clothes/:price" component  = {Clothes}/>
          <Route path="/menu/shoes/:price" component  = {Shoes}/>
       </div> 
     </Router>
     </div>
    );
  }
}

export default App;
