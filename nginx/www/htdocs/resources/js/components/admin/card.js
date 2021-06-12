import React, { Component } from 'react';
import axios from 'axios';
export default class Card extends Component {
    
    render() {
        return (
            <div className="row text-align-center">
                <div className=" pl-2 mr-3 col-3">
                    <div className="small-box bg-info">
                    <div className="inner">
                        <h3> 150</h3>
                        <p>User</p>
                    </div>
                    <div className="icon">
                        <i className="ion ion-bag" />
                    </div>
                        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                    </div>
                </div>
                <div className="ml-2 col-3">
                    <div className="small-box bg-success">
                    <div className="inner">
                        <h3>53<sup style={{fontSize: 20}}>%</sup></h3>
                        <p>Movie</p>
                    </div>
                    <div className="icon">
                        <i className="ion ion-stats-bars" />
                    </div>
                        <a href="/" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                    </div>
                </div>
                <div className="ml-2 col-3">
                    <div className="small-box bg-success">
                    <div className="inner">
                        <h3>53<sup style={{fontSize: 20}}>%</sup></h3>
                        <p>Review</p>
                    </div>
                    <div className="icon">
                        <i className="ion ion-stats-bars" />
                    </div>
                        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                    </div>
                </div>
            </div>
        )
    }
}
