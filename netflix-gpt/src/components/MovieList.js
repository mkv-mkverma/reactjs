import React from "react";
import MovieCard from "./MovieCard";

const MovieList = () => {
  console.log("-------------");
  return (
    <div>
      <h1>Title</h1>
      <div className="flex">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};

export default MovieList;
