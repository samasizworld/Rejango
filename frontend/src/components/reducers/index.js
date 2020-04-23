import {combineReducers} from 'redux';
import leads from './leads';
import errors from './errors';
import message from './message';
import auth from './auth';
 
export default combineReducers({
    leadReducer:leads,
    errorReducer:errors,
    messageReducer:message,
    authReducer:auth
});