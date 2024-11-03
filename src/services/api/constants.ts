export const TMDB_API_KEY = "793dcc8ee2283a3e0f908b6d2820498f";

export const BASE_URL = "https://api.themoviedb.org/3";

export const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
export const MOVIE_POPULAR = "/movie/popular";
export const MOVIE_TOP_RATED = "/movie/top_rated";
export const SEARCH_MULTI = "/search/multi";
export const MOVIE_GENRES = "/genre/movie/list";
export const MOVIE_GENRE = "/discover/movie";
export const MOVIE_VIDEOS = "/movie/videos";
export const MOVIE_RECOMMENDATIONS = "/movie/recommendations";
export const MOVIE_DISCOVER = "/discover/movie";
export const MOVIE_LATEST = "/movie/latest";
export const MOVIE_TRENDING = "/trending/movie/day";
export const MOVIE_DETAIL = "/movie";

export const TV_POPULAR = "/tv/popular";
export const TV_TOP_RATED = "/tv/top_rated";
export const TV_GENRES = "/genre/tv/list";
export const TV_GENRE = "/discover/tv";
export const TV_VIDEOS = "/tv/videos";
export const TV_RECOMMENDATIONS = "/tv/recommendations";
export const TV_DISCOVER = "/discover/tv";
export const TV_LATEST = "/tv/latest";
export const TV_TRENDING = "/trending/tv/day";
export const TV_DETAIL = "/tv";
export const TV_SEASON = "/season";
export const TV_EPISODE = "/episode";
export const TV_EPISODE_GROUP = "/episode_group";

export const findRequestType = (type: string) => {
  switch (type) {
    case "movie":
      return {
        popular: MOVIE_POPULAR,
        topRated: MOVIE_TOP_RATED,
        genres: MOVIE_GENRES,
        genre: MOVIE_GENRE,
        videos: MOVIE_VIDEOS,
        recommendations: MOVIE_RECOMMENDATIONS,
        discover: MOVIE_DISCOVER,
        latest: MOVIE_LATEST,
        trending: MOVIE_TRENDING,
        detail: MOVIE_DETAIL,
      };
    case "tv":
      return {
        popular: TV_POPULAR,
        topRated: TV_TOP_RATED,
        genres: TV_GENRES,
        genre: TV_GENRE,
        videos: TV_VIDEOS,
        recommendations: TV_RECOMMENDATIONS,
        discover: TV_DISCOVER,
        latest: TV_LATEST,
        trending: TV_TRENDING,
        detail: TV_DETAIL,
        season: TV_SEASON,
        episode: TV_EPISODE,
        episodeGroup: TV_EPISODE_GROUP,
      };
    default:
      return null;
  }
};
