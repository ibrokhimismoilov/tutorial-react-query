import axios from "axios";
import React, { useEffect, useState } from "react";

const SuperHerosPage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:4000/superheroes")
      .then((res) => {
        setIsLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <ul>{data && data.map((item) => <li key={item.id}>{item.name}</li>)}</ul>
    </div>
  );
};

export default SuperHerosPage;
