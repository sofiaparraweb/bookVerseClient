import { useEffect, useState } from 'react';
import { getAllBooks } from '../../Redux/actions';
import TiendaItemsContenedor from "../../components/Store/TiendaItemsContenedor/TiendaItemsContenedor";
import "./Store.css";
import { useDispatch, useSelector } from 'react-redux';
import Filter from "../../components/Store/Filter/Filter"
import Order from "../../components/Store/Order/Order";
//import Search from "../../components/Store/Search/Search";
import Pagination from "../../components/Store/Pagination/Pagination";
import SearchBar from '../../components/searchBar/SearchBar';

const Store = () => {
  
  const dispatch = useDispatch();
  const ebooks = useSelector(state => state.LocalPersist.books);
  
  const [currentPage, setCurrentPage] = useState(1); 
  const booksPerPage = 9;
  
  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastBook = currentPage * booksPerPage; 
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = ebooks?.length > 0 && ebooks.slice(
    indexOfFirstBook,
    indexOfLastBook
  ); 

  return (
    <div className="ContainerGridFilterColumn">
      <div className="FilterStore">
      <SearchBar />
      <Filter />
      </div>
      <section className="BooksView">
        <div className="OrderStore">   
          <Order setCurrentPage={setCurrentPage}/>
        </div>
        <div>
          <TiendaItemsContenedor ebooks={currentBooks} setCurrentPage={setCurrentPage}/>
        </div>
        <div className="PaginationConteinerTienda">
          <Pagination
            booksPerPage={booksPerPage}
            totalBooks={ebooks?.length}
            currentPage={currentPage}
            handlePaginate={handlePaginate}
          />
        </div>
      </section>
    </div>
  );
}

export default Store;