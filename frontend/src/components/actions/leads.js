import axios from 'axios';
import {GET_LEADS,DELETE_LEAD,ADD_LEAD,GET_ERRORS} from './types';

//GETLEADS

export const getLeads = () => dispatch => {
    axios
    .get("/leads/api/leads/")
        .then(res =>{
            dispatch({
                type:GET_LEADS,
                payload:res.data
             });
        }).catch(err => console.log(err));
}

//Deleteleads
export const deleteLead = id => dispatch => {
    axios
    .delete(`/leads/api/leads/${id}/`)
        .then(res =>{
            dispatch({
                type:DELETE_LEAD,
                payload:id
             });
        }).catch(err => console.log(err));
}

//addleads
export const addLead = (lead) => dispatch => {
    axios
    .post("/leads/api/leads/", lead)
        .then(res =>{
            dispatch({
                type:ADD_LEAD,
                payload:res.data
             });
        }).catch(err => {
            const errors ={
                msg:err.response.data,
                status:err.response.status
            };
            dispatch({
                type:GET_ERRORS,
                payload:errors

            });
        });
}

