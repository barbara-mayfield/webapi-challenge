import { combineReducers } from 'redux';
import projectReducer from './projectReducer';
import actionReducer from './actionReducer';

export default combineReducers({
    projectReducer,
    actionReducer
})