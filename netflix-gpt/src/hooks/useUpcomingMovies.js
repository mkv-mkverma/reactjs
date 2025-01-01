import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addUpcomingMovies} from "../utils/movieSlice";
import {TMDB_OPTIONS} from "../public/common/constant";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const upComingMovies = useSelector((store) => {
    return store.movie?.upComingMovies;
  });

  const getUpCommingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      TMDB_OPTIONS
    );
    const json = await response.json();

    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    !upComingMovies && getUpCommingMovies();
  }, []);
};

export default useUpcomingMovies;
