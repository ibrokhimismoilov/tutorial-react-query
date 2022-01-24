import React from "react";
import axios from "axios";
import { useQueries } from "react-query";

const fetchSuperHero = (id) => {
  return axios(`http://localhost:4000/superheroes/${id}`);
};

const DynamicParalelPage = ({heroIds}) => {
  const queriesRuselts =  useQueries(heroIds.map(id=>{
    return {
      queryKey: ['super-hero', id],
      queryFn: () => fetchSuperHero(id), 
    }
  }))

  console.log(queriesRuselts);
    
  return <h1>DynamicParalelPage</h1>
};

export default DynamicParalelPage;