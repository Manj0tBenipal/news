import React, { useState, useEffect } from "react";
import upcomingData from "./data/upcoming";
import ovaData from "./data/topOva";
import AnimeCollection from "./AnimeCollection";
import LoadingSpinner from "../LoadingSpinner";
import topSpecials from "./data/topSpecials.js";
export default function MainContainer() {
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [ova, setOva] = useState(ovaData);
  const [specials, setSpecials] = useState(topSpecials);
  const [upcoming, setUpcoming] = useState(upcomingData);
  //   useEffect(() => {
  //     let timeout1, timeout2, timeout3;

  //     const fetchData = async (url, setData, defaultData) => {
  //       try {
  //         const response = await fetch(url);
  //         const result = await response.json();
  //         if (response?.status == 200) {
  //           setData(result);
  //         } else {
  //           throw new Error();
  //         }
  //       } catch (error) {
  //         setData(defaultData);
  //       }
  //     };

  //     timeout1 = setTimeout(async () => {
  //       await fetchData(
  //         "https://api.jikan.moe/v4/top/anime?filter=upcoming&limit=10",
  //         setUpcoming,
  //         upcomingData
  //       );
  //     }, 0);

  //     timeout2 = setTimeout(async () => {
  //       await fetchData(
  //         "https://api.jikan.moe/v4/top/anime?type=ova&filter=bypopularity&limit=10",
  //         setOva,
  //         ovaData
  //       );
  //     }, 400);

  //     timeout3 = setTimeout(async () => {
  //       await fetchData(
  //         "https://api.jikan.moe/v4/top/anime?type=special&filter=bypopularity&limit=10",
  //         setSpecials,
  //         topSpecials
  //       );
  //     }, 800);

  //     return () => {
  //       clearTimeout(timeout1);
  //       clearTimeout(timeout2);
  //       clearTimeout(timeout3);
  //     };
  //   }, []);
  console.log(ova);
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
          <div className="collections-wrapper d-flex-fd-column a-center j-center">
            <AnimeCollection collectionName="Top Upcoming" data={upcoming} />
            <AnimeCollection collectionName="Specials" data={specials} />
            <AnimeCollection collectionName="Top OVA's" data={ova} />
          </div>
          <div className="sidebar-wrapper"></div>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}
