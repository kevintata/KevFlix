import React from "react";
import { Navbar } from "../components/navbar";

export const HomePage: React.FC = () => (
  <div className="flex justify-center items-center flex-col w-dvw">
    <Navbar />
    <p className="hover:scale-125">Large movie cover with image bg</p>
    <div className="flex justify-center items-center flex-col w-full">
      <p className="hover:scale-125">Your next watch carousel</p>
      <p className="hover:scale-125">continue watching carousel</p>
      <p className="hover:scale-125">Top 10 TV Shows in Brazil Today</p>
      <p className="hover:scale-125">carousel</p>
      <p className="hover:scale-125">carousel</p>
      <p className="hover:scale-125">carousel</p>
      <p className="hover:scale-125">carousel</p>
      <p className="hover:scale-125">Top 10 Movies in Brazil Today</p>
      <p className="hover:scale-125">carousel</p>
      <p className="hover:scale-125">carousel</p>
    </div>
  </div>
);
