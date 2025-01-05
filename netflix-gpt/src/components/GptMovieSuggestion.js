import React from "react";
import MovieList from "./MovieList";
import {useSelector} from "react-redux";

const GptMovieSuggestion = () => {
  const {gptTMDBMovie, searchText} = useSelector((store) => {
    return store.gpt;
  });

  return (
    gptTMDBMovie && (
      <div className="text-gray-400 px-8">
        <div className="px-6 py-4 text-xl">
          More to explore:{" "}
          <p className="text-2xl inline-block text-white">卌 {searchText}</p>
        </div>
        <div>
          {gptTMDBMovie.map((movie, index) => (
            <MovieList title={""} movies={movie.results} />
          ))}
        </div>
      </div>
    )
  );
};

export default GptMovieSuggestion;
