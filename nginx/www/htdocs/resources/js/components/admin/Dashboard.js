import React, { Component } from 'react';
import ListUserTableRow from './list-user';
import axios from 'axios';
import Card from "./card";

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    };
  }


  componentDidMount() {
    axios.get('http://localhost:8000/api/admin/users/')
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
      return <ListUserTableRow obj={res} key={i} />;
    });
  }
    render() {
        
        return (
            <div className="container-fluid ml-5 pl-5">
 
      <div className=" mt-3 pt-3">
      <Card />
        <div className="row">
          <section className="col-9 ">
            
            <div className="card">
                <div className="dash-table">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        {this.DataTable()}
                       
                    </tbody>
                </table>
                </div>
            </div>
          </section>
        </div>
      </div>{/* /.container-fluid */}
  
  </div>


        )
    }
}
