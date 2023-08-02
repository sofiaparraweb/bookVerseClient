import React, { useState } from 'react';
import axios from 'axios';
import Stars from '../Detail/Stars';
import { useDispatch, useSelector } from "react-redux";
import { addReview } from '../../Redux/actions';
import "./ReviewForm.css"

const ReviewForm = ({ id }) => {
  const dispatch = useDispatch();
  const user_id = useSelector(state => state.LocalPersist.userInfo.email);

  const [review, setReview] = useState({  // --------------------------------------------------REVIEWS
    email:`${user_id}`, /* <----------------------- FALTA ASIGNARLE BIEN EL USERID QUE TIENE EL USUARIO QUE COMENTA */
    content: "",
    rating: 0,
    book_id: `${id}`, 
  })

  const handleCommentChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setReview({ ...review, [property]: value });
  }

  const handleStarClick = (rating) => {
    setReview({ ...review, rating });
  };

  const url =  "http://localhost:3001";
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${url}/review/post`, review)
        .then(res => alert("Gracias por opinar sobre nuestro producto!"))
        .catch((error) => alert(error));
    } catch (error) {
      console.log(error);
    }
  } 

  return (
    <div className="ReviewContainer">
      <p style={{fontSize:"1.2rem"}}>Your Review</p>
      <ol className="rating-list" >
        {[1, 2, 3, 4, 5].map((value) => (
          <li
            key={value}
            onClick={() => handleStarClick(value)}
            style={{ cursor: 'pointer', margin:"0.5rem 0"}}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill={value <= review.rating ? 'orange' : 'none'}
              stroke="orange"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.54 22 9.27 17 13.18 18.18 20 12 16.73 5.82 20 7 13.18 2 9.27 8.91 8.54 12 2"></polygon>
            </svg>
          </li>
        ))}
      </ol>

      <div className="CommentContainer">
        <textarea
          value={review.content}
          name="content"
          onChange={handleCommentChange}
          placeholder="Write your review here..."
        ></textarea>
      </div>
      <div className="SubmitContainer">
        <button type="submit" onClick={handleSubmit} >
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default ReviewForm;
