import {useParams} from 'react-router-dom'
import React ,{useState, useEffect} from 'react'
import axios from 'axios'
import "./Detail.css"
import ReactStars from "react-rating-stars-component";
const FEATURED_KEY = "7d6c5edae738317365e3235566d4c72d";
import CommentCard from "./CommentCard"


function Detail(){
    const [movie, setMovie] = useState();
    const [reviews, setReviews] = useState([]);
    const {id} = useParams();

    const formatRunTime = (runtime) => {
        const minute = runtime %60;
        const hour = (runtime -minute)/60;
        if(hour == 0) return minute+"m"
        else return hour+'h'+minute+'m';
    }

    const formatDate = (date) => {
        const [year, month, day] = date.split('-');
        return [day, month, year].join('/');
    }

    const getYear = (date) =>{
        const arr = date.split('/');
        
        return arr[2];
    }

    const formatCategory = (genres) => {
        const listCategories = [];
        genres.map((genre) => listCategories.push(genre.name));
        return listCategories.join(', ');;
    }

    const fetchMovies = () => {
        axios.get(`http://localhost/api/movies/${id}`).then(response => {
        console.log(response.data)
        let data = {...response.data}
        data.runtime = formatRunTime(data.runtime);
        //data.category = formatCategory(data.genres);
        data.release_date = formatDate(data.release_date);
        data.year = getYear(data.release_date);
          setMovie(data);
        }).catch(e => {
          console.log(e);
        })
      }

    const getReview = () =>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${FEATURED_KEY}&language=en-US&page=1`)
        .then(response =>{
            // console.log(response);
            setReviews([...response.data.results]);
        })
        .catch(e => {
            console.log(e);
          })
    }
      useEffect(() => {
        fetchMovies();
        getReview();
      }, []);
      
     
      const firstExample = {
        size: 30,
        count:10,
        edit: false
      };
    
    return(
        
        <React.Fragment>
            {
                movie ?
                <>
                <div className="overview-container" style= {{background:`linear-gradient(to right, rgba(5.10%, 4.71%, 4.71%, 1.00) 150px, rgba(5.10%, 4.71%, 4.71%, 0.84) 100%), url(${movie.backdrop_path})`,   backgroundRepeat: 'no-repeat', backgroundPosition:" right"}}>
                  <div className="content">
                      <section className="content1">
                          <div className="poster-block">
                              <img className = "poster" src={movie.poster_path}></img>
                          </div>
                          <div className="infor-block">
                                  <section className="infor-section">
                                      <div className="tilte-infor">
                                          <h2 className="title">{movie.title+'('+movie.year+')'}</h2>
                                          <div>{movie.release_date} (VN)・{movie.runtime}</div>
                                          <div className="rating">
                                             <div className="star"><ReactStars {...firstExample} value= {movie.vote_average} /></div>
                                             <div className="average">{movie.vote_average}/10</div>
                                          </div>
                                          <div style = {{fontStyle: 'italic', paddingBottom:'1rem'}}>{movie.tagline}</div>
                                          <h3>Overview</h3>
                                          <div className="overview">
                                              <p>{movie.overview}</p>
                                          </div>
                                      </div>
                                  </section>
                              </div>
                      </section>
                  </div>
                </div>
                <div className = "comment-container">
                    <div className="content">
                      <h3>Reviews</h3>
                      <div className="white-column">
                        <section className="panel-review">
                            <div className="review-container">
                                <div className="review-content">
                                    {
                                        
                                        reviews.map((review) =>
                                            
                                               <CommentCard  key = {review.id} review={review}/>
                                            )
                                    }
                                    
                                    </div>
                                </div>
                            
                        </section>
                      </div>
                    </div>
                </div>
                </>
                :null
            }
        </React.Fragment>
    )
}

export default Detail;