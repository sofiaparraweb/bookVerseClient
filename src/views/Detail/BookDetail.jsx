import PageNavigation from "../../components/PageNavigation/PageNavigation";
import axios from "axios";
import { useState, useEffect } from 'react';
import { getCart, addToCart, getWishlist, addWishlist, removeWishlist } from "../../Redux/actions"
import { AiTwotoneContainer, AiOutlineGlobal, AiOutlineRead, AiOutlineSchedule, AiOutlineHeart, AiFillHeart} from "react-icons/ai";
import Stars from "./Stars"
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import "./BookDetail.css";
import ReviewForm from "../reviewForm/ReviewForm";


const Detail = () => {
    
    const { id } = useParams();
    const { isAuthenticated } = useAuth0();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user_id = useSelector(state => state.LocalPersist.userProfile.id);
    console.log(user_id)
    const Cart = useSelector((state) => state.LocalPersist.cart.Books);
    const wish = useSelector((state) => state.LocalPersist.wish);
    const [quantity, setQuantity] = useState(1);
    const [book, setBook] = useState({});
    const [userRating, setUserRating] = useState(null);
    const [isFav, setIsFav] = useState(false);
    
    // const url = "https://bookverse-m36k.onrender.com";
    const url = "http://localhost:3001";
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${url}/books/${id}`);
                setBook(response.data);
            } catch (error) {
                console.error("Error fetching book details:", error);
            }
        }
        fetchData(); // Llamar a la función para que realice la solicitud
    }, [id]);


    const handleFavorite = (event) => {
        event.preventDefault()
        if (isFav) {
            setIsFav(false);
            dispatch(removeWishlist(user_id, id));
        } else {
            setIsFav(true);
            dispatch(addWishlist(user_id, id));
            dispatch(getWishlist(user_id));
        }
    };
    
    useEffect(() => {
        wish && wish?.forEach((fav) => {
            if (fav.id === id) {
                setIsFav(true);
            }
        });
    }, [wish, id]);
    
    
    const totalRatings = book.Reviews && book.Reviews?.reduce((total, review) => total + review.rating, 0);
    const averageRating = totalRatings / book.Reviews?.length;

    const contentCount = book.Reviews?.length;


    const handleAdd = (event) => {  // --------------------------------------------------ADD BUTTON
      event.preventDefault()
      setQuantity(quantity + 1); // + 1 book
    };

    const handleDelete = (event) => {  // --------------------------------------------------DELETE BUTTON
      event.preventDefault()
      if (quantity > 0) {
        setQuantity(quantity - 1); // - 1 book
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

    // const handleAddToWish = (user_id, id) => {  // --------------------------------------------------ADD BOOKS TO WISHLIST
    //     const wishL = wish;
    //     console.log(wishL)
    //     const productInWish = wishL.find((item) => item.id === id); 
    //     if (isAuthenticated) {
    //         if (productInWish) {
    //             alert("Book is already in Wishlist.");
    //         } else {
    //             dispatch(addWishlist(user_id, id));
    //             alert("Book has been added to your wishlist.");
    //         }
    //     } else {
    //         alert('You need to log in to add books to the wishlist.');
    //     }
    // }

    return (
        <form>
        {/* <form onSubmit={handleSubmit}> */}
            <div className="DetailContainer">
                <PageNavigation title={book?.title}/>
                <div className="ContainerContainer">
                    <div className="GridTwoColumns" >
                        <div className="DetailImages">
                            <img src={book?.image} alt="bookImage"></img>
                        </div>

                        <div className="DetailData">
                            <div className="GridTwoColumns" style={{ gridTemplateColumns: "72% 28%"}} >
                                <h2>{book?.title}</h2>
                                <div style={{display:"flex", flexDirection:"row", alignItems: "center"}}>
                                    {isFav ? (
                                        <button onClick={handleFavorite} className="HeartFav">
                                            <AiFillHeart style={{color:"#b38a83", fontSize:"1.5rem"}}/>
                                        </button>
                                    ) : (
                                        <button onClick={handleFavorite} className="HeartFav">
                                            <AiOutlineHeart style={{color:"#b38a83", fontSize:"1.5rem"}}/>
                                        </button>
                                    )}
                                    <p style={{color:"grey", paddingLeft:"1rem"}}>Add to wishlist</p>
                                </div>
                            </div>
                            <p>
                                <span className="outerTextStyle">by</span> 
                                <span className="innerTextStyle"> {book?.author}</span> 
                                <span className="outerTextStyle" style={{padding:"0 1rem"}}>|</span> 
                                <span className="outerTextStyle">Format </span> 
                                <span className="innerTextStyle"> {book?.Formats?.map((f) => f.name).join(' , ')}</span>
                            </p>

                            <div style={{display:"flex", flexDirection:"row"}}>    
                                <Stars stars={averageRating} reviews={contentCount}/>
                            </div>

                            <p style={{color:"grey"}}>USD {book?.price},00</p>
                            <p >{book?.description}</p>
                            <hr className="hrStyle"></hr>
                            <div className="DetailDetail">
                                <div className="DetailIcons">
                                    <p>pages</p>
                                    <AiTwotoneContainer className="IconStyleDetail"/>
                                    <p style={{fontWeight:"bold"}}>{book?.pages}</p>
                                </div>
                                <div className="DetailIcons">
                                    <p>Language</p>
                                    <AiOutlineGlobal className="IconStyleDetail"/>
                                    <p style={{fontWeight:"bold"}}>{book?.Languages?.map((l) => l.name).join(' , ')}</p>
                                </div>
                                <div className="DetailIcons">
                                    <p>publisher</p>
                                    <AiOutlineRead className="IconStyleDetail"/>
                                    <p style={{fontWeight:"bold"}}>{book?.Publishers?.map((p) => p.name).join(' , ')}</p>
                                </div>
                                <div className="DetailIcons">
                                    <p>Publication date</p>
                                    <AiOutlineSchedule className="IconStyleDetail"/>
                                    <p style={{fontWeight:"bold"}}>{book?.publicationDate}</p>
                                </div>
                            </div>
                            <hr className="hrStyle"></hr>
                            <div className="Botonera">
                                <div className="BotoneraSumaResta">
                                <button className="ButtonsSumaResta" onClick={handleDelete} value="less" >-</button>
                                    {quantity}
                                <button className="ButtonsSumaResta" onClick={handleAdd} value="add" >+</button>

                                </div>
                                {isAuthenticated ? (
                                    <button className="Buttons" onClick={()=>{handleAddToCart(event, user_id, id, quantity)}}>
                                        Add to Cart
                                    </button>
                                ) : (
                                    <button className="Buttons" onClick={() => alert('You need to log in to buy books.')} >
                                        Add to Cart
                                    </button>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
           
                <div className="titleContainer" style={{marginBottom:"0"}}>
                    <p className="titleContainerLine"></p>
                    <h1 className="titleContainerTexto">Customer Reviews</h1>
                </div>
                <div style={{padding:"1rem 6rem"}}>
                    <ReviewForm id={id} />
                    <div className="ComentariosDetail">
                    <p style={{fontSize:"1.2rem", paddingBottom:"1.5rem"}}>Others Reviews</p>
                        {book.Reviews?.map((con)=>{
                            return(
                                <div>
                                    <p style={{paddingBottom:"0.5rem"}}>{con.email} | {con.rating} of 5</p>
                                    <p style={{color:"grey"}}>{con.content} </p>
                                    <hr style={{margin:"1.5rem"}} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Detail;