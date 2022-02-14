import { useEffect, useState } from "react";
import "./Home.scss";
import tv from "../../assets/images/tv.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { getMovies } from "../../redux/actions/actions";

function Home() {
   const [input, setInput] = useState<string>("");

   // get input value
   const handleChange = (
      e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
   ) => {
      setInput(e.target.value);
   };

   // fetch the movies
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getMovies());
   }, [dispatch]);
   const state = useSelector((state: RootState) => state.movieReducer.movies);
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
