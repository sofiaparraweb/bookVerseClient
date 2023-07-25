import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import "./Stars.css"

const Stars = ({stars, reviews}) =>{

    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        debugger;

        return (
          <span key={index}>
            {stars >= index + 1 ? (
              <FaStar className="iconStars" />
            ) : stars >= number ? (
              <FaStarHalfAlt className="iconStars" />
            ) : (
              <AiOutlineStar className="iconStars" />
            )}
          </span>
        );
    });

    return (
        <div className="">
            <div className="icon-style">
                {ratingStar}
                <p style={{color:"grey"}}>({reviews} customer reviews)</p>
            </div>
        </div>
    );
};

export default Stars;