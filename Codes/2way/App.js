import React from 'react';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      message:'This is the Default Text in TextBox'
    };
    console.log("Inside Constructor ",this.state);
  }
  doChanges(event){
    var txtValue = event.target.value;
    this.setState({
      message:txtValue
    });
  }
  doChanges2(){
    // this.refs give the reference of the html element 
    this.setState({message2:this.refs.mytxt.value});
  }
  render() {
    return (
      <div>
      <h1>Two Way Data Binding Example</h1> 
      <input type='text' onChange={this.doChanges.bind(this)} size='50' placeholder='Type Data Here' value={this.state.message}/>
      <h1>{this.state.message}</h1>
      <h2>Another Way of 2way Data Binding Example</h2>
      <input type='text' ref="mytxt" placeholder="Use of ref demo " onChange={this.doChanges2.bind(this)}/>
     <p>Value is {this.state.message2} </p>
      </div>
    );
  }
}

export default App;
