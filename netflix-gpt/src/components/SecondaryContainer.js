import React from "react";
import MovieList from "./MovieList";
import MovieCard from "./MovieCard";
import {useSelector} from "react-redux";

const SecondaryContainer = () => {
  const nowPlaying = useSelector((store) => {
    return store.movie;
  });
  return (
    <div className="flex">
      <MovieList nowPlaying={nowPlaying} />
    </div>
  );
};

export default SecondaryContainer;
