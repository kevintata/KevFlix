import React from "react";
import { Navbar } from "../components/navbar";

export const HomePage: React.FC = () => (
  <div
    style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Navbar />
    <h1>Home Page</h1>
  </div>
);
