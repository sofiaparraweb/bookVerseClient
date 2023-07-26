
import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom"
import "./WishlistItem.css"

const WishlistItem = ({ id, image, title, author, price, format }) => {

    const { isAuthenticated } = useAuth0();

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };

    return (                    
        <div>
            <div className="GridThreeColumns" style={{ padding: "1.5rem 0", borderBottom:"1px solid silver", gridTemplateColumns: "20% 60% 20%", gap:"3rem" }}>
                <Link to={`/detail/${id}`} style={{ textDecoration: "none", fontWeight: "400", color: "#17424b" }}>
                    <figure className="figureStoreWish">
                        <img src={image} alt="image" />
                    </figure>
                </Link>
                <Link to={`/detail/${id}`} style={{ textDecoration: "none", fontWeight: "400", color: "#17424b" }}>
                    <div className="WishlistInfoContent">
                        <h2>{title}</h2>
                        <p style={{margin:"1rem 0"}}>
                            <span className="outerTextStyle">by</span> 
                            <span className="innerTextStyle"> {author}</span>
                        </p>
                        <p> 
                            <span className="outerTextStyle">Format </span> 
                            <span className="innerTextStyle"> {format}</span>
                        </p>
                        <p style={{color:"grey", margin:"1rem 0"}}>USD {price},00</p>
                        <div className="Botonera">
                            <div className="BotoneraSumaResta">
                                <button className="ButtonsSumaResta" value="less" >-</button>
                                    Cantidad
                                <button className="ButtonsSumaResta" value="add" >+</button>
                                {/* <button className="ButtonsSumaResta" onClick={handleDelete} value="less" >-</button>
                                    Cantidad
                                <button className="ButtonsSumaResta" onClick={handleAdd} value="add" >+</button> */}
                            </div>
                            {isAuthenticated ? (
                                <button className="Buttons" onClick={()=>handleAddToCart(user_id, id, quantity)} style={{padding:"1rem"}}>
                                    Add to Cart
                                </button>
                            ) : (
                                <button className="Buttons" disabled style={{padding:"1rem"}}>       agregar mensaje error
                                    Add to Cart
                                </button>
                            )}
                        </div>
                    </div>
                </Link>
                <div style={{display:"flex", alignItems: "center", justifyContent: "center"}}>
                    <p >
                        Remove Item <button style={{fontSize:"1.3rem", border:"none", paddingLeft:"1rem", backgroundColor:"transparent"}}> X </button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WishlistItem;