import axios from "axios";
import { Dispatch } from "redux";
import { actionTypes, Actions } from "./actionTypes";
import {
   topRatedUrl,
   popularUrl,
   nowPlayingUrl,
   API_KEY,
} from "../../tools/api/url";

// fetch movies
export const getMovies = () => async (dispatch: Dispatch<Actions>) => {
   dispatch({ type: actionTypes.FETCH_MOVIE_LOADING });
   try {
      const topRated = await axios.get(topRatedUrl, {
         params: {
            api_key: API_KEY,
         },
      });

      const popular = await axios.get(popularUrl, {
         params: {
            api_key: API_KEY,
         },
      });
      const nowPlaying = await axios.get(nowPlayingUrl, {
         params: {
            api_key: API_KEY,
         },
      });
      dispatch({
         type: actionTypes.FETCH_MOVIE_SUCCESS,
         payload: {
            topRated: topRated.data.results,
            popular: popular.data.results,
            nowPlaying: nowPlaying.data.results,
         },
      });
      // console.log(topRated);
   } catch (err: any) {
      dispatch({
         type: actionTypes.FETCH_MOVIE_FAIL,
         payload: err,
      });
   }
};
