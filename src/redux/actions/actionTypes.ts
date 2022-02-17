export enum actionTypes {
   FETCH_MOVIE_LOADING = "FETCH_MOVIE_LOADING",
   FETCH_MOVIE_SUCCESS = "FETCH_MOVIE_SUCCESS",
   FETCH_MOVIE_FAIL = "FETCH_MOVIE_FAIL",

   //GET DETAILS
   GET_DETAILS_LOADING = "GET_DETAILS_LOADING",
   GET_DETAILS_SUCCESS = "GET_DETAILS_SUCCESS",
   GET_DETAILS_FAIL = "GET_DETAILS_FAIL",
}

type actionLoad = {
   type: actionTypes.FETCH_MOVIE_LOADING;
};

type actionSuccess = {
   type: actionTypes.FETCH_MOVIE_SUCCESS;
   payload: {
      topRated: movieData[];
      popular: movieData[];
      nowPlaying: movieData[];
   };
};

type actionFail = {
   type: actionTypes.FETCH_MOVIE_FAIL;
   payload: any;
};

export interface movieData {
   id: Number;
   poster_path: string;
}

// GET DETAILS
type actionGetDetailsLoading = {
   type: actionTypes.GET_DETAILS_LOADING;
};

type actionGetDetailsSuccess = {
   type: actionTypes.GET_DETAILS_SUCCESS;
   payload: detailsTypes;
};

export type detailsTypes = {
   description: {
      title: string;
      overview: string;
      vote_average: number;
      genres: [{ id: number; name: string }];
   };
   youtubeVideoKey: string;
   recommended: movieData[];
};

type actionGetDetailsFail = {
   type: actionTypes.GET_DETAILS_FAIL;
   payload: any;
};

export type Actions =
   | actionLoad
   | actionSuccess
   | actionFail
   | actionGetDetailsFail
   | actionGetDetailsLoading
   | actionGetDetailsSuccess;
