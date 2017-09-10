import React from 'react'
class Child extends React.Component{
    render(){
        return(
            <div>
                <h1>I am a Child Component and Parent Value is {this.props.myDataProp} and Method is </h1>
                <input type="text" placeholder="Type in Child Text Box " onChange={this.props.myMethodProp}/>
                <p>Trigger Value is {this.props.myChildProp}</p>
            </div>    
        )
    }
}
export default Child;