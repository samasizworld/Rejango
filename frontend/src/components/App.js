import React ,{Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
    render(){
        return <h1>First app implemeted using react and django</h1>
    }
}


ReactDOM.render(<App />,document.getElementById('app'));