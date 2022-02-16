import axios from "axios";
import { Dispatch } from "redux";
import { Actions, actionTypes } from "./actionTypes";
import {
   API_KEY,
   recommendedUrl,
   youtube_videos,
   movieDataUrl,
} from "../../tools/api/url";
export const getDetails =
   (id: number) => async (dispatch: Dispatch<Actions>) => {
      // URLS
      let getYouTube = `${youtube_videos}/${id}/videos?api_key=${API_KEY}`;
      let getDescription = `${movieDataUrl}/${id}?api_key=${API_KEY}`;
      let getRecommended = `${recommendedUrl}/${id}/recommendations?api_key=${API_KEY}`;
      dispatch({
         type: actionTypes.GET_DETAILS_LOADING,
      });
      // GET DESCRIPTION
      try {
         const {
            data: { title, overview, vote_average, genres },
         } = await axios.get(getDescription);

         // GET YOUTUBE LINK
         const {
            data: { results },
         } = await axios.get(getYouTube);

         // GET RECOMMENDED
         const {
            data: { results: recommended },
         } = await axios.get(getRecommended);

         dispatch({
            type: actionTypes.GET_DETAILS_SUCCESS,
            payload: {
               description: {
                  title: title,
                  overview: overview,
                  vote_average: vote_average,
                  genres: genres,
               },
               youtubeVideoKey: results[0].key,
               recommended: recommended,
            },
         });
      } catch (error) {}
   };
