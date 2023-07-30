import PageNavigation from "../../components/PageNavigation/PageNavigation";
import axios from "axios";
import { useState, useEffect } from 'react';
import { getCart, addToCart } from "../../Redux/actions"
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
    const user_id = useSelector(state => state.LocalPersist.userInfo.id);
    const Cart = useSelector((state) => state.LocalPersist.cart.Books);
    // const userName = useSelector(state => state.LocalPersist.userInfo.name);
    // const email = useSelector(state => state.LocalPersist.userInfo.email);
    const [quantity, setQuantity] = useState(1);
    const [book, setBook] = useState({});
    const [isFav, setIsFav] = useState(false);
    const [userRating, setUserRating] = useState(null);

    const handleFavorite = () => {
        if (isFav) {
            setIsFav(false);
            // removeFavorite(id);
        } else {
            setIsFav(true);
            // addFavorites({ id, title, genres, image });
        }
    };

    // useEffect(() => {
    //     myFavorites.forEach((fav) => {
    //       if (fav.id === id) {
    //         setIsFav(true);
    //       }
    //     });
    //   }, [myFavorites, id]);

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

    // const handleSubmit = async (event) => {
    //   event.preventDefault()
    //   try {
    //     console.log(holis)
    //     await axios.post('https://lagruta.onrender.com/review/post', review)
    //     //await axios.post('http://localhost:3001/review/post', review)
    //     .then(res=>alert("Gracias por opinar sobre nuestro producto!"))
    //     .catch((error) => alert(error))
    //   } catch (error) {
    //     console.log(error);
    //   }
    // } 

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

    const handleAddToCart = (user_id, id, quantity) => {  // --------------------------------------------------AGREGAR PRODUCTOS AL CARRITO
        const cartItems = Cart;
        const productInCart = cartItems.find(item => item.id === id); //Verificamos si el producto ya esta en el carrito
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
                            {/* <div style={{display:"flex", flexDirection:"row"}}>    
                                <Stars stars={book.stars} reviews={book.reviews} />
                            </div> */}
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
                                    <button className="Buttons" onClick={()=>{handleAddToCart(user_id, id, quantity)}}>
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
           
               <ReviewForm bookId={id} />
            </div>
        </form>
    )
}

export default Detail;