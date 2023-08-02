import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import WishlistItem from "../../views/WishlistItem/WishlistItem";
import "./WishlistContainer.css";

const WishlistContainer = () =>{

    const userName = useSelector(state => state.LocalPersist.userProfile.name);
    console.log(userName)
    const wish = useSelector((state) => state.LocalPersist.wish.Books);

       
    return (
        <div className="WishlistContainer2">
            <div className="titleContainer">
                <p className="titleContainerLine"></p>
                <h1 className="titleContainerTexto">Your Wishlist</h1>
            </div>
            <div className="WishlistContent"> 
                {wish?.length === 0 ? (
                    <>
                        <h3 className="emptyWishlist">{userName}, your Wishlist is empty.</h3>
                        <h3 className="emptyWishlist">Explore our store or search for something new you'd like to add.</h3>
                        <Link to="/store" className="Buttons">Store</Link>
                    </>
                ) : (
                    wish?.length > 0 
                        ? <WishlistItem wish={wish} /> 
                        :   (
                            <>
                                <h3 className="emptyWishlist">{userName}, your Wishlist is empty.</h3>
                                <h3 className="emptyWishlist">Explore our store or search for something new you'd like to add.</h3>
                                <Link to="/store" className="Buttons">Store</Link>
                            </>)
                )
                }  

                    {/* <h1 className="MyWishlist">Hi {userName}, this is your book selection</h1>
                    <div className="booksAvailable" style={{paddingTop:"1rem"}}>{wish?.length} {' '} books available</div>  
                    {wish?.length > 0 && wish?.map((b) => {
                        return (
                            <WishlistItem style={{borderBottom:"1px solid silver", padding:"0.5rem 0"}}
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
                )} */}
            </div>
        </div>
    );
}

export default WishlistContainer;