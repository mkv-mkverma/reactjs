import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {TMDB_OPTIONS} from "../public/common/constant";
import {addPopularMovies} from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => {
    return store.movie?.popularMovies;
  });

  const getPopularMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      TMDB_OPTIONS
    );
    const json = await response.json();

    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
