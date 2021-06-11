import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import MovieTableRow from './movie-table';


export default class ExpenseList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      movies: []
    };
  }


  componentDidMount() {
    axios.get('http://localhost:8000/api/admin/movie/')
      .then(res => {
        this.setState({
          movies: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.movies.map((res, i) => {
      return <MovieTableRow obj={res} key={i} />;
    });
  }
  render() {
    return (<div className="table-wrapper"> 
      <Table striped bordered hover>
        <thead>
          <tr>
            <th >Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Director</th>
            <th>Poster</th>
            <th>Production Year</th>
          </tr>
        </thead>
        <tbody>
        {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}