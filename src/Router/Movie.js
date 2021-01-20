import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMoives } from "../redux/Movie/MovieSlice";
import styled from "styled-components";

const DIV_0 = styled.div`
  display: flex;
  flex-direction: column;
`;

const BTN = styled.button``;

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
  const { titles, imgPaths, ratings, ids } = useSelector(
    (state) => state.MovieReducer
  );

  const renderMovies = () => {
    if (titles.length !== 0) {
      const baseUrl = "https://image.tmdb.org/t/p/original/";
      const html = titles.map((title, idx) => {
        return (
          <LINK href={`/movie/${ids[idx]}`}>
            <DIV>
              <H1>{title}</H1>
              <IMG src={`${baseUrl}${imgPaths[idx]}`} />
            </DIV>
          </LINK>
        );
      });
      return html;
    }
  };

  const increasePage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    dispatch(fetchPopularMoives(page));
  }, [page]);
  // return <div>MOVIE</div>;
  return (
    <DIV_0>
      <DIV_1>{renderMovies()}</DIV_1>
      <BTN onClick={increasePage}>load more</BTN>
    </DIV_0>
  );
};

export default Movie;
