import {combineReducers} from 'redux';
import leads from './leads';
import errors from './errors';
import message from './message';
 
export default combineReducers({
    leadReducer:leads,
    errorReducer:errors,
    messageReducer:message
});