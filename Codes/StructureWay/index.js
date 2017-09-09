import ReactDOM from 'react-dom'
import React from 'react'
import './custom.css'
//Structure Code and Passing Value using props
//let name = 'amit srivastava';
// Approach - 1 ES 5 Style Function Constructor
//<Sum firstNo ="10" secondNo="20"/>
function App(props){
    return (
        <div>
        <h1>Hello ReactJS ES5 Style {props.name}</h1>
        <button>InitCap</button>
        </div>
    );
}
ReactDOM.render(<App name='amit srivastava'/>
,document.querySelector("#root"));



// Approach -2 ES6 Class Style
class App extends React.Component{
    
    render(){
        return (
            <div>
                 <h1>Hello ReactJS ES6 Style {this.props.name}</h1>
                    <button>InitCap</button>
            </div>    
        )
    }
}

ReactDOM.render(<App name='amit srivastava'/>,document.querySelector("#root"));


// Using props (Outside Data) and state (Inside Data)
class App extends React.Component{
    constructor(props){
        super(props);
        console.log("Cons Call ",props.name);
        this.state = {
            finalName:props.name
        }

    }

    initCap(){
       
        var capName = "";
        let fullName = this.state.finalName;
        let names = fullName.split(" ");
        for(let n of names){
           capName+= n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()+" ";
        }
        // setState tell to the react something is get change , so call render automatically to print the changes
       // it use virtual DOM Concept, it will not change the whole thing it only change the specific portion which need to be change
        this.setState({
            finalName:capName
        });
    }
    render(){
        var myStyle={
            backgroundColor:'red'
        };
        var myclass = 'mystyle';
        // this.initCap.bind(this) , bind initCap with Class this , because every function has own this
        return (
            <div>
                <p className="mystyle">Static Way </p>
                <p className={myclass}>Class Example</p>
                 <h1 style={myStyle}>Hello ReactJS ES6 Style {this.state.finalName}</h1>
            <button onClick={this.initCap.bind(this)}>InitCap</button>
            </div>    
        );
    }
}

ReactDOM.render(<App name='amit srivastava'/>,document.querySelector("#root"));