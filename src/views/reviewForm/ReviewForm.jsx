import React, { useState } from 'react';
import axios from 'axios';
import Stars from '../Detail/Stars';
import { useDispatch } from 'react-redux';
import { addReview } from '../../Redux/actions';
import "./ReviewForm.css"

const ReviewForm = ({ bookId }) => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitReview = async (event) => {
    event.preventDefault();

    if (rating === 0) {
        alert("Por favor, califica al menos una estrella antes de enviar tu reseña.");
        return;
      }

      if (comment.trim().split(/\s+/).length < 2) {
        alert("Por favor, ingresa al menos dos palabras en tu reseña.");
        return;
      }

    // if (rating === 0 || comment.trim() === '') {
     
    //   return;
    // }
    setIsSubmitting(true);
    try {
      const reviewData = {
        user_id: bookId, 
        content: comment, 
        rating: rating, 
        product_id: bookId, 
      };
      await dispatch(addReview(reviewData));

    } catch (error) {
      console.error('Error creating review:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="ReviewContainer">
      <h3>Your Review</h3>
      <div className="RatingContainer">
       
        <Stars stars={rating} onStarClick={handleRatingChange} />
      </div>
      <div className="CommentContainer">
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Write your review here..."
        ></textarea>
      </div>
      <div className="SubmitContainer">
        <button type="submit" onClick={handleSubmitReview} disabled={isSubmitting}>
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default ReviewForm;
