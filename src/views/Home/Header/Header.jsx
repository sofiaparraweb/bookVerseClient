import { NavLink } from "react-router-dom";
import Header1 from "../../assets/Header1.jpg";
import Header2 from "../../assets/Header2.jpg";
import "./Header.css"

const Header = () => {
    return (
        <div className="FirstContainer">
            <div className="HeaderContainer">
                <div className="GridTwoColumns">
                    <div className="HeaderSectionData">
                        <p className="IntroData"> Welcome to </p>
                        <h1> The BookVerse </h1>
                        <p style={{marginBottom:'1rem'}}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum sit, blanditiis expedita, dicta labore aut laudantium alias placeat molestiae enim quos voluptatum, atque hic sed pariatur ea? Consequuntur, ullam deleniti.</p>
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