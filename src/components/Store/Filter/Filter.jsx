import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllBooks/* , filterByGenre, filterByFormat, filterByLanguage, filterByPublisher */, filterCombined, getBookGenre, getBookLanguage, getBookPublisher, getBookFormat } from "../../../Redux/actions";
import { AiOutlineFilter } from "react-icons/ai";
import "./Filter.css"
import "../Order/Order.css"

const Filter = ({ setCurrentPage }) => {

  const dispatch = useDispatch();
  const books = useSelector(state => state.LocalPersist.books);
  const allGenres = useSelector(state => state.LocalPersist.bookGenres);
  const allFormats = useSelector(state => state.LocalPersist.bookFormat);
  const allLanguages = useSelector(state => state.LocalPersist.bookLanguage);
  const allPublishers = useSelector(state => state.LocalPersist.bookPublisher);

  const [activeGenre, setActiveGenre] = useState(null);
  const [activeLanguage, setActiveLanguage] = useState(null);
  const [activePublisher, setActivePublisher] = useState(null);
  const [activeFormat, setActiveFormat] = useState(null);

  const [filters, setFilters] = useState({
    format: "",
    genre: "",
    language: "",
    publisher: "",
    order: "",
    price: "",
    name: ""
  })

  const url = `${filters.format}${filters.genre}${filters.language}${filters.publisher}${filters.order}${filters.price}${filters.name}`

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
    setActiveFormat(prevFilters => (name));
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
    setActiveGenre(prevFilters => (name));
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
    setActiveLanguage(prevFilters => (name))
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
    setCurrentPage(1);
    setActivePublisher(prevFilters => (name));
  };

  const orderBookPrice = (event) =>  {
    if(event.target.value == "ascP" || event.target.value == "descP" ) {
        const texto= event.target.value.substring(0, event.target.value.length - 1);
        setFilters(prevFilters => ({
          ...prevFilters,
          order: `order=price&`,
          price: `price=${texto}&`
        }))
        /* dispatch(orderByPrice(texto)); */
    }
    else {
      setFilters(prevFilters => ({
        ...prevFilters,
        order: `order=name&`,
        price: `name=${event.target.value}&`
      }))
        /* dispatch(orderByTitle(event.target.value)); */
    }
    setCurrentPage(1)
};


  const handleReset = (event) => {
    event.preventDefault()
    setCurrentPage(1);
    dispatch(getAllBooks())
    setActiveFormat("");
    setActivePublisher("");
    setActiveLanguage("");
    setActiveGenre("");
    setFilters({
      format: "",
      genre: "",
      language: "",
      publisher: "",
      order: "",
      price: "",
      name: ""
    });
  }

  const handleSubmit = () => {
    console.log(url);
    dispatch(filterCombined(url))
  }

  return (
    <div className="FilterContainer">
      {/* <AiOutlineFilter className="IconFilter" /> */}
      <h1 className="FilterTitle" style={{ color: "#b38a83", padding: "0 1rem", fontSize: "0.7rem", margin: "auto" }}>{activeGenre} </h1>
      <h1 className="FilterTitle" style={{ color: "#b38a83", padding: "0 1rem", fontSize: "0.7rem", margin: "auto" }}>{activeLanguage} </h1>
      <h1 className="FilterTitle" style={{ color: "#b38a83", padding: "0 1rem", fontSize: "0.7rem", margin: "auto" }}>{activePublisher}</h1>
      <h1 className="FilterTitle" style={{ color: "#b38a83", padding: "0 1rem", fontSize: "0.7rem", margin: "auto" }}>{activeFormat}</h1>

      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={handleSubmit} className="Buttons" style={{ margin: "auto", marginTop: "1rem", padding: "0.7rem 1rem" }} > Apply filters </button>
        <button onClick={handleReset} className="Buttons" style={{ margin: "auto", marginTop: "1rem", padding: "0.7rem 1rem" }} > Clear Filters </button>
      </div>
      {books.length === 0 && (
        <p style={{ textAlign: "center", marginTop: "2rem", color: "red" }}>No books found with these filters.</p>
      )}
      <div className="OrderContainer">
        <h1 className="LabelOrder">ORDER BY </h1>
        <select name="orderProductPrice" onChange={orderBookPrice} className="SelectorOrder">
          {/* <option key={1} disabled style={{fontWeight:"bold", fontSize:"0.8rem"}}>Price</option> */}
          <option key={2} value="ascP">Price (lower)</option>
          <option key={3} value="descP">Price (higher)</option>
          {/* </select>
            <select name="orderProductPrice" onChange={orderByTitle} className="SelectorOrder">  */}
          {/* <option key={4} disabled style={{fontWeight:"bold", fontSize:"0.8rem"}}>Title</option> */}
          <option key={5} value="asc">Title (A - Z)</option>
          <option key={6} value="desc">Title (Z - A)</option>
        </select>
      </div>
      <h1 className="FilterTitle"> Genres</h1>
      <ul className="ContainerButtonFilter" action="#">
        {allGenres && allGenres?.map((p) => {
          return (
            <li className="FilterLI" key={p.id} value={activeGenre}>
              <button onClick={(e) => handleFilterG(e.target.value)} className='ActiveButton' value={p.name} name={p.id}> {p.name}</button>
            </li>
          )
        })}
      </ul>

      <h1 className="FilterTitle"> Language</h1>
      <form action="#" className="BookPublisherContainer">
        <select
          name="BookFormat"
          id="BookFormat"
          className="BookPublisher"
          value={activeLanguage}
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
          value={activePublisher}
          onChange={(e) => handleFilterP(e.target.value)}
        >
          <option defaultChecked value="">All</option>
          {allPublishers && allPublishers?.map(a => <option value={a.name} name={a.id} key={a.id}>{a.name}</option>)}

        </select>
      </form>

      <h1 className="FilterTitle"> Format</h1>
      <div className="FilterFormatContainer" action="#" value={activeFormat}>
        {allFormats && allFormats?.map((f) => {
          return (
            <button
              onClick={(e) => handleFilterF(e.target.value)}
              className="FilterOption"
              value={f.name}
              name={f.id}
              key={f.id}
              style={{ marginRight: "0.5rem" }}
            >
              {f.name}
            </button>
          )
        })}

      </div>

    </div>
  );
};

export default Filter;