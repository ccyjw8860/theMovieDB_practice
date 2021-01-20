import { createSlice } from "@reduxjs/toolkit";
import callApi from "../../api";

const initialState = {
  loading: null,
  titles: [],
  imgPaths: [],
  ratings: [],
  ids: [],
  error: null,
};

const MovieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {
    loadingMovies: (state) => {
      state.loading = true;
    },
    getPopularMovies: (state, { payload }) => {
      const { titles, imgPaths, ratings, ids } = payload;
      state.loading = false;
      state.titles = [...state.titles, ...titles];
      state.imgPaths = [...state.imgPaths, ...imgPaths];
      state.ratings = [...state.ratings, ...ratings];
      state.ids = [...state.ids, ...ids];
    },
    rejectedMovies: (state, action) => {
      state.error = true;
    },
  },
});

export const {
  loadingMovies,
  getPopularMovies,
  rejectedMovies,
} = MovieSlice.actions;

export const fetchPopularMoives = (page) => {
  return async (dispatch) => {
    try {
      const response = await callApi("get", "movie/popular", page);
      const {
        data: { results },
      } = response;

      const titles = results.map((result) => result["original_title"]);
      const imgPaths = results.map((result) => result["poster_path"]);
      const ratings = results.map((result) => result["vote_average"]);
      const ids = results.map((result) => result["id"]);
      const data = { titles, imgPaths, ratings, ids };

      dispatch(getPopularMovies(data));
    } catch (e) {
      dispatch(rejectedMovies());
      console.log(e);
    }
  };
};

export default MovieSlice.reducer;
