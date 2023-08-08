import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCart, addToCart, getWishlist, removeWishlist} from "../../Redux/actions"
import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import "./WishlistItem.css"
import Swal from 'sweetalert2';

const WishlistItem = ({ wish }) => {

    console.log(wish)

    const { isAuthenticated } = useAuth0(); 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user_id = useSelector(state => state.LocalPersist.userProfile.id);
    const userName = useSelector(state => state.LocalPersist.userProfile.name);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        dispatch(getWishlist(user_id));
    },[dispatch]);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleAdd = (event) => {  // --------------------------------------------------BOTON SUMAR
        event.preventDefault()
        setQuantity(quantity + 1); // Agrega 1 a la cantidad actual
    };
  
    const handleDelete = (event) => {  // --------------------------------------------------BOTON SUMAR
        event.preventDefault()
        if (quantity > 0) {
            setQuantity(quantity - 1); // Resta 1 a la cantidad actual
        }
    };
  
    const handleAddToCart = (event, user_id, id, quantity) => {
        event.preventDefault();
        const cartItems = Cart;
        const productInCart = cartItems?.find((item) => item.id === id);
      
        if (isAuthenticated) {
          if (productInCart) {
            Swal.fire({
              icon: 'info',
              title: 'Book is already in the shopping cart.',
              background: '#f3f3f3',
              confirmButtonColor: '#B9362C',
              customClass: {
                title: 'my-custom-title',
                content: 'my-custom-content',
                confirmButton: 'my-custom-button',
              },
            });
          } else {
            dispatch(addToCart(user_id, id, quantity));
            Swal.fire({
              icon: 'success',
              title: 'Book has been added to the shopping cart.',
              background: '#f3f3f3',
              confirmButtonColor: '#B9362C',
              customClass: {
                title: 'my-custom-title',
                content: 'my-custom-content',
                confirmButton: 'my-custom-button',
              },
            }).then(() => {
              dispatch(getCart(user_id));
              navigate("/cart");
            });
          }
        } else {
          Swal.fire({
            icon: 'warning',
            title: 'You need to log in to buy books.',
            background: '#f3f3f3',
            confirmButtonColor: '#B9362C',
            customClass: {
              title: 'my-custom-title',
              content: 'my-custom-content',
              confirmButton: 'my-custom-button',
            },
          });
        }
      };
      
      const handleDeleteFromWish = async (user_id, id) => {
        await dispatch(removeWishlist(user_id, id));
        Swal.fire({
          icon: 'success',
          title: 'Book has been removed from wishlist.',
          background: '#f3f3f3',
          confirmButtonColor: '#B9362C',
          customClass: {
            title: 'my-custom-title',
            content: 'my-custom-content',
            confirmButton: 'my-custom-button',
          },
        }).then(() => {
          dispatch(getWishlist(user_id));
        });
      };
      

    return (                    
        <div>
            <h3 className="emptyWishlist">Hi {userName}, this is your wishlist.</h3>
            <hr></hr>
            <div className="GridThreeColumns" style={{ padding: "1.5rem 0", borderBottom:"1px solid silver", gridTemplateColumns: "20% 40% 40%", gap:"3rem" }}>
                {wish?.length > 0 && wish?.map((w) => {
                    return (
                    <>
                        <Link to={`/detail/${w.id}`} style={{ textDecoration: "none", fontWeight: "400", color: "#17424b" }}>
                            <figure className="figureStoreWish">
                                <img src={w.image} alt="image" />
                            </figure>
                        </Link>
                        <div className="WishlistInfoContent">
                            <Link to={`/detail/${w.id}`} style={{ textDecoration: "none", fontWeight: "400", color: "#17424b" }}>
                                <h2>{w.title}</h2>
                            </Link>
                            <p style={{margin:"1rem 0"}}>
                                <span className="outerTextStyle">by</span> 
                                <span className="innerTextStyle"> {w.author}</span>
                            </p>
                            <p> 
                                <span className="outerTextStyle">Format </span> 
                                <span className="innerTextStyle"> {w.format}</span>
                            </p>
                            <p style={{color:"grey", margin:"0.5rem 0"}}>USD {w.price},00</p>
                        </div>

                        <div style={{paddingTop:"1rem"}}>
                            <p >
                                Remove Item <button style={{fontSize:"1.3rem", border:"none", paddingLeft:"0.5rem", backgroundColor:"transparent", color:"#b38a83", fontWeight:"bold"}} onClick={()=>handleDeleteFromWish(user_id, w.id)}> X </button>
                            </p>
                        </div>
                    </>
                )})}
            </div>
        </div>
    )
}

export default WishlistItem;