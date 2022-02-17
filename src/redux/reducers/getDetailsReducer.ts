import { InterfaceType } from "typescript";
import { actionTypes, Actions, detailsTypes } from "./../actions/actionTypes";

interface detailsInterface {
   loading: boolean;
   detailsData: detailsTypes;
   error?: any;
}

const initialState: detailsInterface = {
   loading: false,
   detailsData: {
      description: {
         title: "",
         overview: "",
         vote_average: 0,
         genres: [
            {
               id: 0,
               name: "",
            },
         ],
      },
      youtubeVideoKey: "",
      recommended: [],
   },
   error: null,
};

export const detailsReducer = (
   state: detailsInterface = initialState,
   action: Actions
) => {
   switch (action.type) {
      case actionTypes.GET_DETAILS_LOADING:
         return {
            ...state,
            loading: true,
         };

      case actionTypes.GET_DETAILS_SUCCESS:
         return {
            ...state,
            loading: false,
            detailsData: {
               description: {
                  title: action.payload.description.title,
                  overview: action.payload.description.overview,
                  vote_average: action.payload.description.vote_average,
                  genres: action.payload.description.genres,
               },
               youtubeVideoKey: action.payload.youtubeVideoKey,
               recommended: action.payload.recommended,
            },
            error: null,
         };

      case actionTypes.GET_DETAILS_FAIL:
         return {
            ...state,
            loading: false,
            detailsData: {
               description: {
                  title: "",
                  overview: "",
                  vote_average: 0,
                  genres: [
                     {
                        id: 0,
                        name: "",
                     },
                  ],
               },
               youtubeVideoKey: "",
               recommended: [],
            },
            error: action.payload,
         };
      default:
         return state;
   }
};
