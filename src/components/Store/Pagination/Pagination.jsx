import style from "./Pagination.module.css";
import {ArrowLeftIcon, ArrowBackIcon, ArrowForwardIcon, ArrowRightIcon} from '@chakra-ui/icons';

const Pagination = ({
  booksPerPage,
  totalBooks, 
  currentPage,
  handlePaginate,
}) => {
    
  const pageNumbers = Math.ceil(totalBooks / booksPerPage);

  //Esta funcion nos va a permitir generar los botones del paginado. start y end nos permiten que el valor max del rango no supere 1 o el
  //num total de paginas. 
  const renderPageNumbers = () => {
    const buttons = [];
    const start = Math.max(currentPage - 1, 1);
    const end = Math.min(currentPage + 1, pageNumbers);

    for (let i = start; i <= end; i++) {
      buttons.push(
        <li
          key={i}
          className={`${style.paginationItem} ${currentPage === i ? style.active : ''}`}
          onClick={() => handlePaginate(i)}
        >
          {i}
        </li>
      );
    }

    return buttons;
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePaginate(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < pageNumbers) {
      handlePaginate(currentPage + 1);
    }
  };

  const handleFirstPage = () => {
    if (currentPage !== 1) {
      handlePaginate(1);
    }
  };

  const handleLastPage = () => {
    if (currentPage !== pageNumbers) {
      handlePaginate(pageNumbers);
    }
  };

  return (
    <div className={style.PaginationContainer}>
      <ul className={style.PaginationList}>
        <li
          className={`${style.paginationItem} ${currentPage === 1 ? style.disabled : ''}`} 
          onClick={handleFirstPage}
        >
          <ArrowLeftIcon className={style.IconPagination} />
        </li>
        <li
          className={`${style.paginationItem} ${currentPage === 1 ? style.disabled : ''}`} 
          onClick={handlePrevious}
        >
          <ArrowBackIcon className={style.IconPagination}/>
        </li >
        {renderPageNumbers()}
        <li
          className={`${style.paginationItem} ${currentPage === pageNumbers ? style.disabled : ''}`}
          onClick={handleNext}
        >
          <ArrowForwardIcon className={style.IconPagination}/>
        </li>
        <li
          className={`${style.paginationItem} ${currentPage === pageNumbers ? style.disabled : ''}`}
          onClick={handleLastPage}
        >
          <ArrowRightIcon className={style.IconPagination}/>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;