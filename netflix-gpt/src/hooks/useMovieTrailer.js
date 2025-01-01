import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {TMDB_OPTIONS} from "../public/common/constant";
import {addTrailerVideo} from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => {
    return store.movie?.trailerVideo;
  });

  const getTrailerVideo = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      TMDB_OPTIONS
    );
    const json = await response.json();
    const trailerVideos = json.results.filter(
      (item) => item.type === "Trailer"
    );
    const trailerVideo = trailerVideos ? trailerVideos[0] : json.results[0];
    dispatch(addTrailerVideo(trailerVideo));
  };

  useEffect(() => {
    !trailerVideo && getTrailerVideo();
  }, []);
};

export default useMovieTrailer;
