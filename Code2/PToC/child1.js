import React from 'react';
class Child1 extends React.Component{
    constructor(){
        super();
        this.fillText = this.fillText.bind(this);
    }
    fillText(event){
        var str = event.target.value;
        //this.childFn(str);
    }

    childFn(){
        var str = this.refs.txt.value;
        this.props.fn(str);

    }
    render(){
        return(
              <div>
              This is Child Component {this.props.name}
              <input ref='txt' type='text' onChange={this.fillText} placeholder='Type Last Name'/>
              <button onClick={this.childFn.bind(this)}>Click Me </button>
              </div>  
        );
    }

}
export default Child1;