import React ,{Fragment} from 'react';
import {useEffect} from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import { Provider } from 'react-redux';
import store from '../store.js';
import { Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Alerts from './layout/Alerts';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Login from '../components/accounts/Login';
import Register from '../components/accounts/Register';
import PrivateRoute from './common/PrivateRoute';
import {loadUser} from '../components/actions/auth';

//alert options
const alertOptions ={
timeout :3000,
position: 'top center'
};



function App(){

    useEffect(()=>{store.dispatch(loadUser())},[]);
            return (
                <Provider store={store}>
                    <AlertProvider template ={AlertTemplate} {...alertOptions}>
                        <Router>
                        <Fragment>
                        <Header />
                        <Alerts />
                        
                        <Switch>
                            <PrivateRoute exact path="/" component={Dashboard} />
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/login" component={Login} />
                        </Switch>
                        
                    </Fragment>
                    </Router>
                     </AlertProvider>
                </Provider>
            );
        }


ReactDOM.render(<App />,document.getElementById('app'));