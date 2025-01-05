import React, {useEffect, useRef} from "react";
import GptMovieSuggestion from "./GptMovieSuggestion";
import client from "../utils/openai";
import {useDispatch} from "react-redux";
import {setGptMovie, setGptTMDBMovie, setSearchText} from "../utils/gptSlice";
import {TMDB_OPTIONS} from "../public/common/constant";

const GptSearch = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const handleGptMoviesSearch = async () => {
    dispatch(setSearchText(searchText.current.value));
    gptSearch();
  };

  const gptSearch = async () => {
    const GPT_MOVIE_QUERY = `Act as a Movie Recommendation system and suggest some movies for the query ${searchText.current.value} only give me name of 5 movies,
        comma seperated value like the example result given ahead. Example: Gaddar, Don, Koi mil gaya, hum aap k hai kaun, sholay`;
    const chatCompletion = await client.chat.completions.create({
      messages: [{role: "user", content: GPT_MOVIE_QUERY}],
      model: "gpt-3.5-turbo",
      //   model: "gpt-4o", // will increase the cost
    });

    dispatch(setGptMovie(chatCompletion.choices[0].message.content));
    const movieList = chatCompletion.choices[0].message.content.split(",");
    getTMDBMovies(movieList);
  };

  const getTMDBMovies = async (movieList) => {
    const promiseArray = movieList.map(async (movie) => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
        TMDB_OPTIONS
      );
      return await response.json();
    });
    const TMDBMOVIES = await Promise.all(promiseArray);
    dispatch(setGptTMDBMovie(TMDBMOVIES));
  };

  return (
    <div className="bg-[#141414]">
      <form
        className="flex justify-center pt-[10%]"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="w-1/2 h-12 rounded-l-lg px-4"
          type="text"
          placeholder="Search for movies"
        />
        <button
          type="button"
          className="bg-red-500 text-white rounded-r-lg h-12 w-20"
          onClick={handleGptMoviesSearch}
        >
          Search
        </button>
      </form>
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
