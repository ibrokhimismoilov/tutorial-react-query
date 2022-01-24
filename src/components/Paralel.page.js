import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeros = () => {
  return axios("http://localhost:4000/superheroes");
};

const fetchFriends = () => {
  return axios("http://localhost:4000/friends");
};

const ParalelPage = () => {
  const {data: superHeros} =  useQuery("fetchHeros", fetchSuperHeros)
  const {data: friends} =  useQuery("fetchFriends", fetchFriends)
  
  console.log({superHeros, friends});
  
  return <h1>Paralel</h1>
};

export default ParalelPage;

