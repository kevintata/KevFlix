import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
      404 Not Found
      <Link to="/">Home</Link>
    </div>
  );
};
