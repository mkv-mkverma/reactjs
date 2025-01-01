import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const Browse = () => {
  useNowPlayingMovies();
  useUpcomingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/*
        MainContainer component
          - VideoBackground component (API call for movie video by id)
          - Video Title and Subtitle component
        SecondaryContainer component
          - MovieList * n (Component)
            - card * n (Component)

            MovieList - Popular
              
            MovieList - Now Playing
            MovieList - Trending
            MovieList - Horror

      */}
    </>
  );
};

export default Browse;
