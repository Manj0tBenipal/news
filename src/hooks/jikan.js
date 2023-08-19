import { useQuery } from "react-query";
import { queueRequest } from "./apiQueue";
const queryConfig = {
  staleTime: 30 * 60 * 1000,
  cacheTime: 30 * 60 * 1000,
};

function useMakeQuery(queryKey, endpoint) {
  return useQuery(
    queryKey,
    async () => {
      return await queueRequest(endpoint);
    },
    queryConfig
  );
}

export function useMangaReviews() {
  return useMakeQuery("top-manga-reviews", "reviews/manga");
}
export function useAnimeReviews() {
  return useMakeQuery("top-anime-reviews", "reviews/anime");
}

export function useTopAiring() {
  return useMakeQuery("top-airing", "top/anime?filter=airing&limit=5");
}
export function useMostPopular() {
  return useMakeQuery("most-popular", "top/anime?filter=bypopularity&limit=5");
}
export function useMostFavorite() {
  return useMakeQuery("most-favorite", "top/anime?filter=favorite&limit=5");
}
export function useTopMovies() {
  return useMakeQuery(
    "top-movies",
    "top/anime?type=movie&filter=bypopularity&limit=5"
  );
}
