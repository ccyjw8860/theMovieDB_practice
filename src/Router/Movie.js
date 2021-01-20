import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMoives } from "../redux/Movie/MovieSlice";
import styled from "styled-components";

const DIV_1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
`;
const DIV = styled.div`
  width: 300px;
  height: 500px;
  text-align: center;
  color: blue;
`;
const H1 = styled.h1`
  font-size: 10px;
`;
const IMG = styled.img`
  width: 200px;
  height: 350px;
`;
const P = styled.p``;

const LINK = styled.a``;

const Movie = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { data } = useSelector((state) => state.MovieReducer);

  const renderMovies = () => {
    if (data !== null) {
      const { titles, imgPaths, ratings, ids } = data;
      const baseUrl = "https://image.tmdb.org/t/p/original/";
      const html = titles.map((title, idx) => (
        <LINK href={`/movie/${ids[idx]}`}>
          <DIV>
            <H1>{title}</H1>
            <IMG src={`${baseUrl}${imgPaths[idx]}`} />
            <P>{ratings[idx]}</P>
          </DIV>
        </LINK>
      ));
      return html;
    }
  };

  renderMovies();

  useEffect(() => {
    dispatch(fetchPopularMoives(page));
  }, [dispatch]);

  return <DIV_1>{renderMovies()}</DIV_1>;
};

export default Movie;
