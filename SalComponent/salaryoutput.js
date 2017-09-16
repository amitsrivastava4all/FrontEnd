import React from 'react';
class SalaryOutput extends React.Component{
    render(){
        return(
            <div>
            <fieldset>
            <legend>
            Salary Details are
            </legend>
            
            Salary is {this.props.logicObject.salary} 
            <br/>
            HRA is {this.props.logicObject.hra}
            <br/>
            DA is {this.props.logicObject.da}
            <br/>
            TA is {this.props.logicObject.ta}
            <br/>
            Gross Salary is {this.props.logicObject.gs}
            <br/>
            Net Salary is {this.props.logicObject.ns}
            </fieldset>
            </div>
        )
    
    }
}
export default SalaryOutput;