
 const mobilereducer = (state={"mobiles":[]},action)=>{
switch(action.type){
    case "SHOW":
    // Call Ajax
    state = {
        mobiles:[{id:1001,name:'Samsung',price:10000},
        {id:1002,name:'Apple',price:40000}]
    }
    break;
}
return state;
}
export default mobilereducer;