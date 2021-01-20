import { combineReducers } from "redux";
import MovieReducer from "./Movie/MovieSlice";
import MovieDetailReducer from "./Movie/MovieDetailSlice";

const rootReducer = combineReducers({
  MovieReducer,
  MovieDetailReducer,
});

export default rootReducer;
