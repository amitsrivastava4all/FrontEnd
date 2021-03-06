import React,{Component} from 'react';
import store from '../store/store';
export default class CalcInput extends Component{
   
    doOperation(operName){
        store.dispatch({type:operName,
            payload:
            {
                firstNumber:this.refs.firstNumber.value,
                secondNumber:this.refs.secondNumber.value
            }});  
    }  
    render(){
        return (
            <div>
                <input type="text" ref="firstNumber" placeholder="Type First Number Here"/>
                <input type="text" ref="secondNumber" placeholder="Type Second Number Here"/>
                <button onClick={this.doOperation.bind(this,'Add')}>Add</button>
                <button onClick={this.doOperation.bind(this,'Subtract')}>Subtract</button>
            </div>     
        );
    }
}