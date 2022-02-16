import React from "react";
import "./Details.scss";
import "../../index.scss";
import { useParams } from "react-router-dom";

const Details: React.FC = () => {
   const { id } = useParams();
   console.log(id);
   return (
      <div className="details">
         <div className="details-container bd-container"> details</div>
      </div>
   );
};

export default Details;
