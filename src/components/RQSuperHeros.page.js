import React from "react";
import { Link } from "react-router-dom";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

const RQSuperHerosPage = () => {
  const onSuccess = (data) => {
    // console.log("Fetch data successfully callback fn data=>: ", data);
  };

  const onError = (error) => {
    // console.log("Fetch data error callback fn error=>: ", error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);

  if (isLoading && isFetching) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <h1>SuperHeros</h1>
      <button onClick={refetch}>Data Fetch</button>

      {data.data.map((item) => (
        <p key={item.id}>
          <Link to={`/rq-super-heros/${item.id}`}>
            {item.name}
          </Link>
        </p>
      ))}
    </>
  );
};

export default RQSuperHerosPage;
