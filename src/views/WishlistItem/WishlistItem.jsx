import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCart, addToCart, getWishlist, removeWishlist} from "../../Redux/actions"
import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import "./WishlistItem.css"

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
  
    const handleAddToCart = (event, user_id, id, quantity) => {  // --------------------------------------------------ADD BOOKS TO CART
        event.preventDefault()
        const cartItems = Cart;
        const productInCart = cartItems?.find((item) => item.id === id); //check if book is already in cart
        if (isAuthenticated) {
            if (productInCart) {
                alert("Book is already in the shopping cart.");
            } else {
                dispatch(addToCart(user_id, id, quantity));
                alert("Book has been added to the shopping cart.");
                dispatch(getCart(user_id));
                navigate("/cart");
            }
        } else {
            alert('You need to log in to buy books.');
        }
    }

    const handleDeleteFromWish = async (user_id, id) => {  //PARA BORRAR UN PRODUCTO DEL CARRITO
        await dispatch(removeWishlist(user_id, id));
        alert("Book has been removed from wishlist.");
        dispatch(getWishlist(user_id));
      };


    return (                    
        <div>
            <h3 className="emptyWishlist">Hi {userName}, this is your wishlist.</h3>
            <hr></hr>
            <div className="GridThreeColumns" style={{ padding: "1.5rem 0", borderBottom:"1px solid silver", gridTemplateColumns: "20% 60% 20%", gap:"3rem" }}>
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
                            <div className="Botonera">
                                <div className="BotoneraSumaResta">
                                    <button className="ButtonsSumaResta" onClick={handleDelete} value="less" >-</button>
                                        {w.quantity}
                                    <button className="ButtonsSumaResta" onClick={handleAdd} value="add" >+</button>
                                </div>
                                <button className="Buttons" style={{padding:"1rem"}} onClick={()=>{handleAddToCart(event, user_id, w.id, w.quantity)}}>
                                    Add to Cart
                                </button>
                            </div>
                        </div>

                        <div style={{display:"flex", alignItems: "center", justifyContent: "center"}}>
                            <p >
                                Remove Item <button style={{fontSize:"1.3rem", border:"none", paddingLeft:"1rem", backgroundColor:"transparent"}} onClick={()=>handleDeleteFromWish(user_id, w.id)}> X </button>
                            </p>
                        </div>
                    </>
                )})}
            </div>
        </div>
    )
}

export default WishlistItem;