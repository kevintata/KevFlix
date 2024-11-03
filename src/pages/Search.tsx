import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL, TMDB_API_KEY } from "../services/api/constants";
import { Outlet } from "react-router-dom";

export const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["movie-list"],
    queryFn: async () => {
      const response = await axios.get(
        `${BASE_URL}/search/multi?api_key=${TMDB_API_KEY}&query=${searchQuery}`
      );
      return response.data;
    },
  });

  React.useEffect(() => {
    refetch();
  }, [refetch, searchQuery]);

  if (isError) return <p>isError</p>;
  if (!data) return <p>no data</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="flex justify-center items-center flex-col w-dvw h-full ">
      <div className="flex gap-3">
        <label htmlFor="searchQuery">Search:</label>
        <input
          type="text"
          id="searchQuery"
          style={{
            backgroundColor: "#fff",
            color: "#000",
          }}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="flex flex-row gap-2 w-full flex-wrap">
        {data ? (
          data?.results.map((result: any) => (
            <div key={result.id} className="flex flex-col gap-3 max-w-40">
              <img
                src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
                alt={result.title}
              />
              <p>{result.title}</p>
            </div>
          ))
        ) : (
          <h1>No results found</h1>
        )}
      </div>

      <Outlet />
    </div>
  );
};
