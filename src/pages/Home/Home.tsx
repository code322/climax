import { useEffect, useState } from "react";
import "./Home.scss";
import tv from "../../assets/images/tv.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { getMovies } from "../../redux/actions/actions";
import { movieData } from "../../redux/actions/actionTypes";
function Home() {
   type movieTypes = [
      { now_playing_movies: { title: string; movies: movieData[] } },
      { popular_movies: { title: string; movies: movieData[] } },
      { top_rated_movies: { title: string; movies: movieData[] } }
   ];
   const [input, setInput] = useState<string>("");
   const [movies, setMovies] = useState<movieTypes>([
      { now_playing_movies: { title: "", movies: [] } },
      { popular_movies: { title: "", movies: [] } },
      { top_rated_movies: { title: "", movies: [] } },
   ]);

   // get input value
   const handleChange = (
      e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
   ) => {
      setInput(e.target.value);
   };

   // fetch the movies

   const {
      loading,
      movies: { nowPlaying, popular, topRated },
   } = useSelector((state: RootState) => state.movieReducer);
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getMovies());
      if (!loading) {
         setMovies([
            {
               now_playing_movies: { title: "now playing", movies: nowPlaying },
            },
            { popular_movies: { title: "popular", movies: popular } },
            { top_rated_movies: { title: "now playing", movies: topRated } },
         ]);
      }
   }, [dispatch]);

   return (
      <section className="home">
         <div className="home-container">
            <div className="hero-container">
               <div className="input-container bd-container">
                  <input
                     className="input "
                     type="text"
                     placeholder="Search Movie..."
                     onChange={handleChange}
                     value={input}
                  />
               </div>
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
            <div className="movie-container"></div>
         </div>
      </section>
   );
}

export default Home;
