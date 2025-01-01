import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import {useSelector} from "react-redux";

const VideoBackground = ({movieId}) => {
  const trailerVideo = useSelector((store) => {
    return store.movie?.trailerVideo;
  });
  useMovieTrailer(movieId);
  return <div>VideoBackground</div>;
};

export default VideoBackground;
