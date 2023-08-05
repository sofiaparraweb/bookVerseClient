import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import WishlistItem from "../../views/WishlistItem/WishlistItem";
import "./WishlistContainer.css";

const WishlistContainer = () =>{

    const userName = useSelector(state => state.LocalPersist.userProfile?.name);
    console.log(userName)
    const wish = useSelector((state) => state.LocalPersist.wish?.Books);

       
    return (
        <div className="WishlistContainer2">
            <div className="titleContainer">
                <p className="titleContainerLine"></p>
                <h1 className="titleContainerTexto">Your Wishlist</h1>
            </div>
            <div className="WishlistContent"> 
                {wish?.length > 0 
                    ? <WishlistItem wish={wish} /> 
                    :   (
                        <>  
                            <div style={{display:"flex"}}>
                                <h3 className="emptyWishlist" style={{fontWeight:"bold"}}>{userName}</h3>
                                <h3 className="emptyWishlist">, your Wishlist is empty.</h3>
                            </div>
                            <h3 className="emptyWishlist" style={{paddingBottom:"1rem", fontSize:"1.4rem"}}>We are sure the wishlist is already in your mind, just add it here and make it real!</h3>
                            <Link to="/store" className="Buttons" style={{padding:"1rem"}}>Store</Link>
                        </>
                    )
                }  
            </div>
        </div>
    );
}

export default WishlistContainer;