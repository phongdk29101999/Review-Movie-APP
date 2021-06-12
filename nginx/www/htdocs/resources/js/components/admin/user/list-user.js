import React, { Component } from 'react';
import axios from 'axios';
import { Route , withRouter} from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import ExpenseTableRow from './ExpenseTableRow';


export default class ListUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        };
    }
    
    componentDidMount() {
        axios.get('http://localhost/api/users/')
        .then(res => {
            this.setState({
                users: res.data
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }

    DataTable() {
        return this.state.users.map((res, i) => {
            return <ExpenseTableRow obj={res} key={i} />;
        });
    }

    render() {
        return (
            <div className="table-wrapper">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th >Id</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.DataTable()}
                    </tbody>
                </Table>
            </div>
        );
    }
}
