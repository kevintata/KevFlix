import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const Navbar: React.FC = () => {
  // TODO -> Create sidebar black fade in

  return (
    <>
      <div className="absolute top-0 left-0 w-dvw bg-black">
        <div className="relative top-0 left-0 flex flex-row gap-5 p-5">
          <NavLink to="/" className="text-white">
            Logo Here
          </NavLink>

          <NavLink to="/" className="">
            Home
          </NavLink>

          <NavLink to="/tvShows" className="">
            TV Shows
          </NavLink>

          <NavLink to="/movies" className="">
            Movies
          </NavLink>

          <NavLink to="/trending" className="">
            New & Popular
          </NavLink>

          <NavLink to="/myList" className="">
            My List
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};
