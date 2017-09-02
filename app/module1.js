const calcObject = {
    add(x,y){
        return x + y;
    },
    subtract(x,y){
        return x - y;
    }
}

function show(){
    console.log("this is show");
}

const MAX = 1000;
//export default calcObject;
export {calcObject,MAX};

