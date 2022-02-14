import React from "react";
import { movieTypes } from "../pages/Home/Home";
interface moviesInterface {
   movies: movieTypes;
}
const Movies: React.FC<moviesInterface> = ({ movies }) => {
   return (
      <div className="movies-wrapper">
         {movies.map(({ title, movies }, index) => {
            return (
               <div key={index} className="movies">
                  <h3 className="title">{title}</h3>
                  <div className="movies-data">
                     {movies.map(({ id, poster_path }) => {
                        return <div key={Number(id)}>id</div>;
                     })}
                  </div>
               </div>
            );
         })}
      </div>
   );
};

export default Movies;
