import React, { Component, Fragment } from 'react';
import { Link ,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../actions/auth';

class Login extends Component {
    state ={
        username:'',
        password:''
    };

    static propTypes ={
        isAuthenticated:PropTypes.bool,
        login:PropTypes.func.isRequired

    };

    onSubmit = e=>{
        e.preventDefault();
        const {username ,password }= this.state;
        const loginObject ={username,password};
        this.props.login(loginObject);
    }

    onChange =e=> this.setState({[e.target.name]:e.target.value});
    
    render() {
        if(this.props.isAuthenticated){
            return <Redirect to ="/" />;
        };
        const {username,password}=this.state
        return (
            <div className="col-md-6 m-auto">
            <div className="card card-body mt-5">
                <h2 className="text-center">Login</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                         className="form-control"
                         type="text"
                         name="username"
                         value={username}
                         onChange={this.onChange}/>
                         </div>
                   
                    <div className="form-group">
                        <label>Password</label>
                        <input
                         className="form-control"
                         type="password"
                         name="password"
                         value={password}
                         onChange={this.onChange}/>
                         </div> 
                         
                    <div className="form-group">
                        <button
                        type="submit"
                        className="btn btn-primary">Login</button>
                        </div>    
                    <p>Don't have an account?? <Link to ="/register">Register</Link></p>
                </form>

            </div>
        </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated:state.authReducer.isAuthenticated
});

export default connect(mapStateToProps,{login})(Login);
