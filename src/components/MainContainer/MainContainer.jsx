import AnimeCollection from "./AnimeCollection";
import LoadingSpinner from "../LoadingSpinner";

import {
  useHandleJikanResponse,
  useTopONAs,
  useTopOVAs,
  useTopSpecials,
  useTopUpcoming,
} from "../../hooks/useJikan";

import MainSidebar from "./MainSidebar";

export default function MainContainer() {
  let isLoading = true;
  const ova = useTopOVAs();
  const ona = useTopONAs();
  const upcoming = useTopUpcoming();
  const specials = useTopSpecials();

  if (
    !(
      ova.isLoading &&
      ona.isLoading &&
      specials.isLoading &&
      upcoming.isLoading
    )
  ) {
    isLoading = false;
  }

  return (
    <div className="main-container d-flex">
      {!isLoading ? (
        <>
          <div className="sidebar-wrapper">
            <MainSidebar />
          </div>
          <div className="collections-wrapper d-flex-fd-column a-center ">
            <AnimeCollection collectionName="Top Upcoming" data={upcoming} />
            <AnimeCollection collectionName="Specials" data={specials} />
            <AnimeCollection collectionName="Top OVA's" data={ova} />
            {/* <AnimeCollection collectionName="Top ONA's" data={ona} /> */}
          </div>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}
