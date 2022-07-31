import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  useAddSuperHeroData,
  useSuperHeroesData,
} from "../hooks/useSuperHeroesData";

const RQSuperHerosPost = () => {
  const [values, setValues] = useState({ name: "", alterEgo: "" });

  const onSuccess = (data) => {
    // console.log("Fetch data successfully callback fn data=>: ", data);
  };

  const onError = (error) => {
    // console.log("Fetch data error callback fn error=>: ", error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData("super-heroes", onSuccess, onError);

  const { mutate: addHero } = useAddSuperHeroData("super-heroes");

  if (isLoading && isFetching) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("values", values);
    addHero(values);
  };

  return (
    <>
      <h1>SuperHeros</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={(e) => setValues((p) => ({ ...p, name: e.target.value }))}
        />
        <input
          type="text"
          name="alterEgo"
          value={values.alterEgo}
          onChange={(e) =>
            setValues((p) => ({ ...p, alterEgo: e.target.value }))
          }
        />
        <button type="submit">Submit</button>
      </form>

      <button onClick={refetch}>Data ReFetch</button>
      {data.data.map((item) => (
        <p key={item.id}>
          <Link to={`/rq-super-heros/${item.id}`}>{item.name}</Link>
        </p>
      ))}
    </>
  );
};

export default RQSuperHerosPost;
