import React from "react";
import { Navigate, NavLink, Outlet, useSearchParams } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";

export const Navbar: React.FC = () => {
  // TODO -> Create sidebar black fade in

  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams);

  const handleSearch = (inputQuery: string) => {
    if (inputQuery) {
      <Navigate to="/search" />;
      setSearchParams({ q: inputQuery });
      setIsSearchOpen(!isSearchOpen);
    }
    if (!inputQuery) {
      <Navigate to="/" />;
      setSearchParams({});
    }
  };

  return (
    <>
      <div
        className="w-full flex flex-row justify-between items-center p-5"
        style={{
          background:
            "linear-gradient(180deg, rgba(4, 4, 4, 1) 0%, rgba(20, 20, 20, 1) 8.5%, rgba(20, 20, 20, 1) 100%)",
        }}
      >
        <div className="flex flex-row gap-5">
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

        <div className="flex flex-row gap-5">
          <div>
            {!isSearchOpen && (
              <IoSearchSharp
                className="w-6 h-6 cursor-pointer"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              />
            )}
            {isSearchOpen && (
              <div className="flex flex-row">
                <IoSearchSharp
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                />
                <input
                  type="text"
                  id="searchQuery"
                  style={{
                    backgroundColor: "#fff",
                    color: "#000",
                  }}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
            )}
          </div>

          <NavLink to="/login" className="">
            user image
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};
