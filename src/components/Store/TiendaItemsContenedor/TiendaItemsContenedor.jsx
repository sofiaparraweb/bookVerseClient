import TiendaItems from "../TiendaItems/TiendaItems";
import style from "./TiendaItemsContenedor.module.css";
//import SideBar from "../SideBar/SideBar"

const TiendaItemsContenedor = ({ ebooks, setCurrentPage }) => {

  return ( 
      <div className="GridThreeColumns" style={{padding:"3rem"}}> 
        {ebooks?.length > 0 && ebooks?.map((book) => {
          return (
            <TiendaItems
              key={book.id}
              id={book.id}
              author={book.author}
              title={book.title}
              price={book.price}
              description={book.description}
              publisher={book.Publishers?.map((p) => p.name).join(' , ')}
              pages={book.pages}
              language={book.Languages?.map((l) => l.name).join(' , ')}
              genres={book.Genres?.map((g) => g.name).join(' , ')}
              reviews={book.Reviews}
              stars={book.stars}
              publicationDate={book.publicationDate}
              image={book.image}
              format={book.Formats?.map((f) => f.name).join(' , ')}
              // Reviews={prod.Reviews?.map((r) =>({
                //     content: r.content,
                //     rating: r.rating,
                //     user_id: r.user_id,
                // }))}
              />
          ); 
        })}
      </div>
  );
}

export default TiendaItemsContenedor;