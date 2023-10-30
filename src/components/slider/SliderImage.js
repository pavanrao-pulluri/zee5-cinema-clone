// import React, { useState } from "react";
// import "./sliderImage.css";
// import { Button } from "@mui/material";
// import VideoPlayer from "../videoPlayer/VideoPlayer";
// import { useNavigate } from "react-router-dom";

// const SliderImage = ({ item }) => {
//   const handleWatchVideo = () => {
//     // Open the video in a new tab using an anchor element
//     window.open(item.video_url, "_blank");
//   };

//   return (
//     <div className="slider-container">
//       <div className="slider-image-continer">
//         <img src={item.thumbnail} alt={item.title} className="slider-image" />
//       </div>
//       <div className="button-container">
//         <a href={item.video_url} target="_blank" rel="noreferrer">
//           <Button className="button" onClick={handleWatchVideo}>
//             Watch Now
//           </Button>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default SliderImage;
import React from "react";
import "./sliderImage.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SliderImage = ({ item }) => {
  const loggedInUser = localStorage.getItem("loggedInUser");
  const navigate = useNavigate();

  const handleWatchVideo = () => {
    if (loggedInUser) {
      navigate(`/videoplayer?videoUrl=${encodeURIComponent(item.video_url)}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="slider-container">
      <div className="slider-image-continer">
        <img src={item.thumbnail} alt={item.title} className="slider-image" />
      </div>
      <div className="button-container">
        <Button className="button" onClick={handleWatchVideo}>
          Watch Now
        </Button>
      </div>
    </div>
  );
};

export default SliderImage;
