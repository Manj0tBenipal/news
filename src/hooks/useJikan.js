import { useQuery } from "react-query";
import { queueRequest } from "./apiQueue";
const queryConfig = {
  staleTime: 2.1 * 60 * 1000,
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

export function useHandleJikanResponse(response, backupData) {
  const data =
    response.isError || response.data === undefined || response.data === null
      ? backupData
      : response.data?.data;
  return { data: data, isLoading: response.isLoading };
}

export function useMangaReviews() {
  return useMakeQuery("top-manga-reviews", "reviews/manga");
}
export function useAnimeReviews() {
  return useMakeQuery("top-anime-reviews", "reviews/anime");
}

export function useTopAiring() {
  return useMakeQuery("top-airing", "top/anime?filter=airing&limit=4");
}
export function useMostPopular() {
  return useMakeQuery("most-popular", "top/anime?filter=bypopularity&limit=4");
}
export function useMostFavorite() {
  return useMakeQuery("most-favorite", "top/anime?filter=favorite&limit=4");
}
export function useTopMovies() {
  return useMakeQuery(
    "top-movies",
    "top/anime?type=movie&filter=bypopularity&limit=4"
  );
}
export function useTopOVAs() {
  return useMakeQuery(
    "top-OVAs",
    "top/anime?type=ova&filter=bypopularity&limit=12"
  );
}
export function useTopONAs() {
  return useMakeQuery(
    "top-ONAs",
    "top/anime?type=ona&filter=bypopularity&limit=12"
  );
}
export function useTopSpecials() {
  return useMakeQuery(
    "top-specials",
    "top/anime?type=special&filter=bypopularity&limit=12"
  );
}
export function useTopUpcoming() {
  return useMakeQuery("top-upcoming", "top/anime?filter=upcoming&limit=12");
}
export function useGenre() {
  return useMakeQuery("genre", "genres/anime");
}
export function useTopCharacters() {
  return useMakeQuery("top-characters", "top/characters?limit=5");
}
export function useGetAnimeByGenre(mal_id) {
  return useMakeQuery(`anime-by-genre-${mal_id}`, `anime?genres=${mal_id}`);
}
