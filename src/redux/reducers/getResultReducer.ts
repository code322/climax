import { movieData, Actions, actionTypes } from "./../actions/actionTypes";

interface resultInterface {
   loading: boolean;
   results: movieData[];
   error?: any;
}

const initialState: resultInterface = {
   loading: false,
   results: [],
   error: null,
};

export const resultsReducer = (
   state: resultInterface = initialState,
   action: Actions
): resultInterface => {
   switch (action.type) {
      case actionTypes.GET_RESULTS_LOADING:
         return {
            ...state,
            loading: true,
         };
      case actionTypes.GET_RESULTS_SUCCESS:
         return {
            ...state,
            loading: false,
            results: action.payload,
            error: null,
         };
      case actionTypes.GET_RESULTS_FAIL:
         return {
            ...state,
            loading: false,
            results: [],
            error: action.payload,
         };

      default:
         return state;
   }
};
