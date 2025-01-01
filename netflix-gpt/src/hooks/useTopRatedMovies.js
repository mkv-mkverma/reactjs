import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {TMDB_OPTIONS} from "../public/common/constant";
import {addTopRatedMovies} from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const topRatedMovies = useSelector((store) => {
    return store.movie.topRatedMovies;
  });

  const getTopRatedMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      TMDB_OPTIONS
    );
    const json = await response.json();

    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
