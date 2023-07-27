import Cart from "../../../views/Cart/Cart";
import { useEffect } from 'react';
import { getCarrito } from '../../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import "./CartContainer.css";

const CarritoContainer = () => {

    //onst Cart = useSelector((state) => state.LocalPersist.Carrito.Products);
    // const userId = useSelector(state => state.LocalPersist.userInfo.id);
          
    return (
        <div className="CartContainerContair"> 
            {Cart?.length === 0 ? (
                <>
                    <p className="MessageEmptyCart">Empty cart, go back to the store to get your new book</p>
                    <Link to="/store" className="Buttons">Store</Link>
                </>
                ) : (
                    <>
                    {Cart?.length > 0 && Cart?.map((prod) => {
                        return (
                            <Cart
                                key={prod.id} 
                                id={prod.id}
                                image={prod.image}
                                title={prod.title}
                                price={prod.price}
                                quantityProd={prod.Cart_Products.quantity}
                            />
                        ); 
                    })}
                    </>
                )}
        </div>
    );
}

export default CarritoContainer;