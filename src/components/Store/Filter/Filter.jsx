import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { 
  getAllBooks, filterByGenre, filterByFormat, filterByLanguage, filterByPublisher, 
  filterCombined, 
  getBookGenre, getBookLanguage, getBookPublisher, getBookFormat
}   from "../../../Redux/actions";
import { AiOutlineFilter } from "react-icons/ai";
import "./Filter.css"

const Filter = ({ setCurrentPage }) => {

  const dispatch = useDispatch();
  const books = useSelector(state => state.LocalPersist.books);
  // const allGenres = useSelector(state => state.LocalPersist.bookGenres);
  // const allFormats = useSelector(state => state.LocalPersist.bookFormat);
  // const allLanguages = useSelector(state => state.LocalPersist.bookLanguage);
  // const allPublishers = useSelector(state => state.LocalPersist.bookPublisher);
  const [activeFilter, setActiveFilter] = useState(null);  //Para modificar el estado del filtro activo

  const handleFilterG = name => {  //Ejecutamos la action segun el filtro que seleccionemos abajo
    dispatch(filterByGenre(name));
    setCurrentPage(1);
    setActiveFilter(name);
  };
  const handleFilterF = name => {  //Ejecutamos la action segun el filtro que seleccionemos abajo
    dispatch(filterByFormat(name));
    setCurrentPage(1);
    setActiveFilter(name);
  };
  const handleFilterL = name => {  //Ejecutamos la action segun el filtro que seleccionemos abajo
    dispatch(filterByLanguage(name));
    setCurrentPage(1);
    setActiveFilter(name);
  };
  const handleFilterP = name => {  //Ejecutamos la action segun el filtro que seleccionemos abajo
    dispatch(filterByPublisher(name));
    setCurrentPage(1);
    setActiveFilter(name);
  };

  
  const handleReset = (event) => {  //Reseteamos cuando queremos volver a traer todos los productos a la tienda
    event.preventDefault()
    dispatch(getAllBooks())
    setActiveFilter(null);
    setCurrentPage(1);
  }

  useEffect(() => {
    dispatch(getBookGenre());
    dispatch(getBookFormat());
    dispatch(getBookLanguage());
    dispatch(getBookPublisher());
  }, [dispatch]);

  return (
    <div className="FilterContainer">
      {/* <AiOutlineFilter className="IconFilter" /> */}
      <h1 className="FilterTitle" style={{color:"#b38a83", padding:"0 1rem", fontSize:"0.8rem", margin:"auto"}}>{activeFilter}</h1>
      <h1 className="FilterTitle"> Genres</h1>
      <ul className="ContainerButtonFilter">
        <li className="FilterLI">
          <button onClick={handleReset} className={activeFilter === null ? "ActiveButtonNull" : 'ActiveButton'}>All books</button>
        </li>
        {allGenres && allGenres?.map((p)=>{
          return (
            <li className="FilterLI" key={p.id}>
              <button onClick={() => handleFilterG(p.name)} className={activeFilter === p.name ? "ActiveButtonNull" : 'ActiveButton'}> {p.name}</button>
            </li>
          )
        })}        
      </ul>

      <h1 className="FilterTitle"> Language</h1>
      <ul className="ContainerButtonFilter">
        {allLanguages && allLanguages?.map((p)=>{
          return (
            <li className="FilterLI" key={p.id}>
              <button onClick={() => handleFilterL(p.name)} className={activeFilter === p.name ? "ActiveButtonNull" : 'ActiveButton'}> {p.name}</button>
            </li>
          )
        })}        
      </ul>
      
      <h1 className="FilterTitle"> Publisher</h1>
      <form action="#" className="BookPublisherContainer">
        <select 
          name="BookFormat" 
          id="BookFormat" 
          className="BookPublisher"
          value={activeFilter}
          onChange={(e) => handleFilterP(e.target.value)}
        >
          {allPublishers && allPublishers?.map((a)=>{
            return(
              <option key={a.id} value={a.name} name={a.id}>
                {a.name}
              </option>
            )
          })}

        </select>
      </form>

      <h1 className="FilterTitle"> Format</h1>
      <div className="FilterFormatContainer">
        {allFormats && allFormats?.map((f)=>{
          return(
            <button 
              onClick={() => handleFilterF(f.name)}
              className={activeFilter === f.name ? "FormatActive" : "FilterOption"}
              style={{marginRight:"0.5rem"}}
            >
              {f.name}
            </button>
          )
        })}

      </div>
      <button onClick={handleReset} className="Buttons" style={{margin:"auto", marginTop:"2rem", padding:"1rem 1.5rem"}} > Clear Filters </button>
    </div>
  );
};

export default Filter;