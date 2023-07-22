import { setGridView } from "../../../Redux/actions"
import { useSelector } from "react-redux";

const TiendaList = () => {

    const books = useSelector(state => state.LocalPersist.books);

    setGridView === true ? <GridView books={books}/> : <ListView books={books} /> 

}

export default TiendaList;