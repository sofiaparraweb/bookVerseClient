import { useDispatch } from "react-redux";
import { orderByPrice, orderByTitle } from "../../../Redux/actions"
import "./Order.css"

const Order = ({ setCurrentPage }) => {

    const dispatch = useDispatch();

    const orderBookPrice = (event) => {
        dispatch(orderByPrice(event.target.value));
        dispatch(orderByTitle(event.target.value));
        setCurrentPage(1)
    };

    // const orderBookTitle = (event) => {
    //     dispatch(orderByTitle(event.target.value));
    //     setCurrentPage(1)
    // };

    return (
        <div className="OrderContainer">
            <h1 className="LabelOrder">ORDER BY </h1>
            <select name="orderProductPrice" onChange={orderBookPrice} className="SelectorOrder"> 
                {/* <option key={1} disabled style={{fontWeight:"bold", fontSize:"0.8rem"}}>Price</option> */}
                <option key={2} value="asc">Price (lower)</option>
                <option key={3} value="desc">Price (higher)</option>
            {/* </select>
            <select name="orderProductPrice" onChange={orderByTitle} className="SelectorOrder">  */}
                {/* <option key={4} disabled style={{fontWeight:"bold", fontSize:"0.8rem"}}>Title</option> */}
                <option key={5} value="asc">Title (A - Z)</option>
                <option key={6} value="desc">Title (Z - A)</option>
            </select>
        </div>
    )
}

export default Order;