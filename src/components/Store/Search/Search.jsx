import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { filterByName, getAllProducts } from "../../../Redux/actions";
import {Search2Icon} from "@chakra-ui/icons";
import style from "./Search.module.css";

const Search = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.LocalPersist.allProducts);
  const [ productName, setProductName ] = useState("")

  const handleChange = (event) =>{
    event.preventDefault();
    setProductName(event.target.value);
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    if (productName.length > 0) {
        dispatch(filterByName(productName));
        setProductName('');
    }
  }

  const handleReset = (event) => {
    event.preventDefault()
    dispatch(getAllProducts())
  }

  return (
    <div className={style.SearchBar}>
        <form onSubmit={handleSubmit}>
          <div className={style.DivInputSearch}>
            <Search2Icon width="15px" color="grey"></Search2Icon>
            <input
              className={style.SearchInput}
              type="search"
              placeholder="Buscar producto"
              value={productName}
              onChange={handleChange}
            />
          </div>
          <div className={style.DivButton}>
            <button type="submit" className={style.SearchBarButton}>Buscar</button>
            <button className={style.ResetButton} onClick={handleReset}>Resetear</button>
          </div>
        </form> 
    </div>
  )
}

export default Search;