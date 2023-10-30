import React, { useEffect, useState } from "react";
import "./top10movies.css";
import SliderImage from "../slider/SliderImage";
import NextArrow from "../arrows/nextArrow";
import PrevAroow from "../arrows/prevArrow";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 4,
  nextArrow: <NextArrow />,
  prevArrow: <PrevAroow />,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 475,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};
const Top10movies = () => {
  const [moviesData, setMoviesData] = useState([{}]);

  useEffect(() => {
    fetch(
      `https://academics.newtonschool.co/api/v1/ott/show?limit=100&type=movie`,
      {
        headers: {
          projectId: "uwszb3q8k7pf",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setMoviesData(data.data));
  }, []);

  return (
    <div className="topmovies">
      <div className="text-container">Top Movies in India</div>
      <div className="slider">
        <Slider {...settings}>
          {moviesData && moviesData.length > 0 ? (
            moviesData.map((item) => {
              return <SliderImage item={item} key={item._id} />;
            })
          ) : (
            <p style={{ textAlign: "center" }}>Loading...</p>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default Top10movies;
