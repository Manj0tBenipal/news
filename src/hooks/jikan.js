import axios from "axios";
import { useQuery } from "react-query";

export function useMangaReviews() {
  return useQuery("top-manga-reviews", async () => {
    return axios.get("https://api.jikan.moe/v4/reviews/manga");
  });
}
export function useAnimeReviews() {
  return useQuery("top-anime-reviews", async () => {
    return await axios.get("https://api.jikan.moe/v4/reviews/anime");
  });
}
