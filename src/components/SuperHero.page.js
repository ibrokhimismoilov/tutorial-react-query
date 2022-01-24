import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSuperHeroData } from "../hooks/useSuperHeroData";

const SuperHeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, data, isError, error, isFetching } = useSuperHeroData(id);

  if (isLoading && isFetching) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      <h1>Super Hero</h1>
      <button onClick={() => navigate(-1)}>back</button>
      {(isLoading || isFetching) && <h1>Loading...</h1>}
      {data?.data && (
        <div>
          <h2>{data.data.name} - {data.data.alterEgo}</h2>
        </div>
      )}
    </div>
  );
};

export default SuperHeroPage;
