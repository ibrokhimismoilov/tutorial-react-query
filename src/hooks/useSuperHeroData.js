import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

const fetchSuperHero = ({ queryKey }) => {
  const id = queryKey[1];
  return axios(`http://localhost:4000/superheroes/${id}`);
};

export const useSuperHeroData = (id) => {
  const queryClient = useQueryClient();
  return useQuery(["super-hero", id], fetchSuperHero, {
    initialData: () => {
      const hero = queryClient
        .getQueryData("super-heroes")
        ?.data.find((hero) => hero.id === parseInt(id));

      if (hero) {
        return { data: hero };
      } else {
        return undefined;
      }
    },
  });
};
