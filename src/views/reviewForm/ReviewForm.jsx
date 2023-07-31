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
    setReview({ ...review, [property]: value});
  }

  const url =  "http://localhost:3001";
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post(`${url}/review/post`, review)
      .then(res=>alert("Gracias por opinar sobre nuestro producto!"))
      .catch((error) => alert(error))
    } catch (error) {
      console.log(error);
    }
  } 


  return (
    <div className="ReviewContainer">
      <p style={{fontSize:"1.2rem"}}>Your Review</p>
      <ol className="rating-list">
        <li>
          <input type="radio" name="rating" id="rating1" value="1" onChange={handleCommentChange}/>
          <label htmlFor="rating1">⭑</label>
        </li>
        <li>
          <input type="radio" name="rating" id="rating2" value="2" onChange={handleCommentChange}/>
          <label htmlFor="rating2">⭑</label>
        </li>
        <li>
          <input type="radio" name="rating" id="rating3" value="3" onChange={handleCommentChange}/>
          <label htmlFor="rating3">⭑</label>
        </li>
        <li>
          <input type="radio" name="rating" id="rating4" value="4" onChange={handleCommentChange}/>
          <label htmlFor="rating4">⭑</label>
        </li>
        <li>
          <input type="radio" name="rating" id="rating5" value="5" onChange={handleCommentChange}/>
          <label htmlFor="rating5">⭑</label>
        </li>
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
