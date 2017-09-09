import ReactDOM from 'react-dom'
import React from 'react'



// Approach - 1 <h1> Hello React Js </h1> - it is a JSX (JavaScript XML)
//ReactDOM.render(<h1>Hello React JS - Brain Mentors Pvt Ltd </h1>,document.getElementById("root"));


// Approach - 2
//const jsx = <h1>Hello React JS </h1>;
//ReactDOM.render(jsx,document.getElementById("root"));

// Approach - 3

//const element = React.createElement("h1",null,"Hello ReactJS");

//ReactDOM.render(element,document.querySelector("#root"));



// Using PlaceHolder in ReactJS
/*const companyName = "Brain Mentors Pvt Ltd";
const jsx =<h1>Hello React JS {companyName} </h1>;
ReactDOM.render(jsx,document.querySelector("#root"));*/


// Using Events in ReactJS
let name = "amit srivastava";
const initCap = ()=>{
    console.log("Inside InitCap ",name);
    const names = name.split(" ");
    name = "";
    for(let n of names){
    name += n.charAt(0).toUpperCase() + n.substring(1).toLowerCase() + " ";
    }
    // To Update the Value , and it will only update the name things only on runtime, see the inspect
    // Now this code is unstructure we need to use classes or function constructor to solve this problem
    const jsx = (<div>
    <h1>Hello ReactJS {name} and {100+200}</h1>
    <button onClick={initCap}>InitCap</button>
    </div>);  // Use () for MultiLine, Event Name use in camelCase , dynamic content must be in {}
ReactDOM.render(jsx,document.querySelector("#root"));

}

const jsx = (<div>
    <h1>Hello ReactJS {name}</h1>
    <button onClick={initCap}>InitCap</button>
    </div>);  // Use () for MultiLine, Event Name use in camelCase , dynamic content must be in {}
ReactDOM.render(jsx,document.querySelector("#root"));
