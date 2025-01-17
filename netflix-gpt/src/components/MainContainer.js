import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import {useSelector} from "react-redux";

const MainContainer = () => {
  const nowPlayingMovies = useSelector((store) => {
    return store.movie?.nowPlayingMovies;
  });
  if (!nowPlayingMovies) return;
  const {original_title, overview, id} = nowPlayingMovies[0];

  return (
    <div className=" bg-black">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
