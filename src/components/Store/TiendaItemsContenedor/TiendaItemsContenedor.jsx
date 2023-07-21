import TiendaItems from "../TiendaItems/TiendaItems";
import style from "./TiendaItemsContenedor.module.css";
//import SideBar from "../SideBar/SideBar"

const TiendaItemsContenedor = ({ ebooks, setCurrentPage }) => {

  return ( 
    <div className={style.ContenedorTienda}>
      {/* <div className={style.TiendaSideBar}>
        <SideBar setCurrentPage={setCurrentPage}/>
      </div>  */}
      <div className={style.TiendaItemsContainer}> 
        {ebooks?.length > 0 && ebooks?.map((book) => {
          return (
            <TiendaItems
              key={book.id}
              id={book.id}
              author={book.author}
              title={book.title}
              price={book.price}
              description={book.description}
              publisher={book.publisher}
              pages={book.pages}
              language={book.language}
              category={book.category}
              reviews={book.reviews}
              stars={book.stars}
              publicationDate={book.publicationDate}
              image={book.image}
              // Reviews={prod.Reviews?.map((r) =>({
                //     content: r.content,
                //     rating: r.rating,
                //     user_id: r.user_id,
                // }))}
              />
          ); 
        })}
      </div>
    </div>
  );
}

export default TiendaItemsContenedor;