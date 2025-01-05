import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {
  return (
    <div className="pl-6">
      <h1 className="text-lg text-white py-2 mb-1">{title}</h1>
      <div className="flex overflow-x-auto mb-10 no-scrollbar">
        <div className="flex">
          {movies?.map(
            (movie) =>
              movie.poster_path && (
                <MovieCard
                  posterPath={movie.poster_path}
                  title={movie.title}
                  key={movie.id}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
