import { combineReducers } from "redux";
import { movieReducer } from "./reducers/getMoviesReducer";
export const rootReducer = combineReducers({
   movieReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
