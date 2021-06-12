import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Route , withRouter} from 'react-router-dom';

export default class ExpenseTableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser() {
        axios.delete('http://localhost/api/admin/users/' + this.props.obj.id)
        .then((res) => {
            alert('User deleted')
            this.props.history.push('/admin');
        }).catch((error) => {
            console.log(error)
        })
        this.props.history.push('/')
    };

    render() {
        return (
            <tr>
                <td>{this.props.obj.id}</td>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.email}</td>              
                <td>
                    <Link className="edit-link" to={"/admin/edit-user/" + this.props.obj.id}>
                       <Button size="sm" variant="info">Edit</Button>
                    </Link>
                    <Button onClick={this.deleteUser} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}
