import { createSlice } from "@reduxjs/toolkit";
import callApi from "../../api";

const initialState = {
  loading: null,
  data: {},
  error: null,
};

const MovieDetailSlice = createSlice({
  name: "movieDetailSlice",
  initialState,
  reducers: {
    loadingMovie: (state) => {
      state.loading = true;
    },
    getMovieDetail: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    rejectedMovie: (state, action) => {
      state.error = true;
    },
  },
});

export const {
  loadingMovie,
  getMovieDetail,
  rejectedMovie,
} = MovieDetailSlice.actions;

export const fetchMovieDetail = (id) => async (dispatch, getstate) => {
  try {
    const response = await callApi("get", `movie/${id}`);
    const { data } = response;
    const { backdrop_path, overview } = data;
    const results = { backdrop_path, id, overview };
    dispatch(getMovieDetail(results));
  } catch (e) {
    console.log(e);
    dispatch(rejectedMovie());
  }
};

export default MovieDetailSlice.reducer;
