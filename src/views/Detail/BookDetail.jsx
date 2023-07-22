import PageNavigation from "../../components/PageNavigation/PageNavigation";
import { useState } from "react";
import { AiTwotoneContainer, AiOutlineGlobal, AiOutlineRead, AiOutlineSchedule} from "react-icons/ai";
import Stars from "./Stars"
import "./BookDetail.css";

const BookDetail = () => {

    const ebooks = [
        {
          "id": 1,
          "author": "John Doe",
          "title": "The Adventures of Wonderland",
          "price": 9.99,
          "description": "Follow Alice as she enters a magical world filled with curious creatures and enchanting adventures.",
          "publisher": "Adventure Books Ltd.",
          "pages": 320,
          "format": "PDF",
          "language": "English",
          "category": "Adventure",
          "reviews": 23,
          "stars": 4.4,
          "publicationDate": "2023-07-15",
          "image":[
            {
              "url": "https://m.media-amazon.com/images/I/51QqAHWPH7L._SY346_.jpg",
              "title": "image1"
            },
            {
              "url": "https://m.media-amazon.com/images/I/61RqoZLpaJL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
              "title": "image2"
            },
            {
              "url": "https://m.media-amazon.com/images/I/51cuIOKdL4L._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
              "title": "image3"
            },
            {
              "url": "https://m.media-amazon.com/images/I/51kYdfdd4WL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
              "title": "image4"
            },
            {
              "url": "https://m.media-amazon.com/images/I/51HiS06teZL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
              "title": "image5"
            },
          ]
        },
    ]

    // const [currentImage, setCurrentImage] = useState(images[0]);

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
                <PageNavigation title={ebooks[0].title}/>
                <div className="ContainerContainer">
                    <div className="GridTwoColumns">
                        <div className="DetailImages">
                            <img src="https://m.media-amazon.com/images/I/517l4WXFFhL.jpg" alt="bookImage"></img>
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
                            <h2>{ebooks[0].title}</h2>
                            <p>
                                <span className="outerTextStyle">by</span> 
                                <span className="innerTextStyle"> {ebooks[0].author}</span> 
                                <span className="outerTextStyle" style={{padding:"0 1rem"}}>|</span> 
                                <span className="outerTextStyle">Format </span> 
                                <span className="innerTextStyle"> {ebooks[0].format}</span>
                            </p>
                            <div style={{display:"flex", flexDirection:"row"}}>    
                                <Stars stars={ebooks[0].stars} reviews={ebooks[0].reviews} />
                            </div>
                            <p style={{color:"grey"}}>$ {ebooks[0].price}</p>
                            <p >{ebooks[0].description}</p>
                            <hr className="hrStyle"></hr>
                            <div className="DetailDetail">
                                <div className="DetailIcons">
                                    <p>pages</p>
                                    <AiTwotoneContainer className="IconStyleDetail"/>
                                    <p style={{fontWeight:"bold"}}>{ebooks[0].pages}</p>
                                </div>
                                <div className="DetailIcons">
                                    <p>Language</p>
                                    <AiOutlineGlobal className="IconStyleDetail"/>
                                    <p style={{fontWeight:"bold"}}>{ebooks[0].language}</p>
                                </div>
                                <div className="DetailIcons">
                                    <p>Publisher</p>
                                    <AiOutlineRead className="IconStyleDetail"/>
                                    <p style={{fontWeight:"bold"}}>{ebooks[0].publisher}</p>
                                </div>
                                <div className="DetailIcons">
                                    <p>Publication date</p>
                                    <AiOutlineSchedule className="IconStyleDetail"/>
                                    <p style={{fontWeight:"bold"}}>{ebooks[0].publicationDate}</p>
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
                                <button className="Buttons" >
                                    Add to Cart
                                </button>
                                {/* <button className="Buttons" onClick={()=>handleAddToCart(user_id, id, quantity)} backgroundColor='#B9362C' _hover={{ color:'#124476'}} color='white' fontWeight='normal' fontSize='20px'>
                                    Add to Cart
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default BookDetail;