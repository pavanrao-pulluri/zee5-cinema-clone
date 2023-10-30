import React, { useState, useEffect } from "react";
import "./searchPage.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
import totaldata from "../../data/totaldata.json";

const SearchPage = () => {
  const navigate = useNavigate();

  const loggedInUser = localStorage.getItem("loggedInUser");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [featuredData, setFeaturedData] = useState([]);
  // const [filteredMovies, setFilteredMovies] = useState([]);
  // const [totaldata] = useState(totaldata);
  const handlehover = (item) => {
    if (loggedInUser) {
      navigate(`/videoplayer?videoUrl=${encodeURIComponent(item.video_url)}`);
    } else {
      navigate("/login");
    }
  };
  const handleSearch = () => {
    if (!searchKeyword) {
      // If the search keyword is empty, show all movies
      setFeaturedData(featuredData);
      // <h2 style={{ color: "white" }}>{`Not found the ${searchKeyword}`}</h2>;
    } else {
      // Filter movies based on the search keyword
      const filtered = totaldata.filter((movie) =>
        movie.title.toLowerCase().includes(searchKeyword.toLowerCase())
      );
      setFeaturedData(filtered);
    }
  };
  useEffect(() => {
    fetch(`https://academics.newtonschool.co/api/v1/ott/show?page=1&limit=3`, {
      headers: {
        projectId: "uwszb3q8k7pf",
      },
    })
      .then((response) => response.json())
      .then((data) => setFeaturedData(data.data));
  }, []);
  console.log(featuredData);
  // console.log(totaldata);
  return (
    <div className="search-page">
      <div className="serach-btn-container">
        <input
          type="text"
          placeholder="Serach for the content want to watch"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          className="input-searchpage"
        />
        <button onClick={handleSearch}>Search</button>
        <span
          class="material-symbols-outlined"
          className="cancel-buttton"
          onClick={() => {
            navigate(-1);
          }}
        >
          close
        </span>
      </div>

      <div>
        <div>
          {featuredData.length === 0 ? (
            <h3 style={{ marginLeft: "100px" }}>No results found</h3>
          ) : (
            <h3 style={{ marginLeft: "100px" }}>Recommended to watch</h3>
          )}
        </div>
        <div className="cards-caontainer">
          {featuredData.map((item) => (
            <Card
              key={item._id}
              // sx={{ maxWidth: 245 }}
              style={{
                margin: "10px",
                width: "250px",
                height: "400px",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={item.thumbnail}
                  alt={item.title}
                  style={{ objectFit: "fill" }}
                />
                <CardContent height="200">
                  <Typography>{item.title}</Typography>
                </CardContent>
              </CardActionArea>
              <Button
                onClick={() => handlehover(item)}
                style={{
                  background: "#8230c6",
                  color: "#fff",
                  marginLeft: "90px",
                }}
              >
                Watch
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
