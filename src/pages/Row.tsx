import React from "react";

import { useQuery } from "@tanstack/react-query";

import useEmblaCarousel from "embla-carousel-react";
import { IoChevronForward } from "react-icons/io5";

// TODO -> Create props that change the query key, queryFn, and the title of the row

type RowProps = {
  title: string;
  queryKey: string[];
  queryFn: () => Promise<any>;
};

export const Row: React.FC<RowProps> = ({ title, queryKey, queryFn }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
  });

  const { data, isLoading, isError } = useQuery({
    queryKey: queryKey,
    queryFn: queryFn,
  });

  const onPrevButtonClick = React.useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = React.useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  if (isError) return <p>isError</p>;
  if (!data) return <p>no data</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <div className="w-full flex flex-col justify-start gap-2">
        <p className="px-4">{title}</p>
        <IoChevronForward width="5em" height="5em" />
        <div className="overflow-hidden w-full px-4" ref={emblaRef}>
          <div className="flex w-full">
            {data.results.map((movie: any) => (
              <div
                key={movie.id}
                className="min-w-0 w-3"
                style={{
                  flex: "0 0 250px",
                }}
              >
                <img
                  className="w-full h-96 object-cover"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <p className="text-center">{movie.title}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <button onClick={onPrevButtonClick}>prev</button>
            <button onClick={onNextButtonClick}>next</button>
          </div>
        </div>
      </div>
    </>
  );
};
