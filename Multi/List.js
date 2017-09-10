import React from 'react'
//import ShowRecord from './ShowRecord.js'
class List extends React.Component{
    constructor(props){
        super(props);
        let prodData=[{"id":3,"name":"Samsung ","price":30000,"shipping":"India",
        "vendor":"Samsung Stores","inStock":"Y",
        "image":"http://images.buyingiq.com/p/1/1875760/10110576-samsung-galaxy-s6-gold-platinum-32-gb-picture-big.jpg"},
        {"id":2,"name":"Nokia ","price":10000,"shipping":"India",
        "vendor":"Nokia Stores","inStock":"N",
        "image":"http://cdn-a2.buildabazaar.com/img/othe/5501214/75/86/nokialumia630dualsimyellow.jpg.784cf17586.999x200x200.jpg"},
        {"id":1,"name":"Apple 5s","price":20000,"shipping":"China",
        "vendor":"Apple Stores","inStock":"Y",
        "image":"https://assets.ec.quoracdn.net/main-thumb-t-965-200-eskvgzdvwmrcnhylzyjaqfmpsjlrazhl.jpeg"}];
        this.state={
            productData:prodData
        };
    }
    render(){
        console.log("Render is Call LIST :: ",this.state.productData);
        return (
            <div>
                <h1>RealTime Example of Parent Child Component</h1>
                {this.state.productData.map((prodObject,index)=>{
                   // return <p key={index}>PRODUCT ::: {prodObject.id} &nbsp;&nbsp; {prodObject.name}</p>
                //console.log("FOREACH ",prodObject);
               return <ShowRecord key={index} myRecord={prodObject}/>
            })}
             </div>   
        );
    }
}





// This is a Dumb Component , It only Recieve the Things by Using Props , it cannot have states
// this is also called as Read Only Component , IN Real time few are class Component and mostly are
// dumb(readonly) component
function ShowRecord(props){
        console.log("Show Records ",props);
        return (
        <div>
        Record :: {props.myRecord.name} Id is {props.myRecord.id} 
        </div>
     );  
    
}
export default List;