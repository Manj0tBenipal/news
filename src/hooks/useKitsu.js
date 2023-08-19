import axios from "axios";
import { useQuery } from "react-query";

export function useTrendingAnime() {
  return useQuery("trending-anime", async () => {
    return await axios.get("https://kitsu.io/api/edge/trending/anime");
  });
}
