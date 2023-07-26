import axios from "axios";
import { Link } from "react-router-dom"
//import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
//import { getCart, addToCart } from "../../../Redux/actions"
//import { Toaster, toast } from "react-hot-toast";
import "./TiendaItems.css"; 

const TiendaItems = ({ id, author, title, price, description, publisher, pages, language, genres, reviews, stars, publicationDate, image, format, Reviews }) => {
  
  // const dispatch = useDispatch();
  // const books = useSelector((state) => state.LocalPersist.Carrito.books);
  // const [quantity, setQuantity] = useState(0);

  const firstImage = image[0];
  
  // useEffect(()=>{
  //   dispatch(getCart(user_id))
  // },[dispatch])
  
  // const [review, setReview] = useState({  // --------------------------------------------------REVIEWS
  //   user_id:`${user_id}`, /* <----------------------- FALTA ASIGNARLE BIEN EL USERID QUE TIENE EL USUARIO QUE COMENTA */
  //   rating: 0,
  //   content: "",
  //   product_id: `${id}`, 
  // })
  
  // const changeHandler = (event) => {
  //   const property = event.target.name;
  //   const value = event.target.value;
  //   setReview({ ...review, [property]: value});
  // }

  
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
            <p style={{extTransform:"capitalize", fontSize:"0.8rem"}}>{genres}</p>
            <p style={{fontSize:"0.8rem"}}>${price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TiendaItems;