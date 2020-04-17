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
}
if(message!==message.message){
    if(message.LEAD_DELETED) alert.success(message.LEAD_DELETED);
    if(message.LEAD_ADDED) alert.success(message.LEAD_ADDED);
    
}
},[err,message]);
return(
<Fragment/>
)
}
export default Alerts;
