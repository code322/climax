import React, { useEffect } from "react";
import "./Details.scss";
import "../../index.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../redux/actions/getDetails";
import { RootState } from "../../redux/rootReducer";
import { youtube_url } from "../../tools/api/url";
import YouTube from "../../components/YouTube/YouTube";
import Description from "../../components/Description/Description";
import Recommendations from "../../components/Recommendations/Recommendations";

const Details: React.FC = () => {
   const { id } = useParams();
   // dispatch getDetails
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getDetails(id));
   }, [dispatch, id]);

   // get details data
   const {
      detailsData: {
         description: { title, overview, genres },
         youtubeVideoKey,
         recommended,
      },
   } = useSelector((state: RootState) => state.detailsReducer);
   console.log(recommended);
   return (
      <section className="details">
         <div className="details-container bd-container">
            <div className="details-wrapper">
               {/* ===display trailer=== */}
               <div className="trailer-container">
                  <YouTube youtubeVideoKey={youtubeVideoKey} />
               </div>
               {/* === trailer description=== */}
               <div className="description-container">
                  <Description
                     title={title}
                     overview={overview}
                     genres={genres}
                  />
               </div>

               {/* === Recommendations=== */}
               <Recommendations recommended={recommended} />
            </div>
         </div>
      </section>
   );
};

export default Details;
