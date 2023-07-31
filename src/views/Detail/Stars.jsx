import React, { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import "./Stars.css";

const Stars = ({stars, reviews}) =>{

  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
      let number = index + 0.5;

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


// const Stars = ({ stars }) => {
//   // const [hoveredStar, setHoveredStar] = useState(0);

//   // const handleStarClick = (selectedStar) => {  
//   //   onStarClick(selectedStar);
//   // };

//   const ratingStar = Array.from({ length: 5 }, (elem, index) => {
//     let number = index + 0.5;
//     return (
//       <span
//         key={index}
//         // onClick={() => handleStarClick(index + 1)}
//         // onMouseEnter={() => setHoveredStar(index + 1)}
//         // onMouseLeave={() => setHoveredStar(0)}
//       >
//         {stars >= index + 1 ? (
//           <FaStar className="iconStars" />
//         ) : stars >= number ? (
//           <FaStarHalfAlt className="iconStars" />
//         ) : hoveredStar >= index + 1 ? (
//           <FaStar className="iconStars" />
//         ) : (
//           <AiOutlineStar className="iconStars" />
//         )}
//       </span>
//     );
//   });

//   return (
//     <div className="">
//       <div className="icon-style">
//         {ratingStar}
//         <p style={{ color: "grey" }}>({reviews} customer reviews)</p>
//       </div>
//     </div>
//   );
// };

// export default Stars;

