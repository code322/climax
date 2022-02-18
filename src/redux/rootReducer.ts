import { resultsReducer } from "./reducers/getResultReducer";
import { detailsReducer } from "./reducers/getDetailsReducer";
import { combineReducers } from "redux";
import { movieReducer } from "./reducers/getMoviesReducer";
export const rootReducer = combineReducers({
   movieReducer,
   detailsReducer,
   resultsReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
