import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {TMDB_OPTIONS} from "../public/common/constant";
import {addNowPlayingMovies} from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector((store) => {
    return store.movie.nowPlayingMovies;
  });

  const getNowPlayingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      TMDB_OPTIONS
    );
    const json = await response.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
