import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchMovieDetail } from "../redux/Movie/MovieDetailSlice";

const Detail = ({ location: { pathname } }) => {
  const id = pathname.split("/")[2];
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.MovieDetailReducer);
  const { backdrop_path, overview } = data;

  const renderDetail = () => {
    return (
      <div>
        <p>{backdrop_path}</p>
        <p>{overview}</p>
      </div>
    );
  };

  useEffect(() => {
    dispatch(fetchMovieDetail(id));
  }, [dispatch]);

  return renderDetail();
};

export default withRouter(Detail);
