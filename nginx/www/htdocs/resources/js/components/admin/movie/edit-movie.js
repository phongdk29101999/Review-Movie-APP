import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditMovie extends Component {

  constructor(props) {
    super(props)

    this.onChangeMovieTitle = this.onChangeMovieTitle.bind(this);
    this.onChangeMovieDescription = this.onChangeMovieDescription.bind(this);
    this.onChangeMovieDirector = this.onChangeMovieDirector.bind(this);
    this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this);
    this.onChangeMovieProductionYear = this.onChangeMovieProductionYear.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      title: '',
      description: '',
      poster: '',
      production_year: '',
      director: ''
    }
  }

  // componentDidMount() {
  //   axios.get('http://localhost:8000/api/admin/movie/' + this.props.match.params.id)
  //     .then(res => {
  //       this.setState({
  //         title: res.data.title,
  //         description: res.data.description,
  //         poster: res.data.poster,
  //         production_year: res.data.production_year,
  //         director: res.data.director
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // }


  onChangeMovieTitle(e) {
    this.setState({ title: e.target.value })
  }

  onChangeMovieDescription(e) {
    this.setState({ description: e.target.value })
  }

  onChangeMovieDirector(e) {
    this.setState({ director: e.target.value })
  }
  onChangeMoviePoster(e) {
    this.setState({ poster: e.target.value })
  }
  onChangeMovieProductionYear(e) {
    this.setState({ production_year: e.target.value })
  }
 
  // onSubmit(e) {
  //   e.preventDefault();

  //   const movieObject = {
  //     title: this.state.title,
  //     description: this.state.description,
  //     poster: this.state.poster,
  //     director: this.state.director,
  //     production_year: this.state.production_year
  //   };

  //   axios.put('http://localhost:8000/api/admin/movie/' + this.props.match.params.id, movieObject)
  //   .then((res) => {
  //     console.log(res.data)
  //     console.log('Movie successfully updated')
  //   }).catch((error) => {
  //     console.log(error)
  //   })
  //   this.setState({title: '', description: '', poster: '', director: '', production_year: ''})

  // this.props.history.push('/admin/create-movie')
  // }
  onSubmit(e) {
    e.preventDefault();
    axios
        .put(`http://localhost:8000/api/admin/movie/${this.props.match.params.id}`, {
          title: this.state.title,
              description: this.state.description,
              poster: this.state.poster,
              director: this.state.director,
              production_year: this.state.production_year
        })
        .then(response => {
            alert('Movie updated');
            this.props.history.push('/admin/create-movie')
        });
}



  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text"  value ={this.state.title} onChange={this.onChangeMovieTitle} />
        </Form.Group>

        <Form.Group controlId="Description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" value={this.state.description} onChange={this.onChangeMovieDescription} />
        </Form.Group>

        <Form.Group controlId="Director">
          <Form.Label>Director</Form.Label>
          <Form.Control type="text" value={this.state.director}  onChange={this.onChangeMovieDirector} />
        </Form.Group>
        <Form.Group controlId="Poster">
          <Form.Label>Poster</Form.Label>
          <Form.Control type="file"  value={this.state.poster} onChange={this.onChangeMoviePoster} />
        </Form.Group>
        <Form.Group controlId="Production Year">
          <Form.Label>Production Year</Form.Label>
          <Form.Control type="number" value={this.state.production_year} onChange={this.onChangeMovieProductionYear} />
        </Form.Group>


        <Button variant="danger" size="lg" block="block" type="submit">
          Movie Update
        </Button>
      </Form>
    </div>);
  }
}
