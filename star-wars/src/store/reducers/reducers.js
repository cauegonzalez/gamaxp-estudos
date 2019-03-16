import {combineReducers} from 'redux';
import pessoasReducers from './pessoasReducers';

const Reducers = () => {
    return combineReducers({ 
        pessoasReducers 
    });
}

export default Reducers;