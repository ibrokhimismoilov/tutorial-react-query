import axios from "axios";
import { useQuery } from "react-query";

const fetchReactQuery = () => {
    return axios("http://localhost:4000/superheroes");
};

export const useSuperHeroesData = (onSuccess, onError) => {
    return useQuery( "super-heroes", fetchReactQuery,
        { 
          onSuccess,
          onError, 
        }
      );
}