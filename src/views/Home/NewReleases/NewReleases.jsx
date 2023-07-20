import "./NewReleases.css";

const NewReleases = () => {

    const imagePaths = [
        {
            image: "https://m.media-amazon.com/images/I/51SqcpP2tML.jpg",
            title: "Behind the Net"
        },
        {
            image: "https://m.media-amazon.com/images/I/41uGfACAeaL.jpg",
            title: "Joey"
        },
        {
            image: "https://m.media-amazon.com/images/I/51BiVJXWFuL.jpg",
            title: "After Death"
        },
        {
            image: "https://m.media-amazon.com/images/I/51Dmd-BFFML.jpg",
            title: "Meet Your Match"
        },
        {
            image: "https://m.media-amazon.com/images/I/519Q+F+a5ML.jpg",
            title: "Plays Well With Others"
        },
        {
            image: "https://m.media-amazon.com/images/I/51d09ogVY2L.jpg",
            title: "Never Give Your Heart To A Hookup"
        },
        {
            image: "https://m.media-amazon.com/images/I/51N6HlGmSTL.jpg",
            title: "Shutout: Rules of the Game Book 2"
        },
        {
            image: "https://m.media-amazon.com/images/I/51GUarg3UBL.jpg",
            title: "The Broken Protector"
        },
        {
            image: "https://m.media-amazon.com/images/I/41sLZOpQcRL.jpg",
            title: "The Anti-hero"
        }
    ];

    return (
        <div className="ReleaseNowContainer">
            <div className="ReleaseNowHomeTitle">
                <p> CHECK NOW! </p>
                <h1> New Releases </h1>
            </div>
            <div className="scrollContainer">
                {imagePaths.map((path, index) => {
                    return (
                        <>
                            <div key={index} className="ImagenesCarrusel">
                                <img src={path.image} alt="nino" width="200" height="300"/>
                                <h1> {path.title} </h1>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    );
};

export default NewReleases;