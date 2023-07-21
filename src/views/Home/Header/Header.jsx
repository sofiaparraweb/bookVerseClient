import { NavLink } from "react-router-dom";
import Header1 from "../../../assets/assets/Header1.jpg";
import Header2 from "../../../assets/assets/Header2.jpg";
import "./Header.css"

const Header = () => {
    return (
        <div className="FirstContainer">
            <div className="HeaderContainer">
                <div className="GridTwoColumns">
                    <div className="HeaderSectionData">
                        <p className="IntroData"> Welcome to </p>
                        <h1> The BookVerse </h1>
                        <p style={{marginBottom:'1rem'}}>Discover new worlds, uncover hidden mysteries, and embark on unforgettable journeys with our carefully curated selection of ebooks. Our platform offers you the convenience of exploring and purchasing books in digital format, making your reading experience more accessible than ever.</p>
                        {/* <p style={{marginBottom:'1rem'}}>Join our community of book lovers and embark on an adventure through the pages of The BookVerse. Happy reading!</p> */}
                        <NavLink>
                            <button className="Buttons">Shop now</button>
                        </NavLink>
                    </div>
                    <div className="HeaderSectionImage">
                        <figure>
                            <img src={Header1} alt="HeaderSectionPhoto" className="HeaderImage"></img>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;