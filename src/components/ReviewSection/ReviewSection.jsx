import React, { useState } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

export default function ReviewSection() {
  const [reviewsVisible, setReviewsVisible] = useState(false);
  const [animeReviews, setAnimeReviews] = useState([]);
  const [mangaReviews, setMangaReviews] = useState([]);
  return (
    <div className="review-section-wrapper">
      {!reviewsVisible ? (
        <div className="review-toggle">
          <p>Show reviews</p>
          <FaToggleOff onClick={() => setReviewsVisible(true)} size={20} />
        </div>
      ) :

      (<div className="review-section">
        <img src="" alt="coment" />
        <div className="review-section-toolbar">
          <div className="review-type">
            <button>Manga reviews</button>
            <button> Anime reviews</button>
          </div>
          <div className="review-toggle">
            <p>Show reviews</p>
            <FaToggleOn onClick={() => setReviewsVisible(false)} size={20} />
          </div>
        </div>
        <div className="review-list"></div>
      </div>)}
    </div>
  );
}
