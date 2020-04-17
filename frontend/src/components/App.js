import React ,{Component,Fragment} from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import { Provider } from 'react-redux';
import store from '../store.js';
import { Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Alerts from './layout/Alerts';


//alert options
const alertOptions ={
timeout :3000,
position: 'top center'
};



function App(){
            return (
                <Provider store={store}>
                    <AlertProvider template ={AlertTemplate} {...alertOptions}>
                        <Fragment>
                        <Header />
                        <Alerts />
                        
                        <div className="container">
                            <Dashboard />
                        </div>
                        
                    </Fragment>
                    </AlertProvider>
                </Provider>
            );
        }


ReactDOM.render(<App />,document.getElementById('app'));