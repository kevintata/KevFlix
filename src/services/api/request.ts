import axios from "axios";
import { BASE_URL, MOVIE_POPULAR, TMDB_API_KEY, TV_POPULAR } from "./constants";

export const getPopularMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}${MOVIE_POPULAR}?api_key=${TMDB_API_KEY}`
  );
  return response.data;
};

export const getPopularTvShows = async () => {
  const response = await axios.get(
    `${BASE_URL}${TV_POPULAR}?api_key=${TMDB_API_KEY}`
  );
  return response.data;
};
