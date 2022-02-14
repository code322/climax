import { Actions, actionTypes, movieData } from "../actions/actionTypes";

interface interfaceState {
   loading: boolean;
   movies: {
      topRated: movieData[];
      popular: movieData[];
      nowPlaying: movieData[];
   };
   err?: string;
}

let initialState: interfaceState = {
   loading: false,
   movies: {
      topRated: [],
      popular: [],
      nowPlaying: [],
   },
};

export const movieReducer = (
   state: interfaceState = initialState,
   action: Actions
): interfaceState => {
   switch (action.type) {
      case actionTypes.FETCH_MOVIE_LOADING:
         return { ...state, loading: true };
      case actionTypes.FETCH_MOVIE_SUCCESS:
         return {
            ...state,
            loading: false,
            movies: action.payload,
            err: "",
         };
      case actionTypes.FETCH_MOVIE_FAIL:
         return {
            ...state,
            loading: false,

            err: action.payload,
         };

      default:
         return state;
   }
};
