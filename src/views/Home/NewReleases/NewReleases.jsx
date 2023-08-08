import { Link } from "react-router-dom"
import "./NewReleases.css";

const NewReleases = ({ allbooks }) => {

    const currentDate = new Date();

    const sixMonthsAgoDate = new Date();
    sixMonthsAgoDate.setMonth(currentDate.getMonth() - 3);

    const filteredData = allbooks.filter((item) => {
        const publicationDate = new Date(item.publicationDate);
        return publicationDate > sixMonthsAgoDate;
    });


    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
      

    return (
        <div className="ReleaseNowContainer">
            <div className="ReleaseNowHomeTitle">
                <Link to="/store" style={{textDecoration:"none", color:"#17424b"}} onClick={handleClick}>
                    <p> CHECK NOW! </p>
                </Link>
                <h1 style={{marginBottom:"2rem", color:"#17424b"}}> New Releases </h1>
            </div>
            <div className="scrollContainer">
                {filteredData?.map((item) =>{
                    return (
                        <>
                            <Link to={`/detail/${item.id}`} style={{textDecoration:"none", fontWeight:"400", color:"#17424b"}}>
                                <div key={item.id} className="ImagenesCarrusel">
                                    <img src={item.image} alt="nino" width="200" height="300" onClick={handleClick}/>
                                    <h1> {item.title} </h1>
                                </div>
                            </Link>
                        </>
                    )
                })}
            </div>
        </div>
    );
};

export default NewReleases;