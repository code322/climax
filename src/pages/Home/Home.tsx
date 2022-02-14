import { useEffect, useState } from "react";
import "./Home.scss";
import tv from "../../assets/images/tv.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { getMovies } from "../../redux/actions/actions";
import { movieData } from "../../redux/actions/actionTypes";
import Movies from "../../components/Movies";
export type movieTypes = [
   { title: string; movies: movieData[] },
   { title: string; movies: movieData[] },
   { title: string; movies: movieData[] }
];
const Home: React.FC = () => {
   const [input, setInput] = useState<string>("");
   const [movies, setMovies] = useState<movieTypes>([
      { title: "", movies: [] },
      { title: "", movies: [] },
      { title: "", movies: [] },
   ]);

   // get input value
   const handleChange = (
      e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
   ) => {
      setInput(e.target.value);
   };

   // dispatch getMovies action and store movies from reducer into state
   const {
      loading,
      movies: { nowPlaying, popular, topRated },
   } = useSelector((state: RootState) => state.movieReducer);
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getMovies());
      if (!loading) {
         setMovies([
            { title: "now playing", movies: nowPlaying },
            { title: "popular", movies: popular },
            { title: "now playing", movies: topRated },
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
            <div className="movies-container">
               <Movies movies={movies} />
            </div>
         </div>
      </section>
   );
};

export default Home;
