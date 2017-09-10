import React from 'react'
import ReactDOM from 'react-dom'
import Child from './Child.js'
import List from './List.js'
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={pdata:'',pdate:''};
  }
  showParentData(){
    this.setState({pdata:this.refs.mytxt.value});
   
  }
  updateValue(){
    var d = new Date();
    this.setState({pdate:JSON.stringify(d)});
    console.log("Update Value ",this.state.pdate);

  }
  render(){
    return (
      <div>
        <h1>Parent Child Component Example</h1>
        <input type='text' onChange={this.showParentData.bind(this)} placeholder='Type Some Value' ref="mytxt"/>
        <p>Parent Data is {this.state.pdata}</p>
        <hr/>
        <Child myChildProp={this.state.pdate} myDataProp={this.state.pdata} myMethodProp={this.updateValue.bind(this)}/>
        <br/>
        <br/><br/><br/>
        <hr/>
        <h1>List Example</h1>
        <List/>
      </div>  
    )
  }
}
export default App;