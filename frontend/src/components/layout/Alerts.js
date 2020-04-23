import React, { Fragment,useEffect } from "react";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";
const Alerts =() =>{
const alert = useAlert();
const err = useSelector(state=>state.errorReducer);
const message =useSelector(state=>state.messageReducer);
useEffect(()=>{
if(err !== err.err){
    if(err.msg.name) alert.error(`NAME:${err.msg.name.join()}`);
    if(err.msg.email) alert.error(`EMAIL:${err.msg.email.join()}`);
    if(err.msg.message) alert.error(`MESSAGE:${err.msg.message.join()}`);
    if(err.msg.non_field_errors) alert.error(err.msg.non_field_error.join());
    if(err.msg.username) alert.error(`USERNAME:${err.msg.username.join()}`);
    if(err.msg.password) alert.error(`PASSWORD:${err.msg.password.join()}`)
}
if(message!==message.message){
    if(message.LEAD_DELETED) alert.success(message.LEAD_DELETED);
    if(message.LEAD_ADDED) alert.success(message.LEAD_ADDED);
    if(message.passwordNotMatch) alert.error(message.passwordNotMatch);
    
}
},[err,message]);
return(
<Fragment/>
)
}
export default Alerts;
