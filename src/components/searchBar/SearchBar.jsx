import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { searchByName, getAllBooks } from "../../Redux/actions";
import { FaSearch } from 'react-icons/fa';
import style from "./SearchBar.module.css";



const SearchBar = () => {
  const dispatch = useDispatch()
  //const products = useSelector(state => state.LocalPersist.getAllBooks);
  const products = useSelector(state => state.getAllBooks);
  const [ productName, setProductName ] = useState("")

  const handleChange = (event) =>{
    event.preventDefault();
    setProductName(event.target.value);
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    if (productName.length > 0) {
        dispatch(searchByName(productName));
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
            <input
              className={style.SearchInput}
              type="search"
              placeholder="Buscar..."
              value={productName}
              onChange={handleChange}
            />
        
          <div className={style.DivButton}>
            <button type="submit" className={style.SearchBarButton}><FaSearch /></button>
            {/* <button className={style.ResetButton} onClick={handleReset}>Resetear</button> */}
          </div>
        </form> 
    </div>
  )
}

export default SearchBar;


