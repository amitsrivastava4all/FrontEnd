import React from 'react';
const MobileComponent= (props)=>{
    console.log("MOBILE COMP CALL ",props);
    if(!props.mobiles.mobiles){
        return (
            <div>
                <h1>Mobile Details are </h1>
                </div>
        );
    }
    return(
        <div>
             <h1>Mobile Details are :::: </h1>
            {props.mobiles.mobiles.map((mobile,index)=>{
                return <li key={index}> {mobile.name} &nbsp; {mobile.price} </li>;
            })} 
         </div>   
    );
}
export default MobileComponent;
