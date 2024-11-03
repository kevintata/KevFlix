import React from "react";
import { Navigate, NavLink, Outlet, useSearchParams } from "react-router-dom";

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
      <div className="w-full bg-black flex flex-row justify-between items-center p-5">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            )}
            {isSearchOpen && (
              <div className="flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
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
