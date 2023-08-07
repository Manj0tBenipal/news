import React, { useEffect, useState } from "react";
import { FaEvernote } from "react-icons/fa";
import { BiSolidToggleLeft, BiSolidToggleRight } from "react-icons/bi";
import rengokuPng from "../../media/rengoku.png";
import LoadingSpinner from "../LoadingSpinner";
import animeReviewData from "./animeReviewsBak.json";
import mangaReviewData from "./mangaReviewsBak.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "./review-section.css";
import { Scrollbar } from "swiper/modules";
export default function ReviewSection() {
  const [reviewsVisible, setReviewsVisible] = useState(true);
  const [animeReviews, setAnimeReviews] = useState(animeReviewData.data);
  const [mangaReviews, setMangaReviews] = useState(mangaReviewData.data);
  const [reviewsLoaded, setReviewsLoaded] = useState(false);
  const [animeReviewIsSelected, setAnimeReviewIsSelected] = useState(true);

  const reviewType = animeReviewIsSelected ? animeReviews : mangaReviews;
  const reviewCards = reviewType.map((el, idx) => {
    return (
      <SwiperSlide className="review-card" key={el.mal_id}>
        <div className="review-card-header">
          <div className="user-profile d-flex a-center ">
            <img src={el.user.images.webp.image_url} alt="23" />
            <a rel="noreferrer" target="_blank" href={el.user.url}>
              {el.user.username}
            </a>
          </div>
        </div>
        <div className="review-text">{el.review.slice(0, 140) + "..."}</div>
        <div className="anime-title">
          <FaEvernote size={13} />
          {el.entry.title}
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
          <BiSolidToggleLeft
            onClick={() => setReviewsVisible(true)}
            size={35}
          />
        </div>
      ) : (
        <div className="review-section d-flex">
          <img src={rengokuPng} alt="coment" />

          <div className="review-list-container">
            <div className="review-section-toolbar d-flex a-center">
              <div className="review-type">
                <button
                  className={`${
                    animeReviewIsSelected ? "selected" : ""
                  } f-poppins`}
                  onClick={() => setAnimeReviewIsSelected(true)}
                >
                  {" "}
                  Anime
                </button>
                <button
                  className={`${
                    !animeReviewIsSelected ? "selected" : ""
                  } f-poppins`}
                  onClick={() => setAnimeReviewIsSelected(false)}
                >
                  Manga
                </button>
              </div>
              <div className="review-toggle d-flex a-center j-center">
                <span>Show reviews</span>
                <BiSolidToggleRight
                  onClick={() => setReviewsVisible(false)}
                  size={35}
                  style={{ color: "var(--theme)" }}
                />
              </div>
            </div>
            <Swiper
              modules={[Scrollbar]}
              slidesPerView={"auto"}
              scrollbar={{ draggable: true }}
              className="review-list"
              spaceBetween={30}
            >
              {reviewsLoaded ? reviewCards : <LoadingSpinner />}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
}
