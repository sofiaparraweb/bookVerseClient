import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {filterByType, getAllProductTypes, getAllProducts} from "../../../Redux/actions";
import style from "./Filter.module.css"
import { AiOutlineFilter } from "react-icons/ai";

const Filter = ({ setCurrentPage }) => {

  const dispatch = useDispatch();
  const allProductTypes = useSelector(state => state.LocalPersist.allProductTypes);
  const [activeFilter, setActiveFilter] = useState(null);  //Para modificar el estado del filtro activo

  const handleFilter = name => {  //Ejecutamos la action segun el filtro que seleccionemos abajo
    dispatch(filterByType(name));
    setCurrentPage(1);
    setActiveFilter(name);
  };

  const handleReset = (event) => {  //Reseteamos cuando queremos volver a traer todos los productos a la tienda
    event.preventDefault()
    dispatch(getAllProducts())
    setActiveFilter(null);
    setCurrentPage(1);
  }

  useEffect(() => {
    dispatch(getAllProductTypes());
  }, [dispatch]);

  return (
    <div className={style.FilterContainer}>
        <AiOutlineFilter className={style.Icon1} />
        <h1 className={style.FiltrarTexto}> PRODUCTO</h1>
        <ul className={style.ContenedorBotonesFiltro}>
          <li className={style.FilterLI}>
            <button onClick={handleReset} className={activeFilter === null ? style.ActiveButtonNull : ''}>Todos los productos</button>
          </li>
          {allProductTypes && allProductTypes?.map((p)=>{
            return (
              <li className={style.FilterLI} key={p.id}>
                <button onClick={() => handleFilter(p.name)} className={activeFilter === p.name ? style.ActiveButtonFilter : ''}> {p.name}</button>
              </li>
            )
          })}        
        </ul>
    </div>
    );
};

export default Filter;