import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {useSelector} from 'react-redux';

 const PrivateRoute =({component:Component, ...rest})=> {
    const authprops =useSelector(state=>state.authReducer);
    return (
    <Route
    {... rest}
    render={props=>{
        if(authprops.isLoading){
            return <h2>Loading...</h2>
        }
        else if(!authprops.isAuthenticated){
            return <Redirect to ="/login" />;

        }
        else {
        return <Component {... props} />;}
    }}
    />
    );
}

export  default PrivateRoute;


