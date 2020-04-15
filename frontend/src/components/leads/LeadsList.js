import React, { Component } from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import {getLeads,deleteLead} from '../actions/leads'

class LeadsList extends Component {

    static propTypes={ 
        leads:propTypes.array.isRequired,
        getLeads:propTypes.func.isRequired,
        deleteLead:propTypes.func.isRequired


    };

    componentDidMount()
    {
        this.props.getLeads();
    }
    render() {
        return (
            <div>
                <h1>Lead List</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>Message</th>
                            <th/>
                        </tr>
                        
                        </thead> 
                        <tbody>
                            {this.props.leads.map(lead => (<tr key={lead.id} >
                            <td>{lead.id}</td>
                            <td>{lead.name}</td>
                            <td>{lead.email}</td>
                            <td>{lead.message}</td>
                            <td><button  onClick ={this.props.deleteLead.bind(this,lead.id)} className ="btn btn-danger btn-sm">
                             {" "}   Delete</button></td>
                            </tr>))}
                            </tbody>                  
                </table>
            </div>
        )
    }
}

const mapStateToProps =state => ({
    leads:state.leadReducer.leads
});

export default connect(mapStateToProps,{getLeads,deleteLead
})(LeadsList);
