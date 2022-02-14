import React from "react";
import "./Home.scss";
import tv from "../../assets/images/tv.png";

function Home() {
   return (
      <section className="home">
         <div className="home-container ">
            <div className="hero-container bd-container">
               <input
                  className="input "
                  type="text"
                  placeholder="Search Movie..."
               />
               <div className="hero">
                  <div className="hero-title">
                     <h1>enjoy your tv</h1>
                     <p>
                        Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple
                        TV, Blu-ray players, and more.
                     </p>
                  </div>
                  <div className="img-container">
                     <img src={tv} alt="Tv" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Home;
