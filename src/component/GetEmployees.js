import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardText, Table } from 'reactstrap';

import { getEmployees } from '../redux/action'; 

class GetEmployees extends Component {
    constructor(props) {
    super(props);
    this.state = {
    emps: []
    }
    }
    
    componentDidMount() {
    this.props.getEmployees();
    }

render() {
const employees = this.props.employee;
    console.log(employees);
        return (
            <Card body>
                <h1> Employee Records</h1>
            <CardText>
            <Table hover>
            <thead>
            <tr>
            <th>SN</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Description</th>
            <th>Actions</th>

            </tr>
            </thead>
            <tbody>
            {employees.map((post, index) => (
            <tr key={post.id}>
            <th scope="row">{post.id}</th>
            <td>{post.Name}</td>
            <td>{post.email}</td>
            <td>{post.phone}</td>
            <td>{post.address}</td>
            <td>{post.description}</td>
            <td>
                <button 
                    type="button"
                        onClick={()=>this.handleEdit(index)}
                            className="btn btn-sm btn-primary">Edit
               </button>
    
                <button
                    type="button" 
                        onClick={()=>this.handleDelete(index)}
                            className="btn btn-sm btn-danger">Delete
                </button>
            </td>
                            
            </tr>
))}
            </tbody>
            </Table>
            </CardText>
            </Card>
);
}
}


const mapStateToProps = (state) => {
return { employee: state.employee }
}
export default connect(mapStateToProps, { getEmployees })(GetEmployees); 


