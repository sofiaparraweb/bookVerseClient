import PageNavigation from "../../components/PageNavigation/PageNavigation";
import axios from "axios";
import { useState, useEffect } from 'react';
import { AiTwotoneContainer, AiOutlineGlobal, AiOutlineRead, AiOutlineSchedule} from "react-icons/ai";
import Stars from "./Stars"
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./BookDetail.css";


const Detail = () => {
    
    const { id } = useParams();
    const { isAuthenticated } = useAuth0();
    const [book, setBook] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://localhost:3001/books/${id}`);
                setBook(response.data);
            } catch (error) {
                console.error("Error fetching book details:", error);
            }
        }
        fetchData(); // Llamar a la función para que realice la solicitud
    }, [id]);

    //const dispatch = useDispatch();
    // console.log(bookDetail);

    // const [currentImage, setCurrentImage] = useState(images[0]);
    // const user_id = useSelector(state => state.LocalPersist.userInfo.id);
    // const userName = useSelector(state => state.LocalPersist.userInfo.name);
    // const email = useSelector(state => state.LocalPersist.userInfo.email);

    // useEffect(()=>{
    //     dispatch(getCarrito(id_books))
    // },[dispatch])

    // const handleImageChange = (imageUrl) => {
    //     setCurrentImage(imageUrl);
    // };

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

      // const handleAdd = (event) => {  // --------------------------------------------------BOTON SUMAR
  //   event.preventDefault()
  //   if (quantity < stock) {
  //     setQuantity(quantity + 1); // Agrega 1 a la cantidad actual
  //   } else {
  //     setQuantity(stock);
  //     toast.error("La cantidad deseada supera el stock disponible", {
  //       duration: 3000
  //     })
  //   }
  // };

  // const handleDelete = (event) => {  // --------------------------------------------------BOTON SUMAR
  //   event.preventDefault()
  //   if (quantity > 0) {
  //     setQuantity(quantity - 1); // Resta 1 a la cantidad actual
  //   }
  // };

  // const handleAddToCart = (user_id, id, quantity) => {  // --------------------------------------------------AGREGAR PRODUCTOS AL CARRITO
  //   const cartItems = Cart;
  //   const productInCart = cartItems.find(item => item.id === id); //Verificamos si el producto ya esta en el carrito

  //   if (productInCart) {
  //     toast.error("El producto ya está en el carrito", {
  //       duration: 3000
  //     });
  //   } else if(quantity>stock) {
  //     toast.error("La cantidad deseada supera el stock disponible", {
  //       duration: 3000
  //     })    
  //   } else {
  //     dispatch(addToCart(user_id, id, quantity));
  //     toast.success("Producto agregado al carrito", {
  //       duration: 3000
  //     })
  //     dispatch(getCarrito(user_id))
  //   }
  // }

    return (
        <form>
        {/* <form onSubmit={handleSubmit}> */}
            <div className="DetailContainer">
                <PageNavigation title={book?.title}/>
                <div className="ContainerContainer">
                    <div className="GridTwoColumns" >
                        <div className="DetailImages">
                            <img src={book.image} alt="bookImage"></img>
                        </div>

                        {/* <div className="images-column">
                            {Image.map((imageUrl, index) => {
                                return(
                                    <img>
                                        key={index} 
                                        src={imageUrl} 
                                        alt={imageUrl} 
                                        className={`thumbnail ${currentImage === imageUrl ? "selected" : ""}`} 
                                        onClick={() => handleImageChange(imageUrl)}
                                    </img>
                                )
                            })}
                        </div>
                        <div className="current-image-column">
                            <img src={currentImage} alt="Current Product" className="current-image"/>
                        </div> */}

                        <div className="DetailData">
                            <h2>{book.title}</h2>
                            <p>
                                <span className="outerTextStyle">by</span> 
                                <span className="innerTextStyle"> {book.author}</span> 
                                <span className="outerTextStyle" style={{padding:"0 1rem"}}>|</span> 
                                <span className="outerTextStyle">Format </span> 
                                <span className="innerTextStyle"> {book.Formats?.map((f) => f.name).join(' , ')}</span>
                            </p>
                            {/* <div style={{display:"flex", flexDirection:"row"}}>    
                                <Stars stars={ebooks[0].stars} reviews={book.reviews} />
                            </div> */}
                            <p style={{color:"grey"}}>USD {book.price},00</p>
                            <p >{book.description}</p>
                            <hr className="hrStyle"></hr>
                            <div className="DetailDetail">
                                <div className="DetailIcons">
                                    <p>pages</p>
                                    <AiTwotoneContainer className="IconStyleDetail"/>
                                    <p style={{fontWeight:"bold"}}>{book.pages}</p>
                                </div>
                                <div className="DetailIcons">
                                    <p>Language</p>
                                    <AiOutlineGlobal className="IconStyleDetail"/>
                                    <p style={{fontWeight:"bold"}}>{book.Languages?.map((l) => l.name).join(' , ')}</p>
                                </div>
                                <div className="DetailIcons">
                                    <p>publisher</p>
                                    <AiOutlineRead className="IconStyleDetail"/>
                                    <p style={{fontWeight:"bold"}}>{book.Publishers?.map((p) => p.name).join(' , ')}</p>
                                </div>
                                <div className="DetailIcons">
                                    <p>Publication date</p>
                                    <AiOutlineSchedule className="IconStyleDetail"/>
                                    <p style={{fontWeight:"bold"}}>{book.publicationDate}</p>
                                </div>
                            </div>
                            <hr className="hrStyle"></hr>
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
                                    <button className="Buttons" onClick={()=>handleAddToCart(user_id, id, quantity)}>
                                        Add to Cart
                                    </button>
                                ) : (
                                    <button className="Buttons" disabled>       agregar mensaje error
                                        Add to Cart
                                    </button>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Detail;