import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Stars from '../Detail/Stars';
import { useDispatch, useSelector } from "react-redux";
import { addReview } from '../../Redux/actions';
import "./ReviewForm.css"
import Swal from 'sweetalert2';

const ReviewForm = ({ id }) => {
  const dispatch = useDispatch();
  const user_id = useSelector(state => state.LocalPersist.userProfile?.email);
  const userProfile = useSelector(state => state.LocalPersist.userProfile);

  const [hasPurchased, setHasPurchased] = useState(false);
  const [review, setReview] = useState({
    email: `${user_id}`,
    content: "",
    rating: 0,
    book_id: `${id}`, 
  });


  // const url =  "http://localhost:3001";
  const url = "https://bookverse-m36k.onrender.com";
  
  useEffect(() => {
    axios.get(`${url}/user/email/${user_id}`)
      .then(response => {
        const user = response.data;
        const hasPurchasedBook = user.Books.some(book => book.id === id);
        setHasPurchased(hasPurchasedBook);
        console.log(user)
      })
      .catch(error => {
        console.log(error);
      });
  }, [user_id, id]);

  const handleCommentChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setReview({ ...review, [property]: value });
  }

  const handleStarClick = (rating) => {
    setReview({ ...review, rating });
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (userProfile) {
      setReview({ ...review, email: userProfile.email });
    }

    console.log(review);
    try {
      await axios.post(`${url}/review/post`, review);
      Swal.fire({
        icon: 'success',
        title: 'Thanks for giving a review of the book!',
        background: '#f3f3f3',
        confirmButtonColor: '#B9362C',
        customClass: {
          title: 'my-custom-title',
          content: 'my-custom-content',
          confirmButton: 'my-custom-button',
        },
      }).then(() => {
      window.location.href = `${url}/detail/${id}`; 
    });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.message,
        background: '#f3f3f3',
        confirmButtonColor: '#B9362C',
        customClass: {
          title: 'my-custom-title',
          content: 'my-custom-content',
          confirmButton: 'my-custom-button',
        },
      });
    }
  }
  
  return (
    <div className="ReviewContainer">
      {hasPurchased ? (
        <>
          <p style={{fontSize:"1.2rem"}}>If you already read the book, write a review to help others!</p>
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
            <button type="submit" onClick={handleSubmit}>
              Submit Review
            </button>
          </div>
        </>
      ) : (
        <p>You can only leave a review if you have purchased this book.</p>
      )}
    </div>
  );
};

export default ReviewForm;
