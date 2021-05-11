import React from 'react';
import { Component } from 'react';
import './index.css';
import Header from './component/Header';
import Routes from './component/Routes';
import { BrowserRouter as Router} from 'react-router-dom';

 class App extends Component {

        state = { }
        render() {
          return (
            <Router>
        <Header/>
        <div className="row">
            <Routes />
        </div>
    </Router>
        );
        }
        }        
 export default (App);




 