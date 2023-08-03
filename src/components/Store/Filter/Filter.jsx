import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllBooks/* , filterByGenre, filterByFormat, filterByLanguage, filterByPublisher */, filterCombined, getBookGenre, getBookLanguage, getBookPublisher, getBookFormat } from "../../../Redux/actions";
import { AiOutlineFilter } from "react-icons/ai";
import "./Filter.css"

const Filter = ({ setCurrentPage }) => {

  const dispatch = useDispatch();
  const books = useSelector(state => state.LocalPersist.books);
  const allGenres = useSelector(state => state.LocalPersist.bookGenres);
  const allFormats = useSelector(state => state.LocalPersist.bookFormat);
  const allLanguages = useSelector(state => state.LocalPersist.bookLanguage);
  const allPublishers = useSelector(state => state.LocalPersist.bookPublisher);
  const [activeFilter, setActiveFilter] = useState(null);  //Para modificar el estado del filtro activo



  const [filters, setFilters] = useState({
    format: "",
    genre: "",
    language: "",
    publisher: ""
  })

  const url = `${filters.format}${filters.genre}${filters.language}${filters.publisher}`

  const handleFilterF = name => {  //Ejecutamos la action segun el filtro que seleccionemos abajo
    if (name) {
      setFilters(prevFilters => ({
        ...prevFilters,
        format: `format=${name}&`
      }));
    } else {
      setFilters(prevFilters => ({
        ...prevFilters,
        format: ""
      }));
    }
    /* setFilters(updatedFilters); */
    setCurrentPage(1);
    setActiveFilter(prevFilters => (name));
  };

  const handleFilterG = name => {  //Ejecutamos la action segun el filtro que seleccionemos abajo
    if (name) {
      setFilters(prevFilters => ({
        ...prevFilters,
        genre: `genre=${name}&`
      }));
    } else {
      setFilters(prevFilters => ({
        ...prevFilters,
        genre: ""
      }));
    }
    // Actualizar el estado con el nuevo objeto
    /*  setFilters(updatedFilters); */
    setCurrentPage(1);
    setActiveFilter(prevFilters => (name));
  };


  const handleFilterL = name => {  //Ejecutamos la action segun el filtro que seleccionemos abajo
    if (name) {
      setFilters(prevFilters => ({
        ...prevFilters,
        language: `language=${name}&`
      }));
    } else {
      setFilters(prevFilters => ({
        ...prevFilters,
        language: ""
      }));
    }
    /* setFilters(updatedFilters); */
    setCurrentPage(1);
    setActiveFilter(prevFilters => (name))
  };
  const handleFilterP = name => {  //Ejecutamos la action segun el filtro que seleccionemos abajo
    if (name) {
      setFilters(prevFilters => ({
        ...prevFilters,
        publisher: `publisher=${name}&`
      }));
    } else {
      setFilters(prevFilters => ({
        ...prevFilters,
        publisher: ""
      }));
    }
    // Actualizar el estado con el nuevo objeto
    /* setFilters(updatedFilters); */
    /* dispatch(filterByPublisher(name)); */
    setCurrentPage(1);
    setActiveFilter(prevFilters => (name));
  };

  const handleReset = (event) => {  //Reseteamos cuando queremos volver a traer todos los productos a la tienda
    event.preventDefault()
    dispatch(getAllBooks())
    setFilters(prevFilters => ({
      format: "",
      genre: "",
      language: "",
      publisher: ""
    }))
    setActiveFilter(null);
    setCurrentPage(1);
  }

  const handleSubmit = () => {
    console.log(url);
    dispatch(filterCombined(url))
  }

  useEffect(() => {
    /*     dispatch(getBookGenre());
        dispatch(getBookFormat());
        dispatch(getBookLanguage());
        dispatch(getBookPublisher()); 
      
    dispatch(filterCombined(url))*/
  }, [dispatch]);

  return (
    <div className="FilterContainer">
      {/* <AiOutlineFilter className="IconFilter" /> */}
      <h1 className="FilterTitle" style={{ color: "#b38a83", padding: "0 1rem", fontSize: "0.8rem", margin: "auto" }}>{activeFilter}</h1>
      <h1 className="FilterTitle"> Genres</h1>
      <form action="#" className="BookPublisherContainer">
        <select
          name="BookFormat"
          id="BookFormat"
          className="BookPublisher"
          value={activeFilter}
          onChange={(e) => handleFilterG(e.target.value)}
        > <option defaultChecked value="">All</option>
          {allGenres && allGenres?.map(a => <option value={a.name} name={a.id} key={a.id}>{a.name}</option>)}
        </select>
      </form>
      <h1 className="FilterTitle"> Language</h1>
      <form action="#" className="BookPublisherContainer">
        <select
          name="BookFormat"
          id="BookFormat"
          className="BookPublisher"
          value={activeFilter}
          onChange={(e) => handleFilterL(e.target.value)}
        >
          <option defaultChecked value="">All</option>
          {allLanguages && allLanguages?.map(a => <option value={a.name} name={a.id} key={a.id}>{a.name}</option>)}
        </select>
      </form>
      <h1 className="FilterTitle"> Publisher</h1>
      <form action="#" className="BookPublisherContainer">
        <select
          name="BookFormat"
          id="BookFormat"
          className="BookPublisher"
          value={activeFilter}
          onChange={(e) => handleFilterP(e.target.value)}
        >
          <option defaultChecked value="">All</option>
          {allPublishers && allPublishers?.map(a => <option value={a.name} name={a.id} key={a.id}>{a.name}</option>)}

        </select>
      </form>

      <h1 className="FilterTitle"> Format</h1>
      <form action="#" className="BookPublisherContainer">
        <select
          name="BookFormat"
          id="BookFormat"
          className="BookPublisher"
          value={activeFilter}
          onChange={(e) => handleFilterF(e.target.value)}
        >
          <option defaultChecked value="" >All</option>
          {allFormats && allFormats?.map(a => <option value={a.name} name={a.id} key={a.id}>{a.name}</option>)}

        </select>
      </form>
      <button onClick={handleSubmit} className="Buttons" style={{ margin: "auto", marginTop: "2rem", padding: "1rem 1.5rem" }} > Apply filters </button>
      <button onClick={handleReset} className="Buttons" style={{ margin: "auto", marginTop: "2rem", padding: "1rem 1.5rem" }} > Clear Filters </button>
    </div>
  );
};

export default Filter;