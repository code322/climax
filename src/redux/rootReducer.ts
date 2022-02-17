import { detailsReducer } from "./reducers/getDetailsReducer";
import { combineReducers } from "redux";
import { movieReducer } from "./reducers/getMoviesReducer";
export const rootReducer = combineReducers({
   movieReducer,
   detailsReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
