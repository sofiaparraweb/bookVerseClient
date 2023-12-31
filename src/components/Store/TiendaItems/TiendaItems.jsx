import axios from "axios";
import { Link } from "react-router-dom"
//import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import "./TiendaItems.css"; 

const TiendaItems = ({ id, author, title, price, description, publisher, pages, language, genres, reviews, stars, publicationDate, image, format, Reviews }) => {
  
  // const dispatch = useDispatch();
  // const books = useSelector((state) => state.LocalPersist.cart.Books);
    
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  

  return (
    <div className="Card" >
      <Link to={`/detail/${id}`} style={{textDecoration:"none", fontWeight:"400", color:"#17424b"}}>
        <div className="BookCard">
          <figure className="figureStore">
            <img src={image} alt="image" onClick={handleClick}/>
          </figure>
        </div>
        <div className="BookCard-data">
          <div className="BookCard-data-flex">
            <p style={{fontSize:"0.9rem"}}>{title}</p>
          </div>
          <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", paddingBottom:"1rem"}}>
            <p style={{extTransform:"capitalize", fontSize:"0.8rem"}}>{author}</p>
            <p style={{fontSize:"0.8rem"}}>${price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TiendaItems;