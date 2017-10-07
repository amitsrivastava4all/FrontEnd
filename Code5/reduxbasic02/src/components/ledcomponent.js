import React from 'react';
const LedComponent= (props)=>{
    if(!props.leds.leds){
        return (
            <div>
                <h1>Led Details are </h1>
                </div>
        );
    }
    return(
        <div>
            <h1>Led Details are ::: </h1>
          {props.leds.leds.map((led,index)=>{
                return <li key={index}> {led.name} &nbsp; {led.price} </li>;
            })}

         </div>   
    );
}
export default LedComponent;
