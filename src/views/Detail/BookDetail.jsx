import PageNavigation from "../../components/PageNavigation/PageNavigation";
import { AiTwotoneContainer, AiOutlineGlobal, AiOutlineRead, AiOutlineSchedule} from "react-icons/ai";
import "./BookDetail.css";

const BookDetail = () => {

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

    const title = "hola"
    return (
        <form>
        {/* <form onSubmit={handleSubmit}> */}
            <div className="DetailContainer">
                <PageNavigation title={title}/>
                Este es el detalle de los productos
                <div className="ContainerContainer">
                    <div className="GridTwoColumns">
                        <div className="DetailImages">
                            <img src="https://m.media-amazon.com/images/I/517l4WXFFhL.jpg" alt="bookImage"></img>
                        </div>

                        {/* <div className="GridFourColumns">
                            {Image.map((currEl, index) => {
                                return(
                                    <figure>
                                        <img src={currEl.image} alt={currEl.title} className="BoxImageStyle" key={index} onClick={() => setMainImage(curElm)}></img>
                                    </figure>
                                )
                            })}
                        </div>
                        <div className="main-screen">
                            <img src={mainImage.url} alt={mainImage.filename} />
                        </div> */}

                        <div className="DetailData">
                            <h2>title</h2>
                            <p>by author | Format</p>
                            <p>stars</p>
                            <p>reviews</p>
                            <p className="DetailPrice">$ price</p>
                            <p>description</p>
                            <hr></hr>
                            <div className="DetailDetail">
                                <div className="DetailIcons">
                                    <p>pages</p>
                                    <AiTwotoneContainer className="IconStyleDetail"/>
                                    <p></p>
                                </div>
                                <div className="DetailIcons">
                                    <p>Language</p>
                                    <AiOutlineGlobal className="IconStyleDetail"/>
                                    <p></p>
                                </div>
                                <div className="DetailIcons">
                                    <p>Publisher</p>
                                    <AiOutlineRead className="IconStyleDetail"/>
                                    <p></p>
                                </div>
                                <div className="DetailIcons">
                                    <p>Publication date</p>
                                    <AiOutlineSchedule className="IconStyleDetail"/>
                                    <p></p>
                                </div>
                            </div>
                            <hr></hr>
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