// import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { getCarrito, changeQuantity, deleteAllCarrito, deleteCarrito } from "../../../Redux/actions";
import {AiOutlineShoppingCart, AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom"
import "./Cart.css"

const Cart = () =>{
// const Cart = ({ id, name, image, price, stock, quantityProd}) =>{

// const dispatch = useDispatch();
// const Cart = useSelector((state) => state.LocalPersist.Carrito.Products);
// const userId = useSelector(state => state.LocalPersist.userInfo.id);
// const [quantitys, setQuantity] = useState(1);
// const [subTotal, setSubTotal] = useState(0);
const [showForm, setShowForm] = useState(false);

// useEffect(() => {
//   dispatch(getCarrito(userId));
// },[dispatch]);

// useEffect(() => {
//   let newSubTotal = 0;
//   Cart?.forEach((product) => {
//     newSubTotal += product.price * parseInt(product.Cart_Products.quantity, 10);
//   });
//   setSubTotal(newSubTotal);
// }, [Cart]);

// const cartQuantity = Cart?.reduce((accumulator, product) => accumulator + parseInt(product.Cart_Products.quantity, 10), 0);  
// let servicio = subTotal * 0.10;
// let total = subTotal + servicio;


// const handleClickAdd = (user_id, id, quantity) => {  //PARA SUMAR UNA UNIDAD DE UN PRODUCTO DEL CARRITO
//   if(parseInt(quantityProd) < stock) {
//     quantity = parseInt(quantityProd) + 1;
//     dispatch(changeQuantity(user_id, id, quantity));
//     toast.success("Se agrego una unidad al carrito", {
//       duration: 3000
//     })
//   } else {
//     toast.error("La cantidad supera el stock disponible", {
//       duration: 3000
//     })    
//   }
//   dispatch(getCarrito(user_id));
// }


// const handleClickDelete = (user_id, id, quantity) => {  //PARA QUITAR UNA UNIDAD DE UN PRODUCTO DEL CARRITO
//   if(parseInt(quantityProd) > 1) {
//     quantity = parseInt(quantityProd) - 1;
//     dispatch(changeQuantity(user_id, id, quantity));
//     toast.success("Se quito una unidad del carrito", {
//       duration: 3000
//     })
//   } else {
//     toast.error("No se pueden quitar mas unidades de este producto", {
//       duration: 3000
//     })    
//   }
//   dispatch(getCarrito(user_id));
// }


// const handleDeleteFromCart = async (userId, id) => {  //PARA BORRAR UN PRODUCTO DEL CARRITO
//   await dispatch(deleteCarrito(userId, id));
//   setQuantity(0);
//   toast.success("Se ha eliminado un producto del carrito", {
//     duration: 3000
//   });
//   dispatch(getCarrito(userId));
// };


// const handleDeleteCart = async (userId) =>{   //PARA VACIAR EL CARRITO
//   await dispatch(deleteAllCarrito(userId));
//   setQuantity(0);
//   toast.success("Carrito vaciado correctamente", {
//     duration: 3000
//   })
//   dispatch(getCarrito(userId));
// }


// const handlePay = (event) => {   //PARA PROCEDER AL PAGO
//   event.preventDefault();
//   if (Cart) {
//     setShowForm(true);
//   } else {
//     toast.error("Debe seleccionar productos", {
//       duration: 3000
//     })
//     return;
//   }
// } 

    return (       
        <div className="CartContainer"> 
            <div className="cart_heading grid-five-column">
                <p>Item</p>
                <p className="cart-hide">Price</p>
                <p>Quantity</p>
                <p className="cart-hide">Subtotal</p>
                <p>Remove</p>
            </div >
            <hr className="hrCart"/>

            <div className="cart_heading grid-five-column">
                <div className="cart-image--name">
                    <div>
                        <figure>
                            <p>imagen</p>
                            {/* <img src={image} alt={id} /> */}
                        </figure>
                    </div>
                    <div>
                        <p>title</p>
                        {/* <p>{title}</p> */}
                        <p>Author</p>
                        {/* <p>{author}</p> */}
                    </div>
                </div>
                <div className="cart-hide">
                    <p> USD{' '}price </p>
                    {/* <p>USD{' '}{price},00 </p> */}
                </div>

                <div className="BotoneraSumaResta">
                    <button className="ButtonsSumaResta" style={{color:"grey"}} value="less" >-</button>
                        <p>cantidad</p>
                    <button className="ButtonsSumaResta" style={{color:"grey"}} value="add" >+</button>
                    {/* <button className="ButtonsSumaResta" onClick={()=> handleClickDelete(userId, id, name, image, price, stock)} style={{color:"grey"}} value="less" disabled={parseInt(quantityProd) === 1}>-</button>
                        {quantityProd}
                    <button className="ButtonsSumaResta" onClick={() => handleClickAdd(userId, id, name, image, price, stock)} style={{color:"grey"}} value="add" disabled={parseInt(quantityProd) === stock}>+</button> */}
                </div>

                <div className="cart-hide">
                    <p> USD{' '}subtotal </p>
                    {/* <p> USD{' '}{price * quantityProd},00 </p> */}
                </div>

                <div>
                    <AiOutlineDelete className="remove_icon"/>
                    {/* <button onClick={()=>handleDeleteFromCart(userId, id)} className="remove_icon" value="less" ><AiOutlineDelete /></button> */}
                </div>
            </div>
            <hr className="hrCart"/>

    {/* //{showForm ? (
        //     <FormPago total={total}/>
        // ) : (
            )} */}
            {/* 
            //       <Card
    //     */}
            <div className="CartButtonsContainer">
                <Link to="/store"> 
                    <button className="Buttons" style={{padding:"1rem 1.5rem"}}> CONTINUE SHOPPING </button>
                </Link>
                <button className="Buttons" style={{padding:"1rem 1.5rem"}}>Clear Cart</button>
                {/* <button onClick={() => handleDeleteCart(userId)} className="Buttons">x</button> */}
            </div>
            <div className="ContenedorDetallePago">
                <div style={{paddingBottom: '1rem'}} className="GridThreeColumns">
                    <span style={{color:"grey"}}>Subtotal: </span>
                    <span style={{fontWeight:"bold"}}>USD{' '}subTotal</span>
                </div>
                <div style={{paddingBottom: '1rem'}} className="GridThreeColumns">
                    <span style={{color:"grey"}}>Shopping Fee: </span>
                    <span style={{fontWeight:"bold"}}>USD{' '}servicio</span>
                    {/* <span style={{fontWeight:"bold"}}>USD{' '}{servicio},00</span> */}
                </div>
                <hr style={{ width: '95%', margin: '1% auto', border: '1px solid grey', paddingRight: '20%'}}></hr>
                <div style={{paddingTop: '1rem'}} className="GridThreeColumns">
                    <span style={{color:"grey"}}>Order Total: </span>
                    <span style={{fontWeight:"bold"}}>USD{' '}total</span>
                    {/* <span style={{fontWeight:"bold"}}>USD{' '}{total},00</span> */}
                </div>
                {/* <button className="Buttons" style={{padding:"1rem"}} onClick={handlePay}>Pay</button> */}
            </div>
        </div>
    )
}   

export default Cart;