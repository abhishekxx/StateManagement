import React, { Component, } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { editEmployee } from '../redux/action'; 

class EditEmployee extends Component {

  constructor(props) {
    super(props);
    this.state = {
        name: '',
        email: '',
        phonenumber: '',
        address: '',
        description: ''
    };
 
    this.handleSubmit = this.handleSubmit.bind(this);
    }
 handleSubmit(){
    let employee = {
        name: this.state.name,
        email: this.state.email,
        phonenumber: this.state.phonenumber,
        address: this.state.address,
        description: this.state.description
    };
    console.log("submitted",employee);
    this.setState({
        name: '',
        email: '',
        phonenumber: '',
        address: '',
        description: ''
    });
 }
  
render() {
const employees = this.props.employee;
console.log(employees);
  return (
            <div className="col-md-4 offset-md-4">
                  <Form>
                   <h2 style={{"textAlign":"center", "marginTop":"20px"}}>Edit Employee Details</h2>
                   <hr/>
                  <Row form>
                  <Col md={6}>
                      <FormGroup>
                        <Label for="exampleName">Name</Label>
                        <Input type="text" name="name" id="exampleName" placeholder="Your Name" onChange={e => {
                              this.setState({[e.target.name]:e.target.value});
                          }}
                          value = {this.state.name}
 />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="example123@gmail.com" onChange={e => {
                              this.setState({[e.target.name]:e.target.value});
                          }}
                          value = {this.state.email}
  />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="examplePhoneNumber">Phone Number</Label>
                        <Input type="" name="phone number" id="examplePhoneNumber" placeholder="Phone Number" onChange={e => {
                              this.setState({[e.target.name]:e.target.value});
                          }}
                          value = {this.state.phonenumber}
/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <Label for="exampleAddress">Address</Label>
                    <Input type="text" name="address" id="exampleAddress" placeholder="Appartment, floor, etc" onChange={e => {
                              this.setState({[e.target.name]:e.target.value});
                          }}
                          value = {this.state.address}
/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleDescription">Description</Label>
                    <Input type="text" name="description" id="exampleCompany" placeholder="My Name is ..." onChange={e => {
                              this.setState({[e.target.name]:e.target.value});
                          }}
                          value = {this.state.description}
/>
                  </FormGroup>
                  <Button>Update</Button>
                </Form>
           </div>
  );
}
}

const mapStateToProps = (state) => {
  return { employee: state.employee }
  }

  export default connect(mapStateToProps, { editEmployee })(EditEmployee);
