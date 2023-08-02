import React, { useState } from 'react';
import axios from 'axios';
import Stars from '../Detail/Stars';
import { useDispatch, useSelector } from "react-redux";
import { addReview } from '../../Redux/actions';
import "./ReviewForm.css"

const ReviewForm = ({ id }) => {
  const dispatch = useDispatch();
  // const [rating, setRating] = useState(0);
  // const [comment, setComment] = useState('');
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const user_id = useSelector(state => state.LocalPersist.userProfile.email);

  const [review, setReview] = useState({  // --------------------------------------------------REVIEWS
    email:`${user_id}`, /* <----------------------- FALTA ASIGNARLE BIEN EL USERID QUE TIENE EL USUARIO QUE COMENTA */
    content: "",
    rating: 0,
    book_id: `${id}`, 
  })
  
  const handleCommentChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setReview({ ...review, [property]: value});
    console.log(user_id)
  }

  const url =  "http://localhost:3001";
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post(`${url}/review/post`, review)
      .then(res=>alert("Gracias por opinar sobre nuestro producto!"))
      .catch((error) => alert(error))
      console.log(user_id)
    } catch (error) {
      console.log(error);
    }
  } 

  // const handleSubmitReview = async (event) => {
  //   event.preventDefault();

  //   if (review.rating === 0) {
  //       alert("Por favor, califica al menos una estrella antes de enviar tu reseña.");
  //       return;
  //     }

  //     if (review.content.trim().split(/\s+/).length < 2) {
  //       alert("Por favor, ingresa al menos dos palabras en tu reseña.");
  //       return;
  //     }

  //   if (review.rating === 0 || review.content.trim() === '') {
     
  //     return;
  //   }
  //   setIsSubmitting(true);
  //   try {
  //     const reviewData = {
  //       email: review.email, 
  //       content: review.content, 
  //       rating: review.rating, 
  //       book_id: review.book_id, 
  //     };
  //     await dispatch(addReview(reviewData));

  //   } catch (error) {
  //     console.error('Error creating review:', error);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  return (
    <div className="ReviewContainer">
      <p style={{fontSize:"1.2rem"}}>Your Review</p>
      <ol class="rating-list">
        <li>
          <input type="radio" name="rating" id="rating1" value="1" onChange={handleCommentChange}/>
          <label for="rating1">⭑</label>
        </li>
        <li>
          <input type="radio" name="rating" id="rating2" value="2" onChange={handleCommentChange}/>
          <label for="rating2">⭑</label>
        </li>
        <li>
          <input type="radio" name="rating" id="rating3" value="3" onChange={handleCommentChange}/>
          <label for="rating3">⭑</label>
        </li>
        <li>
          <input type="radio" name="rating" id="rating4" value="4" onChange={handleCommentChange}/>
          <label for="rating4">⭑</label>
        </li>
        <li>
          <input type="radio" name="rating" id="rating5" value="5" onChange={handleCommentChange}/>
          <label for="rating5">⭑</label>
        </li>
      </ol>
      {/* <div className="RatingContainer">
        <input
          type="range" min="0" max="5"
          name="rating"
          onChange={handleCommentChange}
          value={review.rating}
        ></input>

      </div> */}
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
