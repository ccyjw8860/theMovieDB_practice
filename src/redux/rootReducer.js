import { combineReducers } from "redux";
import MovieReducer from "./Movie/MovieSlice";

const rootReducer = combineReducers({
  MovieReducer,
});

export default rootReducer;
