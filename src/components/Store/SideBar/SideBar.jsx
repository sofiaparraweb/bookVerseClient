import style from "./SideBar.module.css"
import Filter from "../Filtros/Filter"
import {AiOutlineShoppingCart } from "react-icons/ai";
import { getCarrito } from "../../../Redux/actions"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from "react-hot-toast";

const SideBar = ({ setCurrentPage }) =>{

  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const Carrito = useSelector(state=>state.LocalPersist.Carrito.Products)
  const userId = useSelector(state => state.LocalPersist.userInfo.id);

  useEffect(() => {
    dispatch(getCarrito(userId));
  }, [userId]);

  //const cartQuantity = Carrito?.reduce((accumulator, product) => accumulator + parseInt(product.Cart_Products.quantity, 10), 0);
  
  const handleCartClick = () => {
    if (isAuthenticated) {
      navigate('/cart');
    } else {
      toast.error('Debe iniciar sesión para acceder al carrito.');
    }
  };
 
  return (
    <div className={style.sidebarContenedor}>
      <Toaster />
      <span className={style.Changuito}>
        <button onClick={handleCartClick} >
          <AiOutlineShoppingCart size={30} />
          {isAuthenticated ? <p className={style.NumeroChango}>{Carrito?.length || 0}</p> : <p className={style.NumeroChango}>0</p>}         
        </button>
      </span>
      <div className={style.ContenedorFiltroOrden}>
        <Filter setCurrentPage={setCurrentPage}/>
      </div>
    </div>
  )
}

export default SideBar;