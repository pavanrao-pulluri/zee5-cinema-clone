import React from "react";
import "./videoPlayer.css";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const videoUrl = searchParams.get("videoUrl");

  if (!videoUrl) {
    return <div>No video URL provided.</div>;
  }

  return (
    <div style={{ marginTop: "80px", background: "#0f0617", height: "90vh" }}>
      <ReactPlayer url={videoUrl} controls={true} height="500px" width="100%" />
    </div>
  );
};

export default VideoPlayer;
