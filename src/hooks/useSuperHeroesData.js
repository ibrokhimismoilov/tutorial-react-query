import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

const fetchReactQuery = () => {
  return axios("http://localhost:4000/superheroes");
};

const addSuperHero = (data) => {
  return axios.post("http://localhost:4000/superheroes", data);
};

export const useSuperHeroesData = (key, onSuccess, onError) => {
  return useQuery(key, fetchReactQuery, {
    onSuccess,
    onError,
  });
};

export const useAddSuperHeroData = (key) => {
  const queryClient = useQueryClient();

  return useMutation(addSuperHero, {
    onSuccess: (data) => {
      // queryClient.invalidateQueries(key);
      queryClient.setQueryData(key, (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, data?.data],
        };
      });
    },
  });
};
