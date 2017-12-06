import {createStore} from 'redux';
import calcreducer from '../reducer/calcreducer';
const store = createStore(calcreducer);
export default store;