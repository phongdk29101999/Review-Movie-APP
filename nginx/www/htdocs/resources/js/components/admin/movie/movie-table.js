import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Route , withRouter} from 'react-router-dom';

export default class MovieTableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteMovie = this.deleteMovie.bind(this);
    }

    deleteMovie() {
        axios.delete('http://localhost/api/admin/movie/' + this.props.obj.id)
        .then((res) => {
            alert('Movie deleted')
        }).catch((error) => {
            console.log(error)
        })
        this.props.history.push("/admin/create-movie")
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.id}</td>
                <td>{this.props.obj.title}</td>
                <td>{this.props.obj.description}</td>
                <td>{this.props.obj.director}</td>
                <td>{this.props.obj.poster}</td>
                <td>{this.props.obj.production_year}</td>
                <td>
                    <Link className="edit-link" to={"/admin/edit-movie/" + this.props.obj.id}>
                       <Button size="sm" variant="info">Edit</Button>
                    </Link>
                    <Button onClick={this.deleteMovie} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}
