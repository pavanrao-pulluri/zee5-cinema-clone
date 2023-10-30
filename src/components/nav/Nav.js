import React, { useState } from "react";
import "./nav.css";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
const Nav = () => {
  const navigate = useNavigate();
  const [menuVisible, setMenuVisible] = useState(false);
  const loggedInUser = localStorage.getItem("loggedInUser");
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <>
      <div className="nav-container">
        <div className="left-container">
          <Link to="/">
            <img
              src="https://www.zee5.com/images/ZEE5_logo.svg?ver=3.15.4"
              alt="text"
              style={{ height: "40px" }}
              className="img-container"
            />
          </Link>
          <div className="ul-list-container">
            <NavLink to={"/home"} className={"li-list-container"}>
              Home
            </NavLink>
            <NavLink to={"/tvshows"} className={"li-list-container"}>
              Tv Shows
            </NavLink>
            <NavLink to={"/movies"} className={"li-list-container"}>
              Movies
            </NavLink>
          </div>
        </div>
        <div className="right-container">
          <input
            className="input-search"
            type="text"
            onClick={() => {
              navigate("/searchpage");
            }}
            placeholder="Search for Movies, Shows, Channels...."
            style={{
              paddingLeft: "20px",
              marginRight: "10px",
              width: "290px",
            }}
          />
          {loggedInUser ? (
            <div className="login-avatar">
              <Avatar
                style={{ color: "white" }}
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                {loggedInUser.slice(0, 1)}
              </Avatar>

              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                // onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem
                  style={{ margin: "-5px" }}
                  onClick={() => {
                    localStorage.removeItem("loggedInUser");
                    navigate("/");
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <button
              className="login-button"
              onClick={() => {
                navigate("/login");
              }}
            >
              LOGIN
            </button>
          )}
          <button className="align-button" onClick={toggleMenu}>
            {!menuVisible ? (
              <span class="material-symbols-outlined">menu</span>
            ) : (
              <span class="material-symbols-outlined">close</span>
            )}
          </button>
        </div>
        <div className={`slider-menu ${menuVisible ? "visible" : ""}`}>
          <Link to={"/"} onClick={toggleMenu}>
            Home
          </Link>
          <Link to={"/tvshows"} onClick={toggleMenu}>
            Tv Shows
          </Link>
          <Link to={"/movies"} onClick={toggleMenu}>
            Movies
          </Link>
          {/* <Link to={"/login"} onClick={toggleMenu}> */}
          {loggedInUser ? (
            <div
              style={{
                textAlign: "center",
              }}
            >
              <Avatar className="avathar">{loggedInUser.slice(0, 1)}</Avatar>
              <button
                style={{ marginRight: "60px" }}
                className="login-button-toggle"
                onClick={() => {
                  localStorage.removeItem("loggedInUser");
                  navigate("/");
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              className="login-button-toggle"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login / SignUp
            </button>
          )}
          {/* </Link> */}
        </div>
      </div>
    </>
  );
};

export default Nav;
