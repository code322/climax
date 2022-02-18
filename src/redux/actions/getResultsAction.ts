import { API_KEY } from "../../tools/api/url";
import { Actions, actionTypes } from "./actionTypes";
import axios from "axios";
import { Dispatch } from "redux";
import { search_movie_url } from "../../tools/api/url";

export const getResults =
   (movieName: string) => async (dispatch: Dispatch<Actions>) => {
      dispatch({
         type: actionTypes.GET_RESULTS_LOADING,
      });

      try {
         const {
            data: { results },
         } = await axios.get(`${search_movie_url}`, {
            params: {
               api_Key: API_KEY,
               query: movieName,
            },
         });
         dispatch({
            type: actionTypes.GET_RESULTS_SUCCESS,
            payload: results,
         });
      } catch (error: any) {
         dispatch({
            type: actionTypes.GET_RESULTS_FAIL,
            payload: error,
         });
      }
   };
