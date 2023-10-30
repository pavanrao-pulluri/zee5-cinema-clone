import React from "react";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import TvShows from "./pages/tvShows/TvShows";
import WebSeries from "./pages/webSeries/WebSeries";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import SearchPage from "./pages/searchPage/SearchPage";
import VideoPlayer from "./components/videoPlayer/VideoPlayer";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {/* <Nav /> */}
      {location.pathname === "/searchpage" ||
      location.pathname === "/login" ||
      location.pathname === "/signup" ? null : (
        <Nav />
      )}
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        {/* Set /home as the default route */}
        <Route path="/home" element={<Home />} />
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/movies" element={<WebSeries />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/searchpage" element={<SearchPage />} />
        <Route path="/videoplayer" element={<VideoPlayer />} />
      </Routes>
      {location.pathname === "/login" ||
      location.pathname === "/searchpage" ||
      location.pathname === "/tvshows" ||
      location.pathname === "/movies" ||
      location.pathname === "/videoplayer" ||
      location.pathname === "/signup" ? null : (
        <Footer />
      )}
      {/* {location.pathname === "/signup" ? null : <Footer />} */}
    </div>
  );
}

export default App;
