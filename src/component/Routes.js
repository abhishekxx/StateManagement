import {Component} from 'react';
import {Switch} from 'react-router';
import {Route} from 'react-router-dom';
import GetEmployees from './GetEmployees';
import AddEmployee from './AddEmployee';
import EditEmployee from './EditEmploye';

class Routes extends Component {
    render() { 
        return (  
            <Switch>
                <Route path={'/'} exact component={ GetEmployees } ></Route>
                <Route path={'/addemployee'} exact component={ AddEmployee }></Route>
                <Route path={'/editemployee'} exact component={ EditEmployee }></Route>
            </Switch>
        ); 
    }
} 

export default Routes;