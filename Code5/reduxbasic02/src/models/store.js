import {createStore, combineReducers} from 'redux';
import mobilereducer from './mobilereducer.js';
import ledreducer from './ledreducer.js';
 const store = createStore(combineReducers({"mobileskey":mobilereducer,"ledkeys":ledreducer}));
//const store = createStore(reducerName);
store.subscribe(()=>{
    console.log("State Change ",store.getState());
});
export default store;
