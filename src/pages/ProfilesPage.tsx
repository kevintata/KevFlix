import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { users } from "../constants/profiles";

export const SelectProfilePage: React.FC = () => {
  return (
    <>
      <div className="flex w-dvw justify-center items-center flex-col gap-6">
        <h1>Who's Watching?</h1>
        <div className="flex flex-row gap-5">
          {users.map((profile, index) => (
            <div className="flex mx-4 items-center justify-center">
              <NavLink
                // TODO -> Set this onClick to save and change currently logged user in context, to use in navbar top right profile component
                onClick={() => console.log("Logged in =>", profile)}
                key={profile}
                to={`/browse`}
                className="flex items-center justify-center flex-col gap-1 text-gray-500"
              >
                <div
                  style={{
                    width: "110px",
                    height: "110px",
                    borderRadius: "4px",
                    backgroundImage: `url(https://avatar.iran.liara.run/public/${index + 1})`,
                    backgroundSize: "cover",
                  }}
                />
                {profile}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
      <Outlet />
    </>
  );
};
