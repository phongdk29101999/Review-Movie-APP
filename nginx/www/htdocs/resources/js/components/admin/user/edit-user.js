import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Row from 'react-bootstrap/Row';

export default class EditUser extends Component {

    constructor(props) {
        super(props)
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }

    // componentDidMount() {
    //   axios.get('http://localhost/api/users/' + this.props.match.params.id)
    //     .then(res => {
    //       this.setState({
    //         name: res.data.name,
    //         email: res.data.email,
    //         password: res.data.password,
    //       });
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     })
    // }

    onChangeUserName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeUserEmail(e) {
        this.setState({ email: e.target.value })
    }

    onChangeUserPassword(e) {
        this.setState({ password: e.target.value })
    }

    // onSubmit(e) {
    //   e.preventDefault();
    //   const userObject = {
    //     name: this.state.name,
    //     email: this.state.email,
    //     password: this.state.password
    //   };

    //   axios.put('http://localhost/api/admin/users/' + this.props.match.params.id, userObject)
    //   .then(response => {
    //     alert('User updated');
    // })
    // .catch((error) => {
    //     console.log(error)
    //   })
    //   // this.setState({name: '', email: '', password: ''})
    // // Redirect to Expense List 
    // this.props.history.push('/admin/create-expense')
    // }

    onSubmit(e) {
        e.preventDefault();
        axios.put(`http://localhost/api/admin/users/${this.props.match.params.id}`, {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        })
        .then(response => {
            alert('User updated');
            this.props.history.push('/admin/create-expense')
        });
    }
    
    render() {
        return (
            <div className="form-wrapper">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={this.state.name} onChange={this.onChangeUserName}/>
                    </Form.Group>
                    <Form.Group controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" value={this.state.email} onChange={this.onChangeUserEmail}/>
                    </Form.Group>
                    <Form.Group controlId="Password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={this.state.password} onChange={this.onChangeUserPassword}/>
                    </Form.Group>
                    <Button variant="danger" size="lg" block="block" type="submit">
                        Update User
                    </Button>
                </Form>
            </div>
        );
    }
}
