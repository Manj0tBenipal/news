import React, { useEffect, useState } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import rengokuPng from "../../media/rengoku.png";
import LoadingSpinner from "../LoadingSpinner";
import animeReviewData from "./animeReviewsBak.json";
import mangaReviewData from "./mangaReviewsBak.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "./review-section.css";
import { Pagination, Scrollbar } from "swiper/modules";
export default function ReviewSection() {
  const [reviewsVisible, setReviewsVisible] = useState(true);
  const [animeReviews, setAnimeReviews] = useState(animeReviewData.data);
  const [mangaReviews, setMangaReviews] = useState(mangaReviewData.data);
  const [reviewsLoaded, setReviewsLoaded] = useState(false);
  const [animeReviewIsSelected, setAnimeReviewIsSelected] = useState(true);

  const reviewType = animeReviewIsSelected ? animeReviews : mangaReviews;
  const reviewCards = reviewType.map((el, idx) => {
    return (
      <SwiperSlide className="reviewCard">
        <div className="review-card-header">
          <img src="" alt="23" />
          <span>{el.user.username}</span>
        </div>
        <div className="review-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
          minima, doloremque provident mollitia dolore expedita, quis
          consectetur, explicabo et laborum quae officiis itaque asperiores
          debitis reprehenderit reiciendis possimus animi excepturi?
        </div>
      </SwiperSlide>
    );
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://api.jikan.moe/v4/reviews/anime");
        const result = await response.json();
        setAnimeReviews(result.data);
      } catch (error) {
        console.log(error);
      }

      try {
        const response = await fetch("https://api.jikan.moe/v4/reviews/manga");
        const result = await response.json();
        setMangaReviews(result.data);
      } catch (error) {
        console.log(error);
      }

      setReviewsLoaded(true);
    }
    fetchData();
    return () => {
      setReviewsLoaded(false);
    };
  }, [animeReviewIsSelected]);
  return (
    <div className="review-section-wrapper d-flex a-center j-center">
      {!reviewsVisible ? (
        <div className="review-toggle d-flex a-center j-center">
          <span>Show reviews</span>
          <FaToggleOff onClick={() => setReviewsVisible(true)} size={25} />
        </div>
      ) : (
        <div className="review-section d-flex">
          <img src={rengokuPng} alt="coment" />

          <div className="review-list-container">
            <div className="review-section-toolbar d-flex a-center">
              <div className="review-type">
                <button
                  className={`${!animeReviewIsSelected ? "selected" : ""}`}
                  onClick={() => setAnimeReviewIsSelected(false)}
                >
                  Manga reviews
                </button>
                <button
                  className={`${animeReviewIsSelected ? "selected" : ""}`}
                  onClick={() => setAnimeReviewIsSelected(true)}
                >
                  {" "}
                  Anime reviews
                </button>
              </div>
              <div className="review-toggle d-flex a-center j-center">
                <span>Show reviews</span>
                <FaToggleOn
                  onClick={() => setReviewsVisible(false)}
                  size={30}
                  style={{ color: "var(--theme)" }}
                />
              </div>
            </div>
            <Swiper
              modules={[Scrollbar]}
              slidesPerView={"auto"}
              scrollbar={{ draggable: true }}
              className="review-list "
            >
              {reviewsLoaded ? reviewCards : <LoadingSpinner />}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
}
