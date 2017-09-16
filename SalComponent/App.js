import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Logic from './logic.js';
import SalaryInput from './salaryinput.js';
import SalaryOutput from './salaryoutput.js'
class App extends Component {
  constructor(props){
    super(props);
    let logic = new Logic(0,0);
    this.state={
      salary:0,
      
      pf:1000,
      computed:logic
      
    }

    // BINDING EVENTS
    this.fillSalary = this.fillSalary.bind(this);
    
      
    
  }
 
  fillSalary(event){
    //this.updateSalary();
    console.log("Fill Salary is ",event.target.value);
    this.setState({
      salary:event.target.value
    });

  }

  updateSalary(){
    
      let salary = this.state.salary;
      console.log("Update Called , Salary is "+salary);
      this.setState({
        salary:salary
      });
      let logic = new Logic(salary,this.state.pf);
      this.setState({
        computed:logic
      });
      console.log("Now Logic is ",logic);
      /*console.log(logic.hra());
      console.log(logic.ta());
      console.log(logic.da());
      console.log(logic.netSalary());*/
  }
  render() {
    return (
     <div>
     <h1>Salary Calculator</h1>
     <SalaryInput action={this.updateSalary.bind(this)} fillSal = {this.fillSalary}/>
     <SalaryOutput logicObject={this.state.computed}/>
     </div>
    );
  }
}

export default App;
