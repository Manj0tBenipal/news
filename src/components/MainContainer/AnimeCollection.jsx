import React from "react";
import Card from "../../Card/Card";
import "./main-container.css"
export default function AnimeCollection(props) {
  const data =  props.data.data;
  const cards = data.map((data, idx) => {
    return <Card data={data} />;
  });
  console.log(data);
  return (
    <div className="anime-collection-wrapper">
      <h2>{props.collectionName}</h2>
      <div className="card-wrapper d-flex">{cards}</div>
    </div>
  );
}
