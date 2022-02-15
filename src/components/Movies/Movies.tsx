import React, { useRef } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

import { Link } from "react-router-dom";
import { movieTypes } from "../../pages/Home/Home";
import { poster_url } from "../../tools/api/url";
import "./Movies.scss";
interface moviesInterface {
   movies: movieTypes;
}
const Movies: React.FC<moviesInterface> = ({ movies }) => {
   const scrollRef = useRef<HTMLHeadingElement>(null);

   const enableKeyboardCursorToScroll = () => {
      if (scrollRef.current) {
         scrollRef.current.focus();
      }
   };
   return (
      <div className="movies-wrapper">
         {movies.map(({ title, moviesData }, index) => {
            return (
               <div key={index} className="movies">
                  <h3 className="title">{title}</h3>
                  <ScrollContainer className="container">
                     <div
                        className="movies-data tiles"
                        onFocus={enableKeyboardCursorToScroll}
                        ref={scrollRef}
                     >
                        {moviesData.map(({ id, poster_path }) => {
                           return (
                              <div className="row" key={Number(id)}>
                                 <Link to="/">
                                    <img
                                       src={`${poster_url}${poster_path}`}
                                       alt=""
                                    />
                                 </Link>
                              </div>
                           );
                        })}
                     </div>
                  </ScrollContainer>
               </div>
            );
         })}
      </div>
   );
};

export default Movies;
