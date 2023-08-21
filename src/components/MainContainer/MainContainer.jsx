import React, { useState, useEffect } from "react";
import upcomingData from "./data/upcoming";
import ovaData from "./data/topOva";
import onaData from "./data/topOna";
import AnimeCollection from "./AnimeCollection";
import LoadingSpinner from "../LoadingSpinner";
import topSpecials from "./data/topSpecials.js";
import TopTenAnime from "../TopTen/TopTenAnime";
export default function MainContainer(props) {
  const topAnime = props.topAnime;
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [ova, setOva] = useState(ovaData);
  const [ona, setOna] = useState(onaData);
  const [specials, setSpecials] = useState(topSpecials);
  const [upcoming, setUpcoming] = useState(upcomingData);
  useEffect(() => {
    let timeout1, timeout2, timeout3, timeout4;

    const fetchData = async (url, setData, defaultData) => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        if (response?.status === 200) {
          setData(result);
        } else {
          throw new Error();
        }
      } catch (error) {
        setData(defaultData);
      }
    };

    timeout1 = setTimeout(async () => {
      await fetchData(
        "https://api.jikan.moe/v4/top/anime?filter=upcoming&limit=12",
        setUpcoming,
        upcomingData
      );
    }, 400);

    timeout2 = setTimeout(async () => {
      await fetchData(
        "https://api.jikan.moe/v4/top/anime?type=ova&filter=bypopularity&limit=12",
        setOva,
        ovaData
      );
    }, 800);

    timeout3 = setTimeout(async () => {
      await fetchData(
        "https://api.jikan.moe/v4/top/anime?type=special&filter=bypopularity&limit=12",
        setSpecials,
        topSpecials
      );
    }, 1200);
    timeout4 = setTimeout(async () => {
      await fetchData(
        "https://api.jikan.moe/v4/top/anime?type=ona&filter=bypopularity&limit=12",
        setOna,
        onaData
      );
    }, 1600);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
    };
  }, []);

  if (
    upcoming.data?.length > 0 &&
    ova.data?.length > 0 &&
    specials.data?.length > 0 &&
    dataIsLoaded === false
  ) {
    setDataIsLoaded(true);
  }

  return (
    <div className="main-container d-flex">
      {dataIsLoaded ? (
        <>
          <div className="sidebar-wrapper">
            <TopTenAnime topAnime={topAnime} />
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
