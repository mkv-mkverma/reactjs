import React from "react";
import MovieList from "./MovieList";
import MovieCard from "./MovieCard";
import {useSelector} from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => {
    return store.movie;
  });

  return (
    <div className="bg-black">
      <div className=" pl-4 relative z-20 -mt-[10%]">
        <MovieList
          title={"Top Picks for You"}
          movies={movies.nowPlayingMovies}
        />
        <MovieList title={"Trending Movies"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
