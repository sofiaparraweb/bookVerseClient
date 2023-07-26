import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {filterByGenre, filterByFormat, getAllBooks} from "../../../Redux/actions";
import { AiOutlineFilter } from "react-icons/ai";
import "./Filter.css"

const Filter = ({ setCurrentPage }) => {

  const dispatch = useDispatch();
  //const allProductTypes = useSelector(state => state.LocalPersist.allProductTypes);
  const books = useSelector(state => state.LocalPersist.books);
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
      <h1>{activeFilter}</h1>
      <h1 className="FilterTitle"> Genres</h1>
      <ul className="ContainerButtonFilter">
        <li className="FilterLI">
          <button onClick={handleReset} className={activeFilter === null ? "ActiveButtonNull" : ''}>All books</button>
          <button onClick={() => handleFilter("Ficción")} className={activeFilter === "Ficción" ? "ActiveButton" : ''}> Ficción </button>
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
      <h1 className="FilterTitle"> Language</h1>
      <h1 className="FilterTitle"> Author</h1>
      <form action="#" className="BookFormatContainer">
        <select 
          name="BookFormat" 
          id="BookFormat" 
          className="BookFormat"
          value={activeFilter}
          onChange={(e) => handleFilter(e.target.value)}
        >
          <option value="EPUB">EPUB</option>
          <option value="PDF">PDF</option>
          <option value="MOBI">MOBI</option>
          <option value="AZW3">AZW3</option>
          <option value="CBZ">CBZ</option>
        </select>
      </form>
      <h1 className="FilterTitle"> Format</h1>
      <div className="FilterFormatContainer">
        <button
          onClick={() => handleFilter("EPUB")}
          className={activeFilter === "EPUB" ? "FormatActive" : "FilterOption"}
          style={{marginRight:"0.5rem"}}
        > EPUB
        </button>
        <button
          onClick={() => handleFilter("PDF")}
          className={activeFilter === "PDF" ? "FormatActive" : "FilterOption"}
          style={{marginRight:"0.5rem"}}
        > PDF
        </button>
        <button
          onClick={() => handleFilter("MOBI")}
          className={activeFilter === "MOBI" ? "FormatActive" : "FilterOption"}
          style={{marginRight:"0.5rem"}}
        > MOBI
        </button>
        <button
          onClick={() => handleFilter("AZW3")}
          className={activeFilter === "AZW3" ? "FormatActive" : "FilterOption"}
          style={{marginRight:"0.5rem"}}
        > AZW3
        </button>
        <button
          onClick={() => handleFilter("CBZ")}
          className={activeFilter === "CBZ" ? "FormatActive" : "FilterOption"}
        > CBZ
        </button>
      </div>
      <button onClick={handleReset} className="Buttons" style={{margin:"auto", marginTop:"2rem", padding:"1rem 1.5rem"}} > Clear Filters </button>
    </div>
  );
};

export default Filter;

// FORMAT
// {colorsData.map((curColor, index) => {
//   if (curColor === "all") {
//     return (
//       <button
//         key={index}
//         type="button"
//         value={curColor}
//         name="color"
//         className="color-all--style"
//         onClick={updateFilterValue}>
//         all
//       </button>
//     );
//   }
//   return (
//     <button
//       key={index}
//       type="button"
//       value={curColor}
//       name="color"
//       style={{ backgroundColor: curColor }}
//       className={color === curColor ? "btnStyle active" : "btnStyle"}
//       onClick={updateFilterValue}>
//       {color === curColor ? <FaCheck className="checkStyle" /> : null}
//     </button>
//   );
// })}