import React from "react";
import { Navbar } from "../components/navbar";
import { Row } from "./Row";
import { getPopularMovies, getPopularTvShows } from "../services/api/request";

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col w-dvw">
      <Navbar />
      <p className="hover:scale-125">Large movie cover with image bg</p>
      <div className="flex justify-center items-center flex-col w-full gap-2">
        <Row
          queryFn={getPopularMovies}
          queryKey={["popular-movies"]}
          title="Popular Movies"
        />
        <Row
          queryFn={getPopularTvShows}
          queryKey={["popular-tv-shows"]}
          title="Popular TV Shows"
        />
      </div>
    </div>
  );
};
