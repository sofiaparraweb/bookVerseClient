import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { searchByName, getAllBooks } from "../../Redux/actions";
import { FaSearch } from 'react-icons/fa';
import style from "./SearchBar.module.css";
import Swal from 'sweetalert2';

const SearchBar = ({ebooks}) => {

  const dispatch = useDispatch()
  const [ productName, setProductName ] = useState("");

  const handleChange = (event) =>{
    event.preventDefault();
    setProductName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (productName.length > 0) {
      dispatch(searchByName(productName));
      setProductName('');
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Book not found',
        background: '#f3f3f3',
        confirmButtonColor: '#B9362C',
        customClass: {
          title: 'my-custom-title',
          content: 'my-custom-content',
          confirmButton: 'my-custom-button',
        },
      });
    }
  };

  const handleReset = (event) => {
    event.preventDefault()
    dispatch(getAllBooks())
  }

  return (
    <div className={style.SearchBar}>
      <form onSubmit={handleSubmit}>
        <input
          className={style.SearchInput}
          type="search"
          placeholder="Find your next story..."
          value={productName}
          onChange={handleChange}
        />
        <div className={style.DivButton}>
          <button type="submit" className={style.SearchBarButton}><FaSearch /></button>
        </div>
      </form> 
    </div>
  )
}

export default SearchBar;


