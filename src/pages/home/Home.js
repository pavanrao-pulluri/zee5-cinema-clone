import React from "react";
import Nav from "../../components/nav/Nav";
import BootCarousel from "../../components/bootCarousel/BootCarousel";
import Top10movies from "../../components/top10movies/Top10movies";
// import Top10webSeries from "../../components/top10webseries/Top10webSeries";
// import Top10tvShows from "../../components/top10tvshows/Top10tvShows";
import "./home.css";
import Top10webSeries from "../../components/top10webseries/Top10webSeries";
import TopVideoSongs from "../../components/topvideosongs/TopVideoSongs";
import TopTrailers from "../../components/toptrailers/TopTrailers";
const Home = () => {
  return (
    <div className="home-container">
      <Nav />

      {/* <CarouselSlider /> */}
      <BootCarousel />
      <TopTrailers />
      <Top10movies />
      <Top10webSeries />

      <TopVideoSongs />
      {/* <Top10webSeries /> */}
      {/* <Top10tvShows /> */}
    </div>
  );
};

export default Home;
