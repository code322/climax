import { useEffect, useState } from "react";
import "./Home.scss";
import tv from "../../assets/images/tv.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { getMovies } from "../../redux/actions/getMovieAction";
import { movieData } from "../../redux/actions/actionTypes";
import Movies from "../../components/Movies/Movies";
import { TailSpin } from "react-loader-spinner";
export type movieTypes = [
   { title: string; moviesData: movieData[] },
   { title: string; moviesData: movieData[] },
   { title: string; moviesData: movieData[] }
];
const Home: React.FC = () => {
   // dispatch getMovies action
   const {
      loading,
      movies: { nowPlaying, popular, topRated },
   } = useSelector((state: RootState) => state.movieReducer);
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getMovies());
   }, [dispatch]);

   let movies: movieTypes = [
      { title: "now playing", moviesData: nowPlaying },
      { title: "popular", moviesData: popular },
      { title: "now playing", moviesData: topRated },
   ];

   return (
      <section className="home">
         <div className="home-container">
            <div className="hero-container">
               <div className="hero">
                  <div className="hero-wrapper bd-container">
                     <div className="hero-info">
                        <h1>enjoy your TV.</h1>
                        <p>
                           Watch on Smart TVs, Playstation, Xbox, Chromecast,
                           Apple TV, Blu-ray players, and more.
                        </p>
                     </div>
                     <div className="img-container">
                        <img src={tv} alt="Tv" />
                     </div>
                  </div>
               </div>
            </div>
            <div className="movies-container">
               {loading ? (
                  <div style={{ margin: "20px" }}>
                     <TailSpin
                        height="50"
                        width="50"
                        color="grey"
                        ariaLabel="loading"
                     />
                  </div>
               ) : (
                  <Movies movies={movies} />
               )}
            </div>
         </div>
      </section>
   );
};

export default Home;
