import React from 'react';

import  './index.css';
import Header from './components/common/header.js';
import Footer from './components/common/footer.js';
import Nav from './components/common/nav.js';
function App(){
let name = "Amit";
let myNewStyle = {
    backgroundColor:'yellow',
    color:'red'
};
var salary = 9000;
let myclass = '';
if(salary>9000){
myclass = 'mystyle';
}
else{
myclass = 'style2';    
}
var jsx = <div><Header/><hr/><Nav/><h1 style={myNewStyle}>Hello ReactJS {name}and Style is {myNewStyle.backgroundColor}  </h1> <p className={myclass}>Hi</p><Footer/></div>;
return jsx;
}
export default App;