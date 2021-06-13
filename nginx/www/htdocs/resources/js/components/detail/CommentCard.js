import {useState, useEffect} from 'react'
import ReactStars from "react-rating-stars-component";

function CommentCard({review}){
    const [content, setContent] = useState(review.review_text)
    const [showMore, setShowMore] = useState({
        status:false,
        text: null,
    })
    const formatDate = (created_at)=> {
        const date = new Date(created_at);
        date.setDate(date.getDate() + 20);

        const MyDateString = ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth()+1)).slice(-2) + '/' + date.getFullYear();
        return MyDateString;
    }

    useEffect(() => {
         review.created_date = formatDate(review.created_at)
        
        if(content.length > 365){
            setContent(content.substring(0,365)+'...');
            setShowMore({
                text :"    show more",
                status:true
            })
        }
    },[])

    const handleClickShow = event =>{
        if(showMore.text=="    show more"){
            setContent(review.content);
            setShowMore({
                ...showMore,
                text:" show less"
            })
        }
        else{
            setContent(content.substring(0,365)+'...');
            setShowMore({
                ...showMore,
                text:"    show more"
            })
        }
    }
    const star ={
        size:10,
        count:10,
        edit: false,
    }

    
    return (
        <div className="card">
        <div className="reviewer">
            <img src={review.user_avatar?review.user_avatar:'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'} style = {{width: 70, borderRadius: '50%'}}></img>
            <div className="right-infor">
                <h3 style = {{marginLeft:'2rem', paddingBottom:'-1rem'}}>A Review by {review.user_name}</h3> 
                <div className="rating1" style = {{marginLeft:'2rem'}} >
                    <div className="star" ><ReactStars  {...star} value = {review.rating} /><div style = {{fontSize:'small', marginLeft:'1rem'}}>{review.created_date}</div></div>
                    <div> </div>
                </div>
            </div>
           
        </div>
        <div className="review-film">
            <span>{content}
            {showMore.status? 
            <span onClick={handleClickShow} style ={{textStyle:"bold" ,color:'blue'}} className="show-more">{showMore.text}</span>
            :<div></div>
            }
            </span>
            
        </div>
    </div>
    )
  
}

export default CommentCard;