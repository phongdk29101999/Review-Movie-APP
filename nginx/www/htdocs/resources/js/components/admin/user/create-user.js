import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import ListUser from './list-user';
import Swal from 'sweetalert2';
import Header from '../header';

export default class CreateUser extends Component {
    constructor(props) {
        super(props)

        // Setting up functions
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Setting up state
        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }

    onChangeUserName(e){
        this.setState({name: e.target.value})
    }

    onChangeUserEmail(e) {
        this.setState({email: e.target.value})
    }

    onChangeUserPassword(e) {
        this.setState({password: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        };
        axios.post('http://localhost/api/admin/users/', user)
        .then(res => console.log(res.data));
        Swal.fire(
            'Good job!',
            'User Added Successfully',
            'success'
        )
        this.setState({name: '', email: '', password: ''})
    }


    render(){
        return (
            <div className="form-wrapper container-fluid">
                <div>
                    <Header />
                </div>
                <div className=" mt-5 pt-5 d-flex justify-content-center">
                    <h1> USER MANAGER</h1>
                </div>
                <Form onSubmit={this.onSubmit}>
                    <Row> 
                        <Col>
                            <Form.Group controlId="Name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" value={this.state.name} onChange={this.onChangeUserName}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="Email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" value={this.state.email} onChange={this.onChangeUserEmail}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="Password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={this.state.password} onChange={this.onChangeUserPassword}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="primary" size="lg" block="block" type="submit">
                        Add User
                    </Button>
                </Form>
                <br></br>
                <br></br>
                <ListUser> </ListUser>
            </div>
        );
    }
}
