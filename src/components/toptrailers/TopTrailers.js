import React, { useState, useEffect } from "react";
import "./topTrailers.css";
import SliderImage from "../slider/SliderImage";
import NextArrow from "../arrows/nextArrow";
import PrevAroow from "../arrows/prevArrow";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 2,
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

const TopTrailers = () => {
  const [trailer, setTrailer] = useState([{}]);

  useEffect(() => {
    fetch(
      `https://academics.newtonschool.co/api/v1/ott/show?limit=100&type=trailer`,
      {
        headers: {
          projectId: "uwszb3q8k7pf",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setTrailer(data.data));
  }, []);
  return (
    <div className="topmovies">
      <div className="text-container">Top Trailers in India</div>
      <div className="slider">
        {" "}
        <Slider {...settings}>
          {trailer && trailer.length > 0 ? (
            trailer.map((item) => {
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

export default TopTrailers;
