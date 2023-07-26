// import { useEffect } from 'react';
// import { getCarrito } from '../../../Redux/actions';
// import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import WishlistItem from "../../views/WishlistItem/WishlistItem";
import "./WishlistContainer.css";

const WishlistContainer = () =>{

    //onst Cart = useSelector((state) => state.LocalPersist.Carrito.Products);
    // const userId = useSelector(state => state.LocalPersist.userInfo.id);

    const wish = [
        {
            "id": "0a73337d-8f43-44de-b59e-88ad30ce2c25",
            "title": "Harry Potter y la Orden del Fénix",
            "author": "J.K. Rowling",
            "price": 59,
            "description": "Las tediosas vacaciones de verano en casa de sus tíos todavía no han acabado y Harry se encuentra más inquieto que nunca. Apenas ha tenido noticias de Ron y Hermione, y presiente que algo extraño está sucediendo en Hogwarts. En efecto, cuando por fin comienza otro curso en el famoso colegio de magia y hechicería, sus temores se vuelven realidad. El Ministerio de Magia niega que Voldemort haya regresado y ha iniciado una campaña de desprestigio contra Harry y Dumbledore, para lo cual ha asignado a la horrible profesora Dolores Umbridge la tarea de vigilar todos sus movimientos. Así pues, además de sentirse solo e incomprendido, Harry sospecha que Voldemort puede adivinar sus pensamientos, e intuye que el temible mago trata de apoderarse de un objeto secreto que le permitiría recuperar su poder destructivo.",
            "pages": 928,
            "publicationDate": "2003-06-21",
            "image": "https://contentv2.tap-commerce.com/cover/large/9789878000145_1.jpg?id_com=1113",
            "createdAt": "2023-07-23T20:23:24.573Z",
            "updatedAt": "2023-07-23T20:23:24.573Z",
            "deletedAt": null,
            "Genres": [
                {
                    "name": "Romance"
                }
            ],
            "Reviews": [],
            "Formats": [
                {
                    "name": "PDF",
                    "Book_Format": {
                        "createdAt": "2023-07-23T20:23:25.440Z",
                        "updatedAt": "2023-07-23T20:23:25.440Z",
                        "BookId": "0a73337d-8f43-44de-b59e-88ad30ce2c25",
                        "FormatId": 2
                    }
                }
            ],
            "Languages": [
                {
                    "name": "Alemán",
                    "Book_Language": {
                        "createdAt": "2023-07-23T20:23:25.489Z",
                        "updatedAt": "2023-07-23T20:23:25.489Z",
                        "BookId": "0a73337d-8f43-44de-b59e-88ad30ce2c25",
                        "LanguageId": 4
                    }
                }
            ],
            "Publishers": [
                {
                    "name": "Editorial Gallimard",
                    "Book_Publisher": {
                        "createdAt": "2023-07-23T20:23:25.596Z",
                        "updatedAt": "2023-07-23T20:23:25.596Z",
                        "BookId": "0a73337d-8f43-44de-b59e-88ad30ce2c25",
                        "PublisherId": 5
                    }
                }
            ]
        },
        {
            "id": "0ce583b9-1c8b-480b-92b5-6674a30108d7",
            "title": "El señor de los anillos: La comunidad del anillo",
            "author": "J.R.R. Tolkien",
            "price": 28,
            "description": "La primera parte de la trilogía épica que sigue las aventuras de Frodo Bolsón mientras lleva el Anillo Único para destruirlo.",
            "pages": 576,
            "publicationDate": "1954-07-29",
            "image": "https://contentv2.tap-commerce.com/cover/large/9789505470662_1.jpg?id_com=1113",
            "createdAt": "2023-07-23T20:23:24.573Z",
            "updatedAt": "2023-07-23T20:23:24.573Z",
            "deletedAt": null,
            "Genres": [
                {
                    "name": "Romance"
                }
            ],
            "Reviews": [],
            "Formats": [
                {
                    "name": "EPUB",
                    "Book_Format": {
                        "createdAt": "2023-07-23T20:23:25.446Z",
                        "updatedAt": "2023-07-23T20:23:25.446Z",
                        "BookId": "0ce583b9-1c8b-480b-92b5-6674a30108d7",
                        "FormatId": 1
                    }
                }
            ],
            "Languages": [
                {
                    "name": "Inglés",
                    "Book_Language": {
                        "createdAt": "2023-07-23T20:23:25.492Z",
                        "updatedAt": "2023-07-23T20:23:25.492Z",
                        "BookId": "0ce583b9-1c8b-480b-92b5-6674a30108d7",
                        "LanguageId": 2
                    }
                }
            ],
            "Publishers": [
                {
                    "name": "Editorial Pantheon Books",
                    "Book_Publisher": {
                        "createdAt": "2023-07-23T20:23:25.600Z",
                        "updatedAt": "2023-07-23T20:23:25.600Z",
                        "BookId": "0ce583b9-1c8b-480b-92b5-6674a30108d7",
                        "PublisherId": 7
                    }
                }
            ]
        },
    ]
          
    return (
        <div className="WishlistContainer2">
            <div className="titleContainer">
                <p className="titleContainerLine"></p>
                <h1 className="titleContainerTexto">Your Wishlist</h1>
            </div>
            <div className="WishlistContent">   
                <h1 className="MyWishlist">My Wishlist</h1>
                <div className="booksAvailable" style={{paddingTop:"1rem"}}>{wish.length} {' '} books available</div>  
                {wish?.length === 0 ? (
                    <>
                        <h3 className="emptyWishlist">USUARIO, you need some items for this Wishlist.</h3>
                        <h3 className="emptyWishlist">Explore our store or search for something new you'd like to add.</h3>
                        <Link to="/store" className="Buttons">Store</Link>
                    </>
                ) : (
                    <>
                    {wish?.length > 0 && wish?.map((b) => {
                        return (
                            <WishlistItem style={{borderBottom:"1px solid silver", padding:"1rem 0"}}
                                key={b.id} 
                                id={b.id}
                                image={b.image}
                                title={b.title}
                                author={b.author}
                                price={b.price}
                                format={b.Formats?.map((f) => f.name).join(' , ')}
                            />
                        ); 
                    })}
                    </>
                )}
            </div>
        </div>
    );
}

export default WishlistContainer;