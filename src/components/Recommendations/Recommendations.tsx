import React from "react";
import { Link } from "react-router-dom";
import { movieData } from "../../redux/actions/actionTypes";
import { poster_url } from "../../tools/api/url";
import "./Recommendations.scss";
interface recommendations {
   recommended: movieData[];
}

const Recommendations: React.FC<recommendations> = ({ recommended }) => {
   return (
      <div className="recommendations">
         <h1>Recommendations</h1>
         <div className="poster-container">
            {recommended.map(({ id, poster_path }) => {
               return (
                  <Link
                     to={`/details/${id}`}
                     key={id}
                     className="poster-wrapper"
                  >
                     <img src={`${poster_url}${poster_path}`} alt="" />
                  </Link>
               );
            })}
         </div>
      </div>
   );
};

export default Recommendations;
