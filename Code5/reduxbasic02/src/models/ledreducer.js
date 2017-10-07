
 const ledreducer = (state={"leds":[]},action)=>{
switch(action.type){
    case "DISPLAY":
    // Server Call , then state update
    
    state = {
        leds:[{id:1001,name:'Sony',price:100000},
        {id:1002,name:'Apple TV',price:400000}]
    }
    break;
}
return state;
}
export default ledreducer;