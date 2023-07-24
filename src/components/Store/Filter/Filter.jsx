import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {filterByGenre, filterByFormat, getAllBooks} from "../../../Redux/actions";
import { AiOutlineFilter } from "react-icons/ai";
import "./Filter.css"

const Filter = ({ setCurrentPage }) => {

  const dispatch = useDispatch();
  //const allProductTypes = useSelector(state => state.LocalPersist.allProductTypes);
  const [activeFilter, setActiveFilter] = useState(null);  //Para modificar el estado del filtro activo

  const handleFilter = name => {  //Ejecutamos la action segun el filtro que seleccionemos abajo
    dispatch(filterByGenre(name));
    dispatch(filterByFormat(name));
    setCurrentPage(1);
    setActiveFilter(name);
  };

  const handleReset = (event) => {  //Reseteamos cuando queremos volver a traer todos los productos a la tienda
    event.preventDefault()
    dispatch(getAllBooks())
    setActiveFilter(null);
    setCurrentPage(1);
  }

  // useEffect(() => {
  //   dispatch(getAllProductTypes());
  // }, [dispatch]);

  return (
    <div className="FilterContainer">
      {/* <AiOutlineFilter className="IconFilter" /> */}
      <h1 className="FilterTitle"> Genres</h1>
      <ul className="ContainerButtonFilter">
        <li className="FilterLI">
          <button onClick={handleReset} className={activeFilter === null ? "ActiveButtonNull" : ''}>All books</button>
          <button onClick={() => handleFilter("Ficción")} className={activeFilter === "Ficción" ? "ActiveButton" : ''}> Ficción</button>
          <button onClick={() => handleFilter("Novela")} className={activeFilter === "Novela" ? "ActiveButton" : ''}> Novela</button>
          <button onClick={() => handleFilter("Ciencia ficción")} className={activeFilter === "Ciencia ficción" ? "ActiveButton" : ''}> Ciencia ficción</button>
          <button onClick={() => handleFilter("Fantasía")} className={activeFilter === "Fantasía" ? "ActiveButton" : ''}> Fantasía</button>
          <button onClick={() => handleFilter("Misterio")} className={activeFilter === "Misterio" ? "ActiveButton" : ''}> Misterio</button>
          <button onClick={() => handleFilter("Romance")} className={activeFilter === "Romance" ? "ActiveButton" : ''}> Romance</button>
          <button onClick={() => handleFilter("Aventura")} className={activeFilter === "Aventura" ? "ActiveButton" : ''}> Aventura</button>
          <button onClick={() => handleFilter("Historia")} className={activeFilter === "Historia" ? "ActiveButton" : ''}> Historia</button>
          <button onClick={() => handleFilter("Poesía")} className={activeFilter === "Poesía" ? "ActiveButton" : ''}> Poesía</button>
        </li>
        {/* {allProductTypes && allProductTypes?.map((p)=>{
          return (
            <li className={style.FilterLI} key={p.id}>
              <button onClick={() => handleFilter(p.name)} className={activeFilter === p.name ? "ActiveButton" : ''}> {p.name}</button>
            </li>
          )
        })}         */}
      </ul>
      <h1 className="FilterTitle"> Format</h1>
      {/* <form action="#">
        <select name="BookFormat" id="BookFormat" className="BookFormat">
          <option onClick={handleReset} key={0} value="All Formats">All Formats</option>
          <option onClick={() => handleFilter("EPUB")} key={0} value="EPUB">EPUB</option>
          <option onClick={() => handleFilter("PDF")} key={1} value="PDF">PDF</option>
          <option onClick={() => handleFilter("MOBI")} key={1} value="MOBI">MOBI</option>
          <option onClick={() => handleFilter("AZW3")} key={1} value="AZW3">AZW3</option>
          <option onClick={() => handleFilter("CBZ")} key={1} value="CBZ">CBZ</option>
        </select>
      </form> */}
      <ul className="ContainerButtonFilter">
        <li className="FilterLI">
          <button onClick={handleReset} className={activeFilter === null ? "ActiveButton" : ''}>All Formats</button>
          <button onClick={() => handleFilter("EPUB")} className={activeFilter === "EPUB" ? "ActiveButton" : ''}> EPUB</button>
          <button onClick={() => handleFilter("PDF")} className={activeFilter === "PDF" ? "ActiveButton" : ''}> PDF</button>
          <button onClick={() => handleFilter("MOBI")} className={activeFilter === "MOBI" ? "ActiveButton" : ''}> MOBI</button>
          <button onClick={() => handleFilter("AZW3")} className={activeFilter === "AZW3" ? "ActiveButton" : ''}> AZW3</button>
          <button onClick={() => handleFilter("CBZ")} className={activeFilter === "CBZ" ? "ActiveButton" : ''}> CBZ</button>
        </li>
      </ul>
    </div>
  );
};

export default Filter;