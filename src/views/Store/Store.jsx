import { useEffect, useState } from 'react';
import { getAllBooks } from '../../Redux/actions';
import TiendaItemsContenedor from "../../components/Store/TiendaItemsContenedor/TiendaItemsContenedor";
import { useDispatch, useSelector } from 'react-redux';
import Filter from "../../components/Store/Filter/Filter"
import Order from "../../components/Store/Order/Order";
import Pagination from "../../components/Store/Pagination/Pagination";
import SearchBar from '../../components/searchBar/SearchBar';
import "./Store.css";

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
  const currentBooks = ebooks?.length > 0 && ebooks?.slice(
    indexOfFirstBook,
    indexOfLastBook
  ); 

  return (
    <div className="ContainerGridFilterColumn">
      <div className="FilterStore">
        <SearchBar ebooks={currentBooks}/>
        <Filter setCurrentPage={setCurrentPage}/>
      </div>
      <section className="BooksView">
        <div className="GridThreeColumns" style={{gridTemplateColumns:"1fr auto 1fr"}}>
          <div>{' '}</div>
          <div className="booksAvailable">{ebooks.length} {' '} books available</div>   
          <div className="OrderStore">
            <Order setCurrentPage={setCurrentPage}/>
          </div>
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