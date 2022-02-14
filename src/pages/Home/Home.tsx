import React from "react";
import "./Home.scss";
import tv from "../../assets/images/tv.png";

function Home() {
   return (
      <section className="home">
         <div className="home-container ">
            <div className="hero-container">
               <div className="input-container bd-container">
                  <input
                     className="input "
                     type="text"
                     placeholder="Search Movie..."
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
         </div>
      </section>
   );
}

export default Home;
