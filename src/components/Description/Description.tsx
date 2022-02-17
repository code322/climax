import "./Description.scss";

interface descriptionInterface {
   title: string;
   overview: string;
   genres: [{ id: number; name: string }];
}
const Description: React.FC<descriptionInterface> = ({
   title,
   overview,
   genres,
}) => {
   return (
      <div className="description">
         <div className="description-container">
            <div>
               <h2>{title}</h2>
               <p>{overview}</p>
            </div>
            <div className="genre-container">
               <h3>Genres:</h3>
               <div>
                  {genres.map((genre) => {
                     return <p>{genre.name}</p>;
                  })}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Description;
