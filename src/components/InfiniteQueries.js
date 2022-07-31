import axios from "axios";
import React from "react";
import { useInfiniteQuery } from "react-query";

const fetchColors = (args) => {
  console.log("args", args);
  const { pageParam = 1 } = args;
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`);
};

const InfiniteQueries = () => {
  const {
    data,
    error,
    isError,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery("colors", fetchColors, {
    getNextPageParam: (lastPage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      <h1>Colors</h1>

      {data?.pages?.map((group, i) => {
        return (
          <React.Fragment key={i}>
            {group.data.map((color) => {
              return <h2 key={color.id}>{color.label}</h2>;
            })}
          </React.Fragment>
        );
      })}

      <button onClick={fetchNextPage} disabled={!hasNextPage}>
        Load More
      </button>
      {isFetching && !isFetchingNextPage && <h5>Loading...</h5>}
    </div>
  );
};

export default InfiniteQueries;
