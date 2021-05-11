import {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    
                <Link to="/" className="navbar-brand" href="#"><h1>AusNep IT Solution</h1></Link>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink to="/" className="nav-link" href="#">  </NavLink>
                        </li>
 
                        <li className="nav-item">
                            <NavLink to="/addemployee" className="nav-link" href="#"> Add Employee </NavLink>
                        </li>  

                        <li className="nav-item">
                            <NavLink to="/editemployee" className="nav-link" href="#"> Update Employee </NavLink>
                        </li>  
                    </ul>
                </div>

            </nav> 
        );
    }
}

export default Header;