import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper";

import { Link } from "react-router-dom";
import { movieTypes } from "../../pages/Home/Home";
import { poster_url } from "../../tools/api/url";

import "./Movies.scss";

import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

interface moviesInterface {
   movies: movieTypes;
}

const Movies: React.FC<moviesInterface> = ({ movies }) => {
   return (
      <div className="movies-wrapper">
         {movies.map(({ title, moviesData }, index) => {
            return (
               <div key={index} className="movies">
                  <h3 className="title">{title}</h3>
                  <div className="movies-data tiles">
                     <Swiper
                        slidesPerView={"auto"}
                        spaceBetween={5}
                        freeMode={true}
                        pagination={{
                           clickable: true,
                        }}
                        modules={[FreeMode]}
                        className="mySwiper"
                     >
                        {moviesData.map(({ id, poster_path }) => {
                           return (
                              <SwiperSlide key={Number(id)}>
                                 <div className="row" key={Number(id)}>
                                    <Link to={`/details/${id}`}>
                                       <img
                                          src={`${poster_url}${poster_path}`}
                                          alt=""
                                       />
                                    </Link>
                                 </div>
                              </SwiperSlide>
                           );
                        })}
                     </Swiper>
                  </div>
               </div>
            );
         })}
      </div>
   );
};

export default Movies;
