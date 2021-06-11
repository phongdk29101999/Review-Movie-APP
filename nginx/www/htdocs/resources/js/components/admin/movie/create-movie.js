import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import ListMovie from './list-movie';
import Swal from 'sweetalert2';
import Header from '../header';


export default class CreateMovie extends Component {
  constructor(props) {
    super(props)
    this.onChangeMovieTitle = this.onChangeMovieTitle.bind(this);
    this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this);
    // // this.onChangeMovieLenght = this.onChangeMovieLenght.bind(this);
    this.onChangeMovieDirector = this.onChangeMovieDirector.bind(this);
    this.onChangeMovieProductionYear = this.onChangeMovieProductionYear.bind(this);
    // // this.onChangeMovieExpertEvaluation =  this.onChangeMovieExpertEvaluation.bind(this);
    this.onChangeMovieDescription = this.onChangeMovieDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      title: '',
      description: '',
      poster: '',
      director:'',
      production_year:'',
    }
  }

  onChangeMovieTitle(e) {
    this.setState({title: e.target.value})
  }

  onChangeMovieDescription(e) {
    this.setState({description: e.target.value})
  }

  onChangeMovieDirector(e){
    this.setState({director: e.target.value})
  }
  onChangeMoviePoster(e){
    this.setState({poster: e.target.value})
  }
  onChangeMovieProductionYear(e){
    this.setState({production_year: e.target.value})
  }
 
  onSubmit(e) {
    e.preventDefault();
     const movie = {
      title: this.state.title,
      description: this.state.description,
      poster: this.state.poster,
      // movie_lenght: this.state.movie_lenght,
      director: this.state.director,
      production_year: this.state.production_year,
      // expert_evaluation: this.state.expert_evaluation
      // watched_evaluation: this.state.description,
    }
    axios.post('http://localhost:8000/api/admin/movie/', movie)
    .then(res => console.log(res.data));
    Swal.fire(
  'Good job!',
  'User Added Successfully',
  'success'
)

    this.setState({title: '', description: '', poster: '', director:'',production_year:''})
   
  }

  render(){
    return (
    
    <div className="form-wrapper container-fluid">
       <div>
        <Header />
      </div>
      <div className=" mt-5 pt-5 d-flex justify-content-center">
        <h1> MOVIE MANAGER</h1>
      </div>
      <Form onSubmit={this.onSubmit}>
      
        
             <Form.Group controlId="Title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" value={this.state.title} onChange={this.onChangeMovieTitle}/>
             </Form.Group>
            
          
             <Form.Group controlId="Poster">
                <Form.Label>Poster</Form.Label>
                <Form.Control type="file" value={this.state.poster}  onChange={this.onChangeMoviePoster}/>
             </Form.Group>
         
             <Form.Group controlId="Password">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" value={this.state.description} onChange={this.onChangeMovieDescription}/>
             </Form.Group>
            
         
            {/* <Col>
             <Form.Group controlId="MovieLength">
                <Form.Label>Movie_Length</Form.Label>
                <Form.Control type="number" onChange={this.onChangeMovieLenght}/>
             </Form.Group>
            
            </Col> */}
           
             <Form.Group controlId="Director">
                <Form.Label>Director</Form.Label>
                <Form.Control type="text" value={this.state.director } onChange={this.onChangeMovieDirector}/>
             </Form.Group>
            
         
             <Form.Group controlId="ProductionYear">
                <Form.Label>ProductionYear</Form.Label>
                <Form.Control type="number" value={this.state.production_year} onChange={this.onChangeMovieProductionYear}/>
             </Form.Group>
            
            
            {/* <Col>
             <Form.Group controlId="ExpertEvaluation">
                <Form.Label>ExpertEvaluation</Form.Label>
                <Form.Control type="text" onChange={this.onChangeMovieExpertEvaluation}/>
             </Form.Group>
            
            </Col> */}
           
     
        <Button variant="primary" size="lg" block="block" type="submit">
          Add Movie
        </Button>
      </Form>
      <br></br>
      <br></br>

      <ListMovie> </ListMovie>
    </div>
    );
  }
}
