import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCart, deleteCart, changeQuantity, deleteAllCart } from "../../Redux/actions";
import {AiOutlineShoppingCart, AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Checkout from "../Checkout/Checkout";
import "./Cart.css"

const Cart = ({ Carrito }) =>{
    
    const dispatch = useDispatch();
    const user_id = useSelector(state => state.LocalPersist.userProfile.id);
    const [quantitys, setQuantity] = useState(1);
    const [subTotal, setSubTotal] = useState(0);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        dispatch(getCart(user_id));
    },[dispatch]);

    useEffect(() => {
      let newSubTotal = 0;
      Carrito?.forEach((product) => {
        newSubTotal += product.price * parseInt(product.Cart_Books.quantity, 10);
      });
      setSubTotal(newSubTotal);
    }, [Carrito]);

    const cartQuantity = Carrito?.reduce((accumulator, product) => accumulator + parseInt(product.Cart_Books.quantity, 10), 0);  
    let servicio = parseFloat((subTotal * 0.10).toFixed(2));
    let total = subTotal + servicio;


    const handleClickAdd = (user_id, id, title, image, price, quantity) => {  //PARA SUMAR UNA UNIDAD DE UN PRODUCTO DEL CARRITO
        quantity = parseInt(quantity) + 1;
        dispatch(changeQuantity(user_id, id, quantity));
        alert("One unit has been added to the cart.");
        dispatch(getCart(user_id));
    }


    const handleClickDelete = (user_id, id, title, image, price, quantity) => {  //PARA QUITAR UNA UNIDAD DE UN PRODUCTO DEL CARRITO
        if(parseInt(quantity) > 1) {
            quantity = parseInt(quantity) - 1;
            dispatch(changeQuantity(user_id, id, quantity));
            alert("One unit has been removed from the cart.");
        } else {
            alert("Cannot remove more units of this product.");  
        }
        dispatch(getCart(user_id));
    }


    const handleDeleteFromCart = async (user_id, id) => {  //PARA BORRAR UN PRODUCTO DEL CARRITO
      await dispatch(deleteCart(user_id, id));
      setQuantity(0);
      alert("Book has been removed from cart.");
      dispatch(getCart(user_id));
    };

    const handleDeleteCart = async (user_id) =>{   //PARA VACIAR EL CARRITO
      await dispatch(deleteAllCart(user_id));
      setQuantity(0);
      alert("Carrito vaciado correctamente")
      dispatch(getCart(user_id));
    }


    const handlePay = (event) => {   //PARA PROCEDER AL PAGO
      event.preventDefault();
      if (Carrito) {
        setShowForm(true);
      } else {
        alert("Debe seleccionar productos")
        return;
      }
    } 

    return (       
        <div className="CartContainer">
            <div className="titleContainerCart">
                <p className="titleContainerCartLine"></p>
                <h1 className="titleContainerCartText">My Shopping Cart</h1>
            </div> 

            {showForm ? (
                <Checkout total={total}/>
            ) : (
                <>
                <div className="cart_heading grid-five-column" style={{gridTemplateColumns: "3fr 1fr 1fr 1fr 0.3fr"}}>
                    <p>Item</p>
                    <p className="cart-hide">Price</p>
                    <p>Quantity</p>
                    <p className="cart-hide">Subtotal</p>
                    <p>Remove</p>
                </div >
                <hr className="hrCart"/>

                {Carrito?.length > 0 && Carrito?.map((prod) => {
                    return (
                        <div className="cart_heading grid-five-column" style={{padding:"0.6rem 0", gridTemplateColumns: "3fr 1fr 1fr 1fr 0.3fr"}}>
                            <div className="cart-image--name">
                                <div>
                                    <figure>
                                        <img src={prod.image} alt={prod.id} />
                                    </figure>
                                </div>
                                <div>
                                    <p style={{color:"black", fontWeight:"bold", padding:"0.5rem 0"}}>{prod.title}</p>
                                    <p>{prod.author}</p>
                                </div>
                            </div>
                            <div className="cart-hide">
                                <p>USD{' '}{prod.price} </p>
                            </div>

                            <div className="BotoneraSumaResta" style={{color:"grey"}}>
                                <button className="ButtonsSumaResta" onClick={()=> handleClickDelete(user_id, prod.id, prod.title, prod.image, prod.price, prod.Cart_Books.quantity)} value="less" disabled={parseInt(prod.Cart_Books.quantity) === 1}>-</button>
                                    {prod.Cart_Books.quantity}
                                <button className="ButtonsSumaResta" onClick={() => handleClickAdd(user_id, prod.id, prod.title, prod.image, prod.price, prod.Cart_Books.quantity)} style={{color:"grey"}} value="add" >+</button>
                            </div>

                            <div className="cart-hide">
                                <p> USD{' '}{prod.price * prod.Cart_Books.quantity} </p>
                            </div>

                            <div>
                                <button onClick={()=>handleDeleteFromCart(user_id, prod.id)} value="less" className="remove_icon_Cart" ><AiOutlineDelete className="remove_icon_Cart" /></button>
                            </div>
                        </div>
                    ); 
                })}

                <hr className="hrCart"/>
                
                <div className="CartButtonsContainer">
                    <button onClick={() => handleDeleteCart(user_id)} className="Buttons" style={{padding:"1rem 1.5rem", backgroundColor:"#b38a83"}}>Clear Cart</button>
                    <Link to="/store"> 
                        <button className="Buttons" style={{padding:"1rem 1.5rem"}}> CONTINUE SHOPPING </button>
                    </Link>
                </div>
                <div className="ContenedorDetallePago">
                    <div style={{paddingBottom: '1rem'}} className="GridThreeColumns">
                        <span style={{color:"grey"}}>Subtotal: </span>
                        <span style={{fontWeight:"bold"}}>USD{' '}{subTotal}</span>
                    </div>
                    <div style={{paddingBottom: '1rem'}} className="GridThreeColumns">
                        <span style={{color:"grey"}}>Shopping Fee: </span>
                        <span style={{fontWeight:"bold"}}>USD{' '}{servicio}</span>
                    </div>
                    <hr style={{ width: '95%', margin: '1% auto', border: '1px solid grey', paddingRight: '20%'}}></hr>
                    <div style={{paddingTop: '1rem'}} className="GridThreeColumns">
                        <span style={{color:"grey"}}>Total Order: </span>
                        <span style={{fontWeight:"bold"}}>USD{' '}{total}</span>
                    </div>
                    <div style={{marginTop:"2rem", display:"flex", justifyContent:"center"}}>
                        <button className="Buttons" style={{padding:"1rem"}} onClick={handlePay}>Checkout</button>
                    </div>
                </div>
                </>
            )}
        </div>
    )
}   

export default Cart;