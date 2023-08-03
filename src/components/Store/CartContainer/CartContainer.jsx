import Cart from "../../../views/Cart/Cart";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import "./CartContainer.css";

const CarritoContainer = () => {

    const Carrito = useSelector(state => state.LocalPersist.cart);
    const userId = useSelector(state => state.LocalPersist.userProfile.id);
          
    return (
        <div className="CartContainerContair"> 
            {Carrito.length === 0 ? (
                <div className="MessageEmptyCart">
                    <p style={{paddingBottom:"2rem"}}>Empty cart, go back to the store to get your new book</p>
                    <Link to="/store" >
                        <button className="Buttons" style={{padding:"1rem"}}> Back to Store </button>
                    </Link>
                </div>
            ) : (
                Carrito.Books?.length > 0 ? <Cart Carrito={Carrito.Books} /> : "holis"
            )
            }
        </div>
    );
}

export default CarritoContainer;