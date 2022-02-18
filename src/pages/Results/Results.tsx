import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { poster_url } from "../../tools/api/url";
import { Link } from "react-router-dom";
import "./Results.scss";
import { useEffect, useState } from "react";
import { movieData } from "../../redux/actions/actionTypes";

const Results = () => {
   const [resultsData, setResultsData] = useState<movieData[]>([]);
   const { loading, results } = useSelector(
      (state: RootState) => state.resultsReducer
   );

   useEffect(() => {
      setResultsData(() => results.filter((i) => i.poster_path !== null));
   }, []);
   return (
      <section className="results">
         <div className="results-container bd-container">
            {
               <div className="poster-container">
                  {resultsData.map(({ id, poster_path }) => {
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
            }
         </div>
      </section>
   );
};

export default Results;
