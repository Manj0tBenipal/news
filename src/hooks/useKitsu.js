import axios from "axios";
import { useQuery } from "react-query";
import topAnimeData from "../data/topAnime";
export function useTrendingAnime() {
  const queryObj = useQuery("trending-anime", async () => {
    return await axios
      .get("https://kitsu.io/api/edge/trending/anime")
      .catch((error) => {
        return { data: topAnimeData, isLoading: false };
      });
  });
  const data = queryObj.isError ? topAnimeData.data : queryObj.data?.data.data;
  return { isLoading: queryObj.isLoading, data: data };
}

