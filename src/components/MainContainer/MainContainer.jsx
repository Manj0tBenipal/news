import AnimeCollection from "./AnimeCollection";
import LoadingSpinner from "../LoadingSpinner";
import TopTenAnime from "../TopTen/TopTenAnime";
import {
  useHandleJikanResponse,
  useTopONAs,
  useTopOVAs,
  useTopSpecials,
  useTopUpcoming,
} from "../../hooks/jikan";
import {
  onaData,
  ovaData,
  specialsData,
  upcomingData,
} from "../../data/mainSection";
export default function MainContainer() {
  const ova = useHandleJikanResponse(useTopOVAs(), ovaData);
  const ona = useHandleJikanResponse(useTopONAs(), onaData);
  const specials = useHandleJikanResponse(useTopSpecials(), specialsData);
  const upcoming = useHandleJikanResponse(useTopUpcoming(), upcomingData);
  const isLoading = true;

  if (
    upcoming.data?.length > 0 &&
    ova.data?.length > 0 &&
    specials.data?.length > 0
  ) {
    isLoading = false;
  }

  return (
    <div className="main-container d-flex">
      {isLoading ? (
        <>
          <div className="sidebar-wrapper">
            <TopTenAnime />
          </div>
          <div className="collections-wrapper d-flex-fd-column a-center j-center">
            <AnimeCollection collectionName="Top Upcoming" data={upcoming} />
            <AnimeCollection collectionName="Specials" data={specials} />
            <AnimeCollection collectionName="Top OVA's" data={ova} />
            <AnimeCollection collectionName="Top ONA's" data={ona} />
          </div>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}
