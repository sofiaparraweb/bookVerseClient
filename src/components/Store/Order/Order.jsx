import { useDispatch } from "react-redux";
import {orderByPrice} from "../../../Redux/actions"
import style from "./Order.module.css"

const Order = ({ setCurrentPage }) => {

    const dispatch = useDispatch();

    const orderProductPrice = (event) => {
        dispatch(orderByPrice(event.target.value));
        setCurrentPage(1)
    };

    return (
        <div className={style.OrderContainer}>
            <p className={style.LabelOrder}>Ordenar por</p>
            <select name="orderProductPrice" onChange={orderProductPrice} className={style.SelectorOrder}>
                <option key={0} value="all" >Mas relevantes</option>  
                <option key={2} value="asc">Menor precio</option>
                <option key={3} value="des">Mayor precio</option>
            </select>
        </div>
    )
}

export default Order;