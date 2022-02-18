import { API_KEY } from "./../../tools/api/url";
import { Actions } from "./actionTypes";
import axios from "axios";
import { Dispatch } from "redux";
import { search_movie_url } from "../../tools/api/url";

const getResults =
   (movieName: string) => async (dispatch: Dispatch<Actions>) => {
      const data = await axios.get(`${search_movie_url}`, {
         params: {
            api_Key: API_KEY,
            query: movieName,
         },
      });
   };
