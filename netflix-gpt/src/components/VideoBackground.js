import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import {useSelector} from "react-redux";

const VideoBackground = ({movieId}) => {
  const trailerVideo = useSelector((store) => {
    return store.movie?.trailerVideo;
  });
  useMovieTrailer(movieId);

  return (
    <div className="w-screen no-hover">
      <iframe
        className="w-screen aspect-video no-hover"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
