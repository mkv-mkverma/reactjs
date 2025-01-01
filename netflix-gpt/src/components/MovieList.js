import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {
  return (
    <div className="px-6">
      <h1 className="text-lg text-white py-4">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard
              posterPath={movie.backdrop_path}
              title={movie.title}
              key={movie.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
