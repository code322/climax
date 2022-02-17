import React, { useEffect } from "react";
import "./Details.scss";
import "../../index.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../redux/actions/getDetails";
import { RootState } from "../../redux/rootReducer";
import { youtube_url } from "../../tools/api/url";
import YouTube from "../../components/YouTube/YouTube";

const Details: React.FC = () => {
   const { id } = useParams();
   // dispatch getDetails
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getDetails(id));
   }, [dispatch, id]);

   // get details data
   const {
      detailsData: { description, youtubeVideoKey, recommended },
   } = useSelector((state: RootState) => state.detailsReducer);
   console.log(description.title);
   return (
      <section className="details">
         <div className="details-container bd-container">
            <div className="details-wrapper">
               {/* ===display trailer=== */}
               <div className="trailer-container">
                  <YouTube youtubeVideoKey={youtubeVideoKey} />
               </div>
               {/* === trailer description=== */}
            </div>
         </div>
      </section>
   );
};

export default Details;
