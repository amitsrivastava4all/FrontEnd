import React from 'react';
class SalaryInput extends React.Component{
    render(){
        return (
            <div>
            <input type='text' ref='salary' onChange={this.props.fillSal} placeholder='Type Salary'/>
            <button onClick={this.props.action}>Compute Salary</button>
            </div>
        );
    }
}
export default SalaryInput;