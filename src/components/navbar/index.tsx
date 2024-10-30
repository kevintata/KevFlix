import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const Navbar: React.FC = () => {
  // TODO -> Create sidebar, decide if you're going to use this project as dashboard with charts or as KevFlix

  return (
    <>
      <div className="top-0 left-0 cursor-pointer">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            background: "transparent",
            width: "250px",
            height: "100dvh",
            borderRadius: "5px",
          }}
        >
          <div className="relative top-10 left-4 flex flex-col">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/profiles"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              profiles
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};
