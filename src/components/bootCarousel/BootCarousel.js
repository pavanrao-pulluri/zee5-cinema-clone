import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "./bootCarousel.css";
import { useNavigate } from "react-router-dom";
const data = [
  {
    id: 1,
    title: "Gadar 2",
    image:
      "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5437988/cover/1920x770ac7c2520eccc4058985879c5589cfa4b.jpg",
  },
  {
    id: 2,

    title: "prema Entha Maduram",
    image:
      "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-2460/cover/1920x7701747a5eb8e9148abbd07a5e49507e292b84dc208f06f4547a80d0a5fa1bdd8ed.jpg",
  },
  {
    id: 3,

    title: "Haddi",
    image:
      "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5418670/cover/1920x770d19e352a2ff54b3dbda9842e0a838bab.jpg",
  },
  {
    id: 4,

    title: "Sirf Ek Bandha Hi",
    image:
      "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5359029/cover/bandaapfp20in1920x7701610202341e80d46cd55490997c3084c355a47df.jpg",
  },
];
const BootCarousel = () => {
  const navigate = useNavigate();
  const loggedInUser = localStorage.getItem("loggedInUser");
  const [currentPage] = useState(1);
  const [imageslider, setImageSlider] = useState([{}]);
  const [index, setIndex] = useState(1);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const handlehover = (item) => {
    if (loggedInUser) {
      navigate(`/videoplayer?videoUrl=${encodeURIComponent(item.video_url)}`);
    } else {
      navigate("/login");
    }
  };

  // useEffect(() => {
  //   fetch(
  //     `https://academics.newtonschool.co/api/v1/ott/show?page=${currentPage}&limit=6`,
  //     {
  //       headers: {
  //         projectId: "uwszb3q8k7pf",
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setImageSlider(data.data);
  //       console.log(data);
  //     });
  // }, []);
  return (
    <div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="carousel-container"
      >
        {data.map((item) => (
          <Carousel.Item className="carousel-item">
            <img
              // onClick={handlehover(item)}
              src={item.image}
              alt={item.title}
              width="100%"
              // height="500px"
              style={{ objectFit: "contain" }}
            />
            <Carousel.Caption className="carousel-title">
              {/* <Button
                onClick={() => handlehover(item)}
                style={{
                  background: "#8230c6",
                  color: "#fff",
                }}
              >
                Watch
              </Button> */}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default BootCarousel;
